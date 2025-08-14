import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

export const runtime = 'nodejs';           // ensures Node runtime (not edge)
export const dynamic = 'force-dynamic';    // no caching of POST

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
  // avoid header injection via newlines
  return s.replace(/[\r\n]/g, ' ').trim();
}

export async function POST(req: Request) {
  // Basic rate-limit seed (upgrade to Redis for production)
  // const ip = req.headers.get('x-forwarded-for') ?? 'unknown';

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
      // Use onboarding@resend.dev for dev; switch to your verified domain later
      from: 'Purva Zinjarde <onboarding@resend.dev>',
      to: [TO],
      reply_to: email, // lets you reply to the sender directly
      subject: `${sanitize(subject)} — ${sanitize(first)} ${sanitize(last)}`,
      text: `From: ${sanitize(first)} ${sanitize(last)} <${email}>\n\n${message}`,
      // You can also send HTML here if you prefer
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Don’t leak provider errors to client
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }
}
