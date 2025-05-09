import prisma from "@/lib/prisma";
import { SignInDto, SignUpDto } from "@/features/auth/schemas";
import { comparePasswords, hashPassword } from "../utils";
import { ApiError } from "@/lib/server/api-error";

export const authService = {
  // Sign up a new user
  async signUp(data: SignUpDto) {
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
      },
    });
  },

  // Sign in a user
  async signIn(data: SignInDto) {
    const user = await prisma.user.findUnique({
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

    return prisma.user.findUnique({
      where: { email: data.email },
    });
  },
};
