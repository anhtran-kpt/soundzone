"use server";

import {
  SignInInput,
  signInSchema,
  SignUpRequest,
  userSchema,
} from "@/lib/validations";
import db from "@/lib/prisma/db";
import { comparePasswords, hashPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function signUpAction(input: SignUpRequest) {
  const { ...data } = userSchema.parse(input);

  if (
    await db.user.findUnique({
      where: { email: data.email },
    })
  ) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  try {
    const hashedPassword = await hashPassword(data.password);
    const slug = await db.user.generateSlug(data.name);

    return db.user.create({
      data: {
        ...data,
        password: hashedPassword,
        slug,
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function signInAction(input: SignInInput) {
  const { ...data } = signInSchema.parse(input);

  try {
    const user = await db.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Incorrect email or password" },
        { status: 400 }
      );
    }

    const isPasswordValid = await comparePasswords(
      data.password,
      user.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Incorrect email or password" },
        { status: 400 }
      );
    }

    return user;
  } catch (error) {
    throw error;
  }
}
