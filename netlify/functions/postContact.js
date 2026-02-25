import { Client } from 'pg';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function handler(event) {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    const { name, Client: email, destination, message } = payload;

    const client = new Client({ connectionString: process.env.NEON_DATABASE_URL });
    await client.connect();

    await client.query(
      'INSERT INTO contact_messages (name, email, destination, message) VALUES ($1, $2, $3, $4)',
      [name || null, email || null, destination || null, message || null]
    );

    await client.end();

    // Send email notification via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      const to = process.env.NOTIFY_EMAIL || 'info@reenette.com';
      const from = process.env.FROM_EMAIL || 'no-reply@reenette.com';
      const subject = `New contact message from ${name || 'Website visitor'}`;
      const html = `
        <p><strong>Name:</strong> ${name || ''}</p>
        <p><strong>Email:</strong> ${email || ''}</p>
        <p><strong>Destination:</strong> ${destination || ''}</p>
        <p><strong>Message:</strong><br/>${message || ''}</p>
      `;

      try {
        await sgMail.send({ to, from, subject, html });
      } catch (mailErr) {
        console.error('SendGrid error (contact):', mailErr);
      }
    }

    // Forward to FormSubmit programmatically (server-side)
    try {
      const formSubmitEndpoint = `https://formsubmit.co/${process.env.NOTIFY_EMAIL || 'info@reenette.com'}`;
      const params = new URLSearchParams();
      params.append('name', name || '');
      params.append('Client', email || '');
      params.append('destination', destination || '');
      params.append('message', message || '');

      // server-side POST; FormSubmit may still require activation for the recipient
      const res = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
      if (!res.ok) console.error('FormSubmit forward failed (contact):', res.status);
    } catch (forwardErr) {
      console.error('FormSubmit forward error (contact):', forwardErr);
    }

    return { statusCode: 201, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to save contact message' }) };
  }
}
