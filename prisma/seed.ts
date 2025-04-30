import { SALT_ROUNDS } from "@/lib/constants";
import { PrismaClient, Prisma } from "../src/app/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function createAdminUser() {
  const hashedPassword = await bcrypt.hash("admin123", SALT_ROUNDS);

  const adminData: Prisma.UserCreateInput = {
    firstName: "SoundZone",
    lastName: "Admin",
    email: "admin@soundzone.com",
    role: "ADMIN",
    password: hashedPassword,
  };

  await prisma.user.create({ data: adminData });

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
