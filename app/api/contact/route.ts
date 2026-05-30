import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    console.log("[Contact Request]", {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
