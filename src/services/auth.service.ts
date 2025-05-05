import { User, PrismaClient } from "@/app/generated/prisma";
import { AppError } from "@/lib/api/error-handler";
import { comparePasswords, hashPassword } from "@/lib/auth/helpers";
import { signInInput, signUpInput } from "@/types/auth.type";

const prisma = new PrismaClient();

export class AuthService {
  async signUp(data: signUpInput): Promise<User> {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new AppError("Email already exists", 400, "EMAIL_EXISTS");
    }

    const hashedPassword = await hashPassword(data.password);

    const newUser = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return newUser;
  }

  async signIn(data: signInInput): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new AppError("User does not exist", 404, "USER_NOT_FOUND");
    }

    if (!(await comparePasswords(data.password, user.password))) {
      throw new AppError("Incorrect password", 400, "INVALID_CREDENTIALS");
    }

    return user;
  }
}

export const authService = new AuthService();
