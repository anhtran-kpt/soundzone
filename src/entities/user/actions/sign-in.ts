"use server";

import db from "@/lib/prisma/db";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import { comparePasswords } from "@/lib/next-auth";
import { SignInInput, signInSchema } from "@/entities/user/user-schemas";

export const signIn = withErrorHandler(async (input: SignInInput) => {
  const data = signInSchema.parse(input);

  const user = await db.user.findUnique({
    where: { email: data.email },
  });

  if (!user) throw new Error("Invalid credentials");

  if (!(await comparePasswords(data.password, user.password)))
    throw new Error("Invalid credentials");

  return user;
});
