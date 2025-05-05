import { User, PrismaClient } from "@/app/generated/prisma";
import { hashPassword } from "@/lib/auth/helpers";
import { ApiError } from "@/lib/server/api-error";
import { SignUpDto } from "@/types/auth-type";

const prisma = new PrismaClient();

export class AuthService {
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
  }

  async checkEmailExists(email: string): Promise<{ exists: boolean }> {
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    return { exists: !!existingEmail };
  }
}

export const authService = new AuthService();
