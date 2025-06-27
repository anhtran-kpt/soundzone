"use server";

import db from "@/lib/prisma/db";
import { Genre } from "../generated/prisma";

export const getGenresAction = async () => {
  return await db.genre.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getGenreBySlugAction = async (genreSlug: string) => {
  return await db.genre.findUnique({
    where: {
      slug: genreSlug,
    },
  });
};

export const createGenreAction = async (genreName: string): Promise<Genre> => {
  return await db.$transaction(async (tx) => {
    const slug = await tx.genre.generateSlug(genreName);
    return await tx.genre.create({ data: { name: genreName, slug } });
  });
};
