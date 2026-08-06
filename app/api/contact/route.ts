import { NextRequest, NextResponse } from "next/server";

// This route runs on the Node.js server (Next.js API route).
// Swap the TODO below for a real email/CRM integration (e.g. Nodemailer,
// Resend, or forward to a Spring Boot service) when you're ready to wire
// up real delivery.
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: send email / persist to DB / forward to Spring Boot backend.
    console.log("New portfolio contact:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
