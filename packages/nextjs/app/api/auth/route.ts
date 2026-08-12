import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { accessCode } = await request.json();
  const expectedCode = process.env.NEXT_PUBLIC_ACCESS_CODE;

  if (accessCode === expectedCode) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("kb_access_code", accessCode, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ success: false, error: "Invalid access code" }, { status: 401 });
}
