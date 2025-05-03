import { User, PrismaClient } from "@/app/generated/prisma";
import {
  compareValues,
  generateAccessToken,
  generateRefreshToken,
  hashValue,
  verifyRefreshToken,
} from "@/lib/auth";
import {
  createRefreshTokenInput,
  refreshTokensInput,
  signInInput,
  signUpInput,
} from "@/types/auth";

const prisma = new PrismaClient();

export class AuthService {
  async signUp(data: signUpInput): Promise<User> {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await hashValue(data.password);

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

    if (!user || !(await compareValues(data.password, user.password))) {
      throw new Error("Invalid credentials");
    }

    return user;
  }

  async createRefreshToken(data: createRefreshTokenInput): Promise<void> {
    const hashedToken = await hashValue(data.token);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    await prisma.refreshToken.create({
      data: {
        ...data,
        token: hashedToken,
        expiresAt,
      },
    });
  }

  async refreshTokens(data: refreshTokensInput) {
    try {
      const decoded = verifyRefreshToken(data.oldRefreshToken);

      const savedToken = await prisma.refreshToken.findUnique({
        where: {
          jti: decoded.jti,
        },
        include: {
          user: true,
        },
      });

      if (
        !savedToken ||
        savedToken.revoked ||
        savedToken.expiresAt < new Date()
      ) {
        throw new Error("Invalid refresh token");
      }

      const isValid = await compareValues(
        data.oldRefreshToken,
        savedToken.token as string
      );

      if (!isValid) {
        throw new Error("Invalid refresh token");
      }

      const accessToken = generateAccessToken(savedToken.user);
      const { token: refreshToken, jti } = generateRefreshToken(
        savedToken.user
      );

      await this.createRefreshToken({
        userId: savedToken.user.id,
        jti: jti,
        token: refreshToken,
        deviceType: data.deviceType || savedToken.deviceType,
      });

      await prisma.refreshToken.update({
        where: {
          id: savedToken.id,
        },
        data: {
          revoked: true,
        },
      });

      return {
        accessToken,
        refreshToken,
        user: {
          id: savedToken.user.id,
          email: savedToken.user.email,
          firstName: savedToken.user.firstName,
          lastName: savedToken.user.lastName,
          role: savedToken.user.role,
        },
      };
    } catch (error) {
      console.error(error);
      if (data.oldRefreshToken) {
        try {
          const decoded = verifyRefreshToken(data.oldRefreshToken);
          if (decoded.jti) {
            await prisma.refreshToken.updateMany({
              where: {
                jti: decoded.jti,
              },
              data: {
                revoked: true,
              },
            });
          }
        } catch (e) {
          console.error(e);
        }
      }
      throw new Error("Failed to refresh tokens");
    }
  }

  async signOut(refreshToken: string): Promise<boolean> {
    try {
      const decoded = verifyRefreshToken(refreshToken);

      await prisma.refreshToken.updateMany({
        where: {
          jti: decoded.jti,
        },
        data: {
          revoked: true,
        },
      });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async signOutAll(userId: string): Promise<boolean> {
    try {
      await prisma.refreshToken.updateMany({
        where: { userId },
        data: {
          revoked: true,
        },
      });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export const authService = new AuthService();
