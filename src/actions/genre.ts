import db from "@/lib/db";
import { CreateGenreInput, UpdateGenreInput } from "@/lib/validations";

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

  create: async (data: CreateGenreInput) => {
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

  update: async (slug: string, data: UpdateGenreInput) => {
    await db.genre.update({
      where: { slug },
      data,
    });
  },

  delete: async (slug: string) => {
    await db.genre.delete({
      where: { slug },
    });
  },
};

export default genreActions;
