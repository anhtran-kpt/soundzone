/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import db from "@/lib/prisma/db";
import {
  signUpSchema,
  SignUpInput,
  signInSchema,
  SignInInput,
} from "@/schemas";
import { comparePasswords, hashPassword } from "@/lib/next-auth";

export const checkUserExistsAction = async (
  email: string
): Promise<boolean> => {
  return !!(await db.user.findUnique({
    where: {
      email,
    },
  }));
};

export const signUpAction = async (input: SignUpInput) => {
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
};

export const signInAction = async (input: SignInInput) => {
  const data = signInSchema.parse(input);

  const user = await db.user.findUnique({
    where: { email: data.email },
  });

  if (!user) throw new Error("Invalid credentials");

  if (!(await comparePasswords(data.password, user.password)))
    throw new Error("Invalid credentials");

  return user;
};

export const getUsersAction = async () => {
  return await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getUserBySlugAction = async (userSlug: string) => {
  return await db.user.findUnique({
    where: {
      slug: userSlug,
    },
  });
};
