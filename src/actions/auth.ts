import prisma from "@/lib/prisma/prisma";
import { ApiError } from "@/lib/api-config/server/api-error";
import { SignInDto, SignUpDto } from "@/schemas";
import { comparePasswords, hashPassword } from "@/utils";

export const signUp = async (data: SignUpDto) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw ApiError.badRequest("User already exists", "USER_ALREADY_EXISTS");
  }

  const hashedPassword = await hashPassword(data.password);

  return prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
      slug: await prisma.user.generateSlug(data.name),
    },
  });
};

export const signIn = async (data: SignInDto) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

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

  return prisma.user.findUnique({
    where: { email: data.email },
  });
};
