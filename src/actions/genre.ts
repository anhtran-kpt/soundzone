import prisma from "@/lib/prisma/prisma";
import { CreateGenreDto } from "@/schemas";

export const getAllGenres = async () => {
  return await prisma.genre.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getGenreBySlug = async (slug: string) => {
  return await prisma.genre.findUnique({
    where: { slug },
  });
};

export const createGenre = async (data: CreateGenreDto) => {
  await prisma.$transaction(async (tx) => {
    const slug = await tx.genre.generateSlug(data.name);

    await tx.genre.create({
      data: {
        ...data,
        slug,
      },
    });

    return null;
  });
};
