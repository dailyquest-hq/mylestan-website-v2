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
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    await transporter.sendMail({
      from: `"Myles Tan Website" <${process.env.GMAIL_USER}>`,
      to: 'mylestan@gmail.com',
      subject: `New newsletter subscriber: ${email}`,
      text: `New subscriber signed up: ${email}`,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
