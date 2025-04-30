/* eslint-disable @typescript-eslint/no-unused-vars */
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@/app/generated/prisma";
import { SALT_ROUNDS } from "./constants";

const prisma = new PrismaClient();

export function generateRandomString(length: number = 32): string {
  return crypto.randomBytes(length).toString("hex");
}

export async function hashValue(value: string): Promise<string> {
  return bcrypt.hash(value, SALT_ROUNDS);
}

export async function verifyHash(
  plainValue: string,
  hashedValue: string
): Promise<boolean> {
  return bcrypt.compare(plainValue, hashedValue);
}

export async function createRefreshToken(
  userId: string,
  userAgent: string,
  expiresInDays: number = 7
): Promise<string> {
  try {
    // Generate a unique token ID for lookup
    const tokenId = crypto.randomUUID();

    // Generate a secure random string as the token secret
    const tokenSecret = generateRandomString(32);

    // Calculate expiration date
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + expiresInDays);

    // Hash the token secret for storage
    const hashedToken = await hashValue(tokenSecret);

    // Store the refresh token in the database
    await prisma.refreshToken.create({
      data: {
        tokenId,
        hashedToken,
        expiresAt,
        userId,
        userAgent,
      },
    });

    // Return the full token (ID + secret) that will be sent to the client
    return `${tokenId}.${tokenSecret}`;
  } catch (error) {
    console.error("Error creating refresh token:", error);
    throw new Error("Failed to create refresh token");
  }
}

export async function validateRefreshToken(
  fullToken: string
): Promise<string | null> {
  try {
    // Parse the token into its components
    const [tokenId, tokenSecret] = fullToken.split(".");

    // Validate token format
    if (!tokenId || !tokenSecret) {
      console.log("Invalid token format");
      return null;
    }

    // Find the token in database by its ID
    const storedToken = await prisma.refreshToken.findUnique({
      where: { tokenId },
    });

    // Check if token exists and hasn't expired
    if (!storedToken) {
      console.log("Token not found");
      return null;
    }

    if (storedToken.expiresAt < new Date()) {
      console.log("Token expired");
      // Clean up expired token
      await prisma.refreshToken.delete({
        where: { id: storedToken.id },
      });
      return null;
    }

    // Verify the token secret against stored hash
    const isValid = await verifyHash(tokenSecret, storedToken.hashedToken);
    if (!isValid) {
      console.log("Token validation failed");
      return null;
    }

    // Return the associated user ID
    return storedToken.userId;
  } catch (error) {
    console.error("Error validating refresh token:", error);
    return null;
  }
}

export async function rotateRefreshToken(
  fullToken: string,
  userAgent: string
): Promise<string | null> {
  try {
    // Parse the token
    const [tokenId, _] = fullToken.split(".");

    if (!tokenId) {
      return null;
    }

    // Get the token record
    const storedToken = await prisma.refreshToken.findUnique({
      where: { tokenId },
    });

    if (!storedToken) {
      return null;
    }

    // Validate the token (without deleting it yet)
    const userId = await validateRefreshToken(fullToken);
    if (!userId) {
      return null;
    }

    // Delete the old token first
    await prisma.refreshToken.delete({
      where: { id: storedToken.id },
    });

    return createRefreshToken(userId, userAgent);
  } catch (error) {
    console.error("Error rotating refresh token:", error);
    return null;
  }
}

export async function revokeRefreshToken(fullToken: string): Promise<boolean> {
  try {
    const [tokenId, _] = fullToken.split(".");

    if (!tokenId) {
      return false;
    }

    // Delete the token
    await prisma.refreshToken
      .delete({
        where: { tokenId },
      })
      .catch(() => false); // Ignore errors if token doesn't exist

    return true;
  } catch (error) {
    console.error("Error revoking token:", error);
    return false;
  }
}

export async function revokeAllUserTokens(userId: string): Promise<number> {
  try {
    const result = await prisma.refreshToken.deleteMany({
      where: { userId },
    });

    return result.count;
  } catch (error) {
    console.error("Error revoking user tokens:", error);
    throw new Error("Failed to revoke tokens");
  }
}

export async function getUserSessions(userId: string): Promise<
  Array<{
    id: string;
    createdAt: Date;
    expiresAt: Date;
    userAgent: string;
  }>
> {
  try {
    const tokens = await prisma.refreshToken.findMany({
      where: {
        userId,
        expiresAt: { gt: new Date() }, // Only get non-expired tokens
      },
      select: {
        id: true,
        createdAt: true,
        expiresAt: true,
        userAgent: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return tokens;
  } catch (error) {
    console.error("Error getting user sessions:", error);
    return [];
  }
}

export async function cleanupExpiredTokens(): Promise<number> {
  try {
    const result = await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: { lt: new Date() },
      },
    });

    return result.count;
  } catch (error) {
    console.error("Error cleaning up expired tokens:", error);
    throw new Error("Failed to clean up tokens");
  }
}
