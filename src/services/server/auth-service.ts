import { User, PrismaClient } from "@/app/generated/prisma";
import { SignInDto, SignUpDto } from "@/dtos/auth-dto";
import { comparePasswords, hashPassword } from "@/lib/auth/helpers";
import { ApiError } from "@/lib/server/api-error";

const prisma = new PrismaClient();

export const authService = {
  async signIn(data: SignInDto): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw ApiError.badRequest(
        "Incorrect email or password",
        "INVALID_CREDENTIALS"
      );
    }

    const isValidPassword = await comparePasswords(
      data.password,
      user.password
    );

    if (!isValidPassword) {
      throw ApiError.badRequest(
        "Incorrect email or password",
        "INVALID_CREDENTIALS"
      );
    }

    return user;
  },

  async signUp(data: SignUpDto): Promise<User> {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw ApiError.badRequest("Email already exists", "EMAIL_EXISTS");
    }

    const hashedPassword = await hashPassword(data.password);

    const newUser = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return newUser;
  },

  async validateEmail(email: string): Promise<{ exists: boolean }> {
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    return { exists: !!existingUser };
  },
};
