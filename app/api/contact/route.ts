import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
const TO = process.env.NEXT_CONTACT_EMAIL!;

// Validate incoming JSON
const schema = z.object({
  first: z.string().min(1).max(60),
  last: z.string().min(1).max(60),
  email: z.string().email().max(120),
  subject: z.string().min(1).max(120),
  message: z.string().min(1).max(4000),
});

function sanitize(s: string) {
  return s.replace(/[\r\n]/g, ' ').trim();
}

export async function POST(req: Request) {

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { first, last, email, subject, message } = parsed.data;

  try {
    await resend.emails.send({
      from: 'Purva Zinjarde <onboarding@resend.dev>',
      to: [TO],
      replyTo: email,
      subject: `${sanitize(subject)} — ${sanitize(first)} ${sanitize(last)}`,
      text: `From: ${sanitize(first)} ${sanitize(last)} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }
}
