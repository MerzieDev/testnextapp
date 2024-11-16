import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  return NextResponse.redirect(new URL(request.nextUrl.origin, request.url))
}

export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*"],
};
