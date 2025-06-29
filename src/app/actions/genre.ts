"use server";

import db from "@/lib/prisma/db";

export const getGenresAction = async () => {
  return await db.genre.findMany({
    orderBy: {
      tracks: {
        _count: "desc",
      },
    },
    include: {
      tracks: true,
      _count: {
        select: {
          tracks: true,
        },
      },
    },
  });
};

export const getGenreBySlugAction = async (genreSlug: string) => {
  return await db.genre.findUnique({
    where: {
      slug: genreSlug,
    },
    include: {
      tracks: true,
      _count: {
        select: {
          tracks: true,
        },
      },
    },
  });
};

export const createGenreAction = async (genreName: string) => {
  return await db.$transaction(async (tx) => {
    const slug = await tx.genre.generateSlug(genreName);
    return await tx.genre.create({ data: { name: genreName, slug } });
  });
};
