import { Client } from 'pg';

export async function handler(event) {
  const userId = event.queryStringParameters.user_id;
  const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
  });

  try {
    await client.connect();
    const result = await client.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch bookings' }),
    };
  }
}