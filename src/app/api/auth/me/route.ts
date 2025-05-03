import { PrismaClient } from "@/app/generated/prisma";
import { verifyAccessToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export default async function POST(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");

  if (!accessToken) {
    return NextResponse.json(
      {
        error: "Unthorized",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const decoded = verifyAccessToken(accessToken.value);

    const user = await prisma.user.findUnique({
      where: { id: decoded.sub },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json(
      {
        error: "Invalid token",
      },
      { status: 401 }
    );
  }
}
