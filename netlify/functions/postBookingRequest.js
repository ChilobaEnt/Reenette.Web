import { Client } from 'pg';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function handler(event) {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    const { name, Client: email, 'tour-id': tourId, 'tour-name': tourName, 'preferred-date': preferredDate, participants, 'special-requests': specialRequests } = payload;

    const client = new Client({ connectionString: process.env.NEON_DATABASE_URL });
    await client.connect();

    await client.query(
      `INSERT INTO booking_requests (name, email, tour_id, tour_name, preferred_date, participants, special_requests)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [name || null, email || null, tourId || null, tourName || null, preferredDate || null, participants || null, specialRequests || null]
    );

    await client.end();

    // Send email notification via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      const to = process.env.NOTIFY_EMAIL || 'info@reenette.com';
      const from = process.env.FROM_EMAIL || 'no-reply@reenette.com';
      const subject = `New booking request: ${tourName || 'Tour'}`;
      const html = `
        <p><strong>Name:</strong> ${name || ''}</p>
        <p><strong>Email:</strong> ${email || ''}</p>
        <p><strong>Tour:</strong> ${tourName || ''} (ID: ${tourId || ''})</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || ''}</p>
        <p><strong>Participants:</strong> ${participants || ''}</p>
        <p><strong>Special Requests:</strong><br/>${specialRequests || ''}</p>
      `;

      try {
        await sgMail.send({ to, from, subject, html });
      } catch (mailErr) {
        console.error('SendGrid error (booking):', mailErr);
      }
    }

    return { statusCode: 201, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to save booking request' }) };
  }
}
