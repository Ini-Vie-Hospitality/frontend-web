import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiUrl = process.env.CMS_API_URL;
  if (!apiUrl)
    return NextResponse.json(
      { message: "Concierge is unavailable." },
      { status: 503 },
    );

  const response = await fetch(
    `${apiUrl.replace(/\/$/, "")}/api/concierge/chat`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(await request.json()),
      cache: "no-store",
    },
  );

  return NextResponse.json(await response.json(), { status: response.status });
}
