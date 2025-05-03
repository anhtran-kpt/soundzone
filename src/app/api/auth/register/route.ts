import { PrismaClient } from "@/app/generated/prisma";
import { generateTokens, hashValue } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName, password } = await request.json();

    if (!email || !firstName || !lastName || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }

    const hashedPassword = await hashValue(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hashedPassword,
      },
    });

    const { accessToken, refreshToken } = generateTokens(newUser);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      { message: "User registered successfully", user: userWithoutPassword },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Error registering user" },
      { status: 500 }
    );
  }
}
