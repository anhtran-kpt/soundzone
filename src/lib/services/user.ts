import { SignInInput } from "../validations";

import { comparePasswords, hashPassword } from "../auth";
import db from "../prisma/db";
import { SignUpRequest } from "../validations";
import { ApiError } from "../api/server/api-error";

export async function getUserByEmail(email: string) {
  return await db.user.findUnique({
    where: { email },
  });
}

export async function signUp(data: SignUpRequest) {
  const hashedPassword = await hashPassword(data.password);
  const slug = await db.user.generateSlug(data.name);

  return db.user.create({
    data: {
      ...data,
      password: hashedPassword,
      slug,
    },
  });
}

export async function signIn(data: SignInInput) {
  const user = await getUserByEmail(data.email);

  if (!user) {
    throw ApiError.badRequest(
      "Incorrect email or password",
      "INVALID_CREDENTIALS"
    );
  }

  const isPasswordValid = await comparePasswords(data.password, user.password);

  if (!isPasswordValid) {
    throw ApiError.badRequest(
      "Incorrect email or password",
      "INVALID_CREDENTIALS"
    );
  }

  return user;
}
