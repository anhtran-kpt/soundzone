"use server";

import { ApiError } from "@/lib/api/server/api-error";
import {
  SignInInput,
  signInSchema,
  SignUpRequest,
  userSchema,
} from "@/lib/validations";
import db from "@/lib/prisma/db";
import { comparePasswords, hashPassword } from "@/lib/auth";

export async function signUpAction(input: SignUpRequest) {
  const { ...data } = userSchema.parse(input);

  if (
    await db.user.findUnique({
      where: { email: data.email },
    })
  ) {
    throw ApiError.badRequest("User already exists", "USER_ALREADY_EXISTS");
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
      throw ApiError.badRequest(
        "Incorrect email or password",
        "INVALID_CREDENTIALS"
      );
    }

    const isPasswordValid = await comparePasswords(
      data.password,
      user.password
    );

    if (!isPasswordValid) {
      throw ApiError.badRequest(
        "Incorrect email or password",
        "INVALID_CREDENTIALS"
      );
    }

    return user;
  } catch (error) {
    throw error;
  }
}
