import { NextRequest, NextResponse } from "next/server";

// Contact form -> n8n "Portfolio contact (AI)" workflow.
// The webhook URL and secret stay on the server, so visitors never see them.
//   N8N_CONTACT_WEBHOOK_URL  e.g. https://<your-n8n>/webhook/portfolio-contact
//   N8N_CONTACT_SECRET       the value of the n8n Header Auth credential (header X-Portfolio-Secret)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field. Pretend it worked and drop it.
  if (clean(body.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 4000);
  if (!name || !EMAIL_RE.test(email) || message.length < 2) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, a valid email and a message." }, { status: 400 });
  }

  const url = process.env.N8N_CONTACT_WEBHOOK_URL;
  const secret = process.env.N8N_CONTACT_SECRET;
  if (!url || !secret) {
    console.warn("Contact form: N8N_CONTACT_WEBHOOK_URL or N8N_CONTACT_SECRET is not set.");
    if (process.env.NODE_ENV !== "production") {
      console.log("New portfolio contact (dev, not forwarded):", { name, email, message });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, error: "Contact form is not configured." }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Portfolio-Secret": secret },
      body: JSON.stringify({ name, email, message, source: "portfolio" }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("Contact form: n8n responded", res.status);
      return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: n8n unreachable", err);
    return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
  }
}
