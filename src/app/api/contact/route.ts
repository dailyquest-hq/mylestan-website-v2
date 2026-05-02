import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FROM_ADDRESS = 'noreply@mylesyeotan.com';
const NOTIFY_TO = 'mylestan@gmail.com';
const SITE_URL = 'https://mylesyeotan.com';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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

    const safeName = name.replace(/[\r\n]/g, ' ').trim();

    const { error } = await resend.emails.send({
      from: `Myles Tan Website <${FROM_ADDRESS}>`,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    if (error) {
      console.error('[contact] resend error:', error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    const safeNameHtml = escapeHtml(safeName);
    const messageHtml = escapeHtml(message).replace(/\r?\n/g, '<br>');

    const autoReplyText = `Hi ${safeName},

Thanks for reaching out — your message has been received and I'll get back to you personally within 1–2 business days.

For your records, here's what you sent:

${message}

In the meantime, you can find more on my work, talks, and writing at ${SITE_URL}.

Talk soon,
Myles Yeo Tan
${SITE_URL}`;

    const autoReplyHtml = `<!doctype html>
<html><body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#282828;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #e5e5e5;">
        <tr><td style="background:#0f100a;color:#ffffff;padding:32px;">
          <h1 style="margin:0;font-size:24px;font-weight:600;letter-spacing:-0.01em;">Thanks for reaching out</h1>
          <p style="margin:8px 0 0;color:#cfcfcf;font-size:14px;">Myles Yeo Tan</p>
        </td></tr>
        <tr><td style="padding:32px;">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Hi ${safeNameHtml},</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Thanks for getting in touch. Your message has been received and I'll get back to you personally within <strong>1–2 business days</strong>.</p>
          <p style="margin:24px 0 8px;font-size:13px;color:#9f9f9f;text-transform:uppercase;letter-spacing:0.06em;">Your message</p>
          <div style="border-left:3px solid #ed5128;padding:12px 16px;background:#fafafa;font-size:15px;line-height:1.6;color:#282828;">${messageHtml}</div>
          <p style="margin:24px 0 0;font-size:15px;line-height:1.6;color:#575756;">In the meantime, feel free to explore my recent talks, writing, and work at <a href="${SITE_URL}" style="color:#ed5128;text-decoration:none;">mylesyeotan.com</a>.</p>
          <p style="margin:32px 0 0;font-size:15px;line-height:1.6;">Talk soon,<br><strong>Myles Yeo Tan</strong></p>
        </td></tr>
        <tr><td style="background:#fafafa;padding:20px 32px;border-top:1px solid #e5e5e5;font-size:12px;color:#9f9f9f;">
          You're receiving this because you submitted the contact form at <a href="${SITE_URL}" style="color:#9f9f9f;">mylesyeotan.com</a>. Replies to this email go directly to me.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

    try {
      const { error: autoReplyError } = await resend.emails.send({
        from: `Myles Yeo Tan <${FROM_ADDRESS}>`,
        to: email,
        replyTo: NOTIFY_TO,
        subject: 'Thanks for reaching out — Myles Yeo Tan',
        text: autoReplyText,
        html: autoReplyHtml,
      });
      if (autoReplyError) {
        console.error('[contact] auto-reply resend error:', autoReplyError);
      }
    } catch (autoReplyErr) {
      console.error('[contact] auto-reply send error:', autoReplyErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] send error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
