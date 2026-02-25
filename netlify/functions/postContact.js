import { Client } from 'pg';

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

    return { statusCode: 201, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to save contact message' }) };
  }
}
