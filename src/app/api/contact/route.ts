import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();

    if (
      typeof name !== 'string' || name.length < 1 || name.length > 100 ||
      typeof email !== 'string' || !EMAIL_REGEX.test(email) || email.length > 254 ||
      typeof message !== 'string' || message.length < 1 || message.length > 10000
    ) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Myles Tan Website <noreply@mylesyeotan.com>',
      to: 'mylestan@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    if (error) {
      console.error('[contact] resend error:', error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] send error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
