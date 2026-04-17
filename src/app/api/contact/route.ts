import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const { error } = await resend.emails.send({
      from: 'Myles Tan Website <onboarding@resend.dev>',
      to: 'mylestan@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    if (error) {
      console.error('[contact] resend error:', error);
      return NextResponse.json({ error: 'Failed to send', detail: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] send error:', err);
    return NextResponse.json({ error: 'Failed to send', detail: String(err) }, { status: 500 });
  }
}
