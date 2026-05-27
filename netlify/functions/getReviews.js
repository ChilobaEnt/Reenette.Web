import { Client } from 'pg';

export async function handler(event) {
  const tourId = event.queryStringParameters?.tour_id;

  if (!tourId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required query parameter: tour_id' }),
    };
  }

  const connectionString = process.env.NEON_DATABASE_URL;
  if (!connectionString) {
    console.error('NEON_DATABASE_URL is not set');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Database configuration missing' }),
    };
  }

  const client = new Client({
    connectionString,
    statement_timeout: 5000,
  });

  try {
    await client.connect();
    const result = await client.query(
      'SELECT id, tour_id, user_id, rating, comment, created_at FROM reviews WHERE tour_id = $1 ORDER BY created_at DESC',
      [tourId]
    );
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
    };
  } catch (err) {
    console.error('getReviews error:', err && err.message ? err.message : err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch reviews', details: err && err.message ? err.message : undefined }),
    };
  } finally {
    try {
      await client.end();
    } catch (e) {
      console.warn('Error closing DB client', e && e.message ? e.message : e);
    }
  }
}
