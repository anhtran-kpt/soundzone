import { authService } from "@/services/auth.service";
import { cookies } from "next/headers";
import { NextRequest, NextResponse, userAgent } from "next/server";

const cookieStore = await cookies();

export default async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get("refreshToken");

    if (!refreshToken) {
      return NextResponse.json(
        {
          error: "Refresh token not found",
        },
        { status: 401 }
      );
    }

    const deviceType = userAgent(request).device.type || "desktop";

    const tokens = await authService.refreshTokens({
      oldRefreshToken: refreshToken.value,
      deviceType,
    });

    cookieStore.set("accessToken", tokens.accessToken, { maxAge: 15 * 60 });
    cookieStore.set("refreshToken", tokens.refreshToken, {
      maxAge: 7 * 24 * 60 * 60,
    });

    return NextResponse.json({
      message: "Tokens refreshed successfully",
    });
  } catch (error) {
    console.error("Token refresh error:", error);

    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    return NextResponse.json(
      {
        error: "Invalid refresh token",
      },
      { status: 401 }
    );
  }
}
