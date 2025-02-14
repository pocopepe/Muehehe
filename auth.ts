import { Hono } from 'hono';
import { OAuth2Client } from 'google-auth-library';
import { config } from 'dotenv';

config();

const app = new Hono();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

type GoogleUser = {
  email: string;
  email_verified: boolean;
  name?: string;
  picture?: string;
};

// Middleware to verify Google ID Token
const verifyGoogleToken = async (c, next) => {
  const token = c.req.header('Authorization')?.split(' ')[1];
  if (!token) return c.json({ error: 'No token provided' }, 401);

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email_verified) {
      return c.json({ error: 'Email not verified' }, 403);
    }

    c.set('user', payload);
    await next();
  } catch (error) {
    return c.json({ error: 'Invalid token' }, 401);
  }
};

// Protected route that requires email authentication
app.get('/protected', verifyGoogleToken, (c) => {
  const user = c.get<GoogleUser>('user'); // ✅ Specify the type
  if (!user) return c.json({ error: 'User not found' }, 401);

  return c.json({ message: `Hello, ${user.email}` });
});


export default app;
