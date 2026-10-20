import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;
  if (!formspreeId) {
    console.log("[contact]", { name, email, message });
    return NextResponse.json({
      ok: true,
      note: "Logged locally — set FORMSPREE_FORM_ID to deliver email.",
    });
  }

  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject: `Note from ${name}`,
      message,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
