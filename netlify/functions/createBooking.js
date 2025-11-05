import { Client } from 'pg';

export async function handler(event) {
  const body = JSON.parse(event.body);

  const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
  });

  try {
    await client.connect();
    await client.query(
      'INSERT INTO bookings (user_id, tour_id, status) VALUES ($1, $2, $3)',
      [body.user_id, body.tour_id, 'pending']
    );
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Booking created successfully!' }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create booking' }),
    };
  }
}