import db from "@/lib/prisma/db";
import { fullGenreInclude } from "../prisma/presets";
import { FullGenre } from "../types";

export async function getAllGenres(): Promise<FullGenre[]> {
  return await db.genre.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: fullGenreInclude,
  });
}

export async function getGenreBySlug(slug: string): Promise<FullGenre | null> {
  return await db.genre.findUnique({
    where: { slug },
    include: fullGenreInclude,
  });
}

export async function getGenreByName(name: string): Promise<FullGenre | null> {
  return await db.genre.findUnique({
    where: { name },
    include: fullGenreInclude,
  });
}

export async function createGenre(name: string): Promise<void> {
  await db.$transaction(async (tx) => {
    const slug = await tx.genre.generateSlug(name);
    await tx.genre.create({ data: { name, slug } });
  });
}

export async function updateGenre(id: string, name: string): Promise<void> {
  await db.$transaction(async (tx) => {
    const slug = await tx.genre.generateSlug(name);

    await tx.genre.update({
      where: { id },
      data: {
        name,
        slug,
      },
    });
  });
}
