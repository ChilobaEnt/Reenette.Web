import { Client } from 'pg';

export async function handler(event) {
  const tourId = event.queryStringParameters?.tour_id;
  const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
  });

  try {
    await client.connect();
    const result = await client.query(
      'SELECT id, tour_id, user_id, rating, comment, created_at FROM reviews WHERE tour_id = $1 ORDER BY created_at DESC',
      [tourId]
    );
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch reviews' }),
    };
  }
}
