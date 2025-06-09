import db from "@/lib/prisma/db";
import { fullGenreInclude } from "@/lib/prisma/presets";
import { FullGenre } from "@/lib/types";
import { CreateGenreInput, UpdateGenreInput } from "@/lib/validations";

const genreActions = {
  getAll: async (): Promise<FullGenre[]> => {
    return await db.genre.findMany({
      include: fullGenreInclude,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  getBySlug: async (slug: string): Promise<FullGenre | null> => {
    return await db.genre.findUnique({
      where: { slug },
      include: fullGenreInclude,
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
