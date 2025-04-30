import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import { revokeRefreshToken, revokeAllUserTokens } from "@/lib/token";

export async function POST(request: NextRequest) {
  try {
    // Get the current session token
    const token = await getToken({ req: request });

    if (!token || !token.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Extract refresh token and logoutAll flag from request body
    const body = await request.json();
    const { refreshToken, logoutAll = false } = body;

    if (logoutAll) {
      // Revoke all tokens for this user (logout from all devices)
      const count = await revokeAllUserTokens(token.id as string);
      console.log(`Revoked ${count} tokens for user ${token.id}`);
    } else if (refreshToken) {
      // Revoke just the specific token
      await revokeRefreshToken(refreshToken);
    } else {
      // No token specified, but we'll still clear cookies
      console.log("No refresh token provided for revocation");
    }

    // Clear all auth-related cookies
    const cookieStore = await cookies();
    cookieStore.delete("next-auth.session-token");
    cookieStore.delete("next-auth.callback-url");
    cookieStore.delete("next-auth.csrf-token");

    return NextResponse.json({
      message: logoutAll
        ? "Logged out from all devices"
        : "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Error during logout" }, { status: 500 });
  }
}
