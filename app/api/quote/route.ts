import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    if (!body.name || !body.email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    console.log("[Quote Request]", {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
