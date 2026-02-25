import { Client } from 'pg';

export async function handler(event) {
  try {
    const { tour_id, user_id, rating, comment } = JSON.parse(event.body || '{}');

    const client = new Client({ connectionString: process.env.NEON_DATABASE_URL });
    await client.connect();

    await client.query(
      'INSERT INTO reviews (tour_id, user_id, rating, comment) VALUES ($1, $2, $3, $4)',
      [tour_id, user_id || null, rating, comment || null]
    );

    await client.end();

    return {
      statusCode: 201,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit review' }),
    };
  }
}
