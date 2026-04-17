import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    await resend.emails.send({
      from: 'Myles Tan Website <noreply@mylesyeotan.com>',
      to: 'mylestan@gmail.com',
      subject: `New newsletter subscriber: ${email}`,
      text: `New subscriber signed up: ${email}`,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[newsletter] send error:', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
