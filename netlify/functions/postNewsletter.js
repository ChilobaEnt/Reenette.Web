import { Client } from 'pg';
// Do not import SendGrid at module load time. We'll dynamically import it inside
// the handler only when `SENDGRID_API_KEY` is configured to avoid runtime
// failures when the package is not installed or the API key is not set.

export async function handler(event) {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    const { email } = payload;

    if (!email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Email is required' }) };
    }

    // persist to database (if configured)
    try {
      const client = new Client({ connectionString: process.env.NEON_DATABASE_URL });
      await client.connect();
      await client.query(
        'INSERT INTO newsletter_subscriptions (email, created_at) VALUES ($1, NOW())',
        [email]
      );
      await client.end();
    } catch (dbErr) {
      console.error('DB insert failed (newsletter):', dbErr);
    }

    // send notification to site owner via SendGrid if configured
    if (process.env.SENDGRID_API_KEY) {
      let sgMail = null;
      try {
        sgMail = (await import('@sendgrid/mail')).default;
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      } catch (importErr) {
        console.error('SendGrid module not available or failed to load:', importErr);
        sgMail = null;
      }

      if (sgMail) {
        const to = process.env.NOTIFY_EMAIL || 'info@reenette.com';
        const from = process.env.FROM_EMAIL || 'no-reply@reenette.com';
        const subject = `New newsletter subscription: ${email}`;
        const html = `<p>New subscriber: <strong>${email}</strong></p>`;
        try {
          await sgMail.send({ to, from, subject, html });
        } catch (mailErr) {
          console.error('SendGrid error (newsletter):', mailErr);
        }
      } else {
        console.warn('SENDGRID_API_KEY is set but @sendgrid/mail could not be loaded; skipping email send.');
      }
    }

    // Forward to FormSubmit as a fallback
    try {
      const formSubmitEndpoint = `https://formsubmit.co/${process.env.NOTIFY_EMAIL || 'info@reenette.com'}`;
      const params = new URLSearchParams();
      params.append('Client', email);
      params.append('message', 'Newsletter subscription');

      const res = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
      if (!res.ok) console.error('FormSubmit forward failed (newsletter):', res.status);
    } catch (forwardErr) {
      console.error('FormSubmit forward error (newsletter):', forwardErr);
    }

    return { statusCode: 201, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to subscribe' }) };
  }
}
