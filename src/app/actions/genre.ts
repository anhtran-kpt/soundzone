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

export const getGenreAction = async (genreId: string) => {
  return await db.genre.findUnique({
    where: {
      id: genreId,
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
