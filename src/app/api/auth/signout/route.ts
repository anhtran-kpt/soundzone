import { authService } from "@/services/auth.service";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get("refreshToken");

    if (refreshToken) {
      await authService.signOut(refreshToken.value);
    }

    const cookieStore = await cookies();

    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    return NextResponse.json(
      {
        message: "Signed out successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Sign out error:", error);
    return NextResponse.json(
      {
        error: "Error signing out",
      },
      {
        status: 500,
      }
    );
  }
}
