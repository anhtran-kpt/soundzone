import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Public paths without logging in
  const publicPaths = ["/signin", "/signup", "/"];
  const isPublicPath = publicPaths.some(
    (path) =>
      pathname === path ||
      pathname.startsWith("/api/auth") ||
      pathname.startsWith("/_next")
  );

  // Paths for admin
  const adminPaths = ["/admin"];
  const isAdminPath = adminPaths.some((path) => pathname.startsWith(path));

  // Navigate for users haven't logged in yet
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Navigate for users are not admin
  if (token && isAdminPath && token.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
