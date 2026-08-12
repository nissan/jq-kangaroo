import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only protect the chat route
  if (request.nextUrl.pathname.startsWith("/chat")) {
    const accessCode = request.cookies.get("kb_access_code")?.value;
    const expectedCode = process.env.NEXT_PUBLIC_ACCESS_CODE;

    console.log("Middleware check:", {
      path: request.nextUrl.pathname,
      accessCode,
      expectedCode,
      cookies: request.cookies.getAll(),
      headers: Object.fromEntries(request.headers.entries()),
    });

    // If we're already on the home page, don't redirect
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    if (!accessCode || accessCode !== expectedCode) {
      console.log("Access denied, redirecting to home");
      // Redirect to home page if not authenticated
      return NextResponse.redirect(new URL("/", request.url));
    }

    console.log("Access granted, proceeding to chat");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/chat/:path*", "/"],
};
