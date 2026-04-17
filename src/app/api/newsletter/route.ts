import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { email } = await req.json();

    if (typeof email !== 'string' || !EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Myles Tan Website <noreply@mylesyeotan.com>',
      to: 'mylestan@gmail.com',
      subject: `New newsletter subscriber: ${email}`,
      text: `New subscriber signed up: ${email}`,
    });
    if (error) {
      console.error('[newsletter] resend error:', error);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[newsletter] send error:', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
