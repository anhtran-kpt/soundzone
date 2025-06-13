import { userActions } from "@/actions";
import prisma from "@/lib/prisma/prisma";
import data from "./data/genres.json";

async function createAdminUser() {
  const adminData = {
    name: "SoundZone Admin",
    email: "admin@soundzone.com",
    role: "ADMIN",
    password: "admin123",
  };

  await userActions.signUp(adminData);

  console.log("Admin created.");
}

async function createGenres() {
  await prisma.$transaction(async (tx) => {
    const genres = await tx.genre.findMany();
    if (genres.length > 0) {
      console.log("Genres already exist.");
      return;
    }

    await tx.genre.createMany({
      data: data.genres.map((genre) => ({
        name: genre.name,
        description: genre.description,
        slug: genre.name.toLowerCase().replace(/ /g, "-"),
      })),
    });
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
