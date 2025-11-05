import { APIGatewayEvent } from 'aws-lambda';

export async function getUser(event: APIGatewayEvent) {
  try {
    // Get the token from the Authorization header
    const token = event.headers.authorization?.split(' ')[1];
    if (!token) {
      return null;
    }

    // Verify with Netlify Identity
    const response = await fetch('/.netlify/identity/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Auth error:', error);
    return null;
  }
}

export function validateEnvVars() {
  const required = ['NEON_DATABASE_URL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

export function sanitizeError(error: unknown): string {
  if (error instanceof Error) {
    // Remove sensitive information from error messages
    return error.message.replace(/postgres:\/\/[^@]+@/, 'postgres://[redacted]@');
  }
  return 'An unknown error occurred';
}