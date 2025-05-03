import { generateAccessToken, generateRefreshToken } from "@/lib/auth";
import { authService } from "@/services/auth.service";
import { signUpSchema } from "@/types/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse, userAgent } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const result = signUpSchema.safeParse(request.json());

    if (!result.success) {
      return NextResponse.json({ error: result.error.errors }, { status: 400 });
    }

    const user = await authService.signUp(result.data);

    const deviceType = userAgent(request).device.type || "desktop";

    const accessToken = generateAccessToken(user);
    const { token: refreshToken, jti } = generateRefreshToken(user);

    await authService.createRefreshToken({
      userId: user.id,
      jti,
      token: refreshToken,
      deviceType,
    });

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, { maxAge: 15 * 60 });
    cookieStore.set("refreshToken", refreshToken, { maxAge: 7 * 24 * 60 * 60 });
  } catch (error) {
    console.error("Error signing up:", error);
    return NextResponse.json(
      {
        message: "Error signing up",
      },
      { status: 500 }
    );
  }
}
