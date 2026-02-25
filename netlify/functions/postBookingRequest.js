import { Client } from 'pg';

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

    return { statusCode: 201, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to save booking request' }) };
  }
}
