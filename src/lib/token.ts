import crypto from "crypto";
import bcrypt from "bcryptjs";

export function generateToken(length: number = 64): string {
  const buffer = crypto.randomBytes(length);

  return buffer.toString("hex");
}

export async function hashToken(token: string): Promise<string> {
  return bcrypt.hash(token, 12);
}

export async function verifyToken(
  plainToken: string,
  hashedToken: string
): Promise<boolean> {
  return bcrypt.compare(plainToken, hashedToken);
}

export async function generateRefreshToken(): Promise<{
  refreshToken: string;
  hashedRefreshToken: string;
}> {
  const refreshToken = generateToken(64);

  const hashedRefreshToken = await hashToken(refreshToken);

  return {
    refreshToken,
    hashedRefreshToken,
  };
}
