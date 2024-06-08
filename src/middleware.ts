import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isTeaser } from "./libs/utils";

export function middleware(request: NextRequest) {
  if (isTeaser) {
    const { pathname } = request.nextUrl;

    if (pathname === "/") {
      return NextResponse.next();
    }

    if (
      pathname.startsWith("/_next") || // Next.js internals
      pathname.startsWith("/static") || // Static files
      pathname.startsWith("/api") || // API routes
      pathname.startsWith("/favicon.ico") || // Favicon
      pathname.startsWith("/robots.txt") // Robots.txt
    ) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/:path*",
};
