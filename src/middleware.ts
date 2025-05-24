import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ["/profile", "/favorites", "/playlists", "/settings"];

const adminRoutes = ["/admin", "/admin/users", "/admin/songs", "/admin/genres"];

const authRoutes = ["/sign-in", "/sign-up"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token && authRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    const callbackUrl = encodeURIComponent(pathname);
    return NextResponse.redirect(
      new URL(`/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  if (
    adminRoutes.some((route) => pathname.startsWith(route)) &&
    (!token || token.role !== "ADMIN")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/favorites/:path*",
    "/playlists/:path*",
    "/settings/:path*",
    "/admin/:path*",
    "/sign-in",
    "/sign-up",
    "/api/:path*",
  ],
};
