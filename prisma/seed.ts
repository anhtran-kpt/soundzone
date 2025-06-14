import prisma from "@/lib/prisma/prisma";
import { UserRole } from "@/app/generated/prisma/client";

async function createAdminUser() {
  const adminData = {
    name: "SoundZone Admin",
    email: "admin@soundzone.com",
    role: "ADMIN",
    password: "admin123",
  };

  await prisma.user.upsert({
    where: {
      email: adminData.email,
    },
    update: {},
    create: {
      name: adminData.name,
      email: adminData.email,
      role: adminData.role as UserRole,
      password: adminData.password,
      slug: "soundzone-admin",
    },
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
