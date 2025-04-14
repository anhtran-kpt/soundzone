import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = !!token;
  const isAdmin = token?.role === "ADMIN";

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }

    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (
    pathname.startsWith("/library") ||
    pathname.startsWith("/playlists") ||
    pathname.includes("/create")
  ) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  if (
    isAuthenticated &&
    (pathname.startsWith("/signin") || pathname.startsWith("/signup"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/library/:path*",
    "/playlists/:path*",
    "/create/:path*",
    "/signin",
    "/signup",
  ],
};
