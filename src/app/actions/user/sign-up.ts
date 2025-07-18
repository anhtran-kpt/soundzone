"use server";

import db from "@/lib/prisma/db";
import { withErrorHandler } from "../shared/with-error-handler";
import { hashPassword } from "@/lib/next-auth";
import { SignUpInput, signUpSchema } from "@/schemas/user";

export const signUp = withErrorHandler(async (input: SignUpInput) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { confirmPassword, ...data } = signUpSchema.parse(input);

  const [hashedPassword, slug] = await Promise.all([
    hashPassword(data.password),
    db.user.generateSlug(data.name),
  ]);

  const newUser = db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      slug,
    },
  });

  return newUser;
});
