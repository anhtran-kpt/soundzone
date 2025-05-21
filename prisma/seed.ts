import { authService } from "@/services/server";
import prisma from "./basePrisma";

async function createAdminUser() {
  const adminData = {
    name: "SoundZone Admin",
    email: "admin@soundzone.com",
    role: "ADMIN",
    password: "admin123",
  };

  await authService.signUp(adminData);

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
