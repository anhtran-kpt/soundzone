import db from "@/lib/db";
import { CreateGenreRequest } from "@/schemas";

const genreActions = {
  getAll: async () => {
    return await db.genre.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  getBySlug: async (slug: string) => {
    return await db.genre.findUnique({
      where: { slug },
    });
  },

  create: async (data: CreateGenreRequest) => {
    await db.$transaction(async (tx) => {
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

  delete: async (slug: string) => {
    await db.genre.delete({
      where: { slug },
    });
  },
};

export default genreActions;
