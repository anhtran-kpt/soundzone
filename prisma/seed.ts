import { PrismaClient, Prisma } from "../src/app/generated/prisma";
import { generateTokens, hashValue } from "@/lib/auth";

const prisma = new PrismaClient();

async function createAdminUser() {
  const hashedPassword = await hashValue("admin123");

  const adminData: Prisma.UserCreateInput = {
    firstName: "SoundZone",
    lastName: "Admin",
    email: "admin@soundzone.com",
    role: "ADMIN",
    password: hashedPassword,
  };

  const newAdmin = await prisma.user.create({ data: adminData });

  const { accessToken, refreshToken } = generateTokens(newAdmin);

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
