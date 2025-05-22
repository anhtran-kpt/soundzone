import prisma from "@/lib/prisma/prisma";
import { CreateGenreDto } from "@/schemas";

const genreActions = {
  getAll: async () => {
    return await prisma.genre.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  getBySlug: async (slug: string) => {
    return await prisma.genre.findUnique({
      where: { slug },
    });
  },

  create: async (data: CreateGenreDto) => {
    await prisma.$transaction(async (tx) => {
      const slug = await tx.genre.generateSlug(data.name);

      const genre = await tx.genre.create({
        data: {
          ...data,
          slug,
        },
      });

      return genre;
    });
  },
};

export default genreActions;
