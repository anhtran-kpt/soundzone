import prisma from "@/lib/prisma/prisma";
import { UserRole } from "@/app/generated/prisma/client";
import { hashPassword } from "@/lib/auth";

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
      password: await hashPassword(adminData.password),
      slug: "soundzone-admin",
    },
  });

  console.log("Admin created.");
}

async function createGenres() {
  const genres = [
    { name: "Rock", slug: "rock" },
    { name: "Pop", slug: "pop" },
    { name: "Hip-Hop", slug: "hip-hop" },
    { name: "Jazz", slug: "jazz" },
    { name: "Classical", slug: "classical" },
    { name: "Electronic", slug: "electronic" },
    { name: "Country", slug: "country" },
    { name: "R&B", slug: "r&b" },
    { name: "Metal", slug: "metal" },
    { name: "Folk & Acoustic", slug: "folk-acoustic" },
    { name: "Reggae", slug: "reggae" },
    { name: "Soul", slug: "soul" },
    { name: "Funk & Disco", slug: "funk-disco" },
    { name: "Blues", slug: "blues" },
    { name: "K-Pop", slug: "k-pop" },
    { name: "Chill", slug: "chill" },
    { name: "Workout", slug: "workout" },
    { name: "Study", slug: "study" },
    { name: "Focus", slug: "focus" },
    { name: "Relax", slug: "relax" },
    { name: "Sleep", slug: "sleep" },
    { name: "Mood", slug: "mood" },
    { name: "Party", slug: "party" },
    { name: "Latin", slug: "latin" },
    { name: "Indie", slug: "indie" },
  ];

  await prisma.genre.createMany({
    data: genres,
  });

  console.log("Genres created.");
}

export async function main() {
  try {
    await createAdminUser();
    await createGenres();
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
