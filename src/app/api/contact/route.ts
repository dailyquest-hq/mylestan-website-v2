import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    await transporter.sendMail({
      from: `"Myles Tan Website" <${process.env.GMAIL_USER}>`,
      to: 'mylestan@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] sendMail error:', err);
    return NextResponse.json({ error: 'Failed to send', detail: String(err) }, { status: 500 });
  }
}
