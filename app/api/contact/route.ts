import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

const DEFAULT_CONTACT_EMAIL = "wolfjame@gmail.com";
const DEFAULT_FROM_EMAIL = "Contact Form <onboarding@resend.dev>";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildContactEmail(body: {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}) {
  const phoneRow = body.phone
    ? `<tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;">Phone</td><td>${escapeHtml(body.phone)}</td></tr>`
    : "";

  const html = `
    <h2>New contact form submission</h2>
    <table style="border-collapse:collapse;">
      <tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;">Name</td><td>${escapeHtml(body.name)}</td></tr>
      <tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;">Email</td><td><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td></tr>
      ${phoneRow}
      <tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;">Subject</td><td>${escapeHtml(body.subject)}</td></tr>
    </table>
    <h3 style="margin-top:24px;">Message</h3>
    <p style="white-space:pre-wrap;">${escapeHtml(body.message)}</p>
    <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;" />
    <p style="color:#64748b;font-size:12px;">Sent via ${escapeHtml(siteConfig.name)} contact form</p>
  `.trim();

  const text = [
    "New contact form submission",
    "",
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    body.phone ? `Phone: ${body.phone}` : null,
    `Subject: ${body.subject}`,
    "",
    "Message:",
    body.message,
    "",
    `— ${siteConfig.name}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { html, text };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "Name, email, subject, and message are required." }, { status: 400 });
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Contact] RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const phone = typeof body.phone === "string" && body.phone.trim() ? body.phone.trim() : undefined;
    const { html, text } = buildContactEmail({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      phone,
    });

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL ?? DEFAULT_CONTACT_EMAIL,
      replyTo: body.email,
      subject: `[${siteConfig.shortName}] ${body.subject}`,
      html,
      text,
    });

    if (error) {
      console.error("[Contact] Resend error:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
