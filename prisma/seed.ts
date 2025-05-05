import { authService } from "@/services/server/auth-service";
import { PrismaClient } from "../src/app/generated/prisma";
import { generateRefreshToken } from "@/lib/auth/helpers";

const prisma = new PrismaClient();

async function createAdminUser() {
  const adminData = {
    firstName: "SoundZone",
    lastName: "Admin",
    email: "admin@soundzone.com",
    role: "ADMIN",
    password: "admin123",
  };

  const admin = await authService.signUp(adminData);

  const deviceType = "desktop";

  const { token: refreshToken, jti } = generateRefreshToken(admin);

  await authService.createRefreshToken({
    userId: admin.id,
    jti,
    token: refreshToken,
    deviceType,
  });

  console.log("Admin created.");
}

export async function main() {
  try {
    await createAdminUser();
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
