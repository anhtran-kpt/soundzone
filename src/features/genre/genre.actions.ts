"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";

export const GenreActions = {
  getList: async (params: PaginationParams) => {
    const { page, limit } = params;

    const data = await db.genre.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = data.length;
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };
  },

  getBySlug: async (genreId: string) => {
    const genreDetail = await db.genre.findUnique({
      where: {
        id: genreId,
      },
      include: {
        album: {
          include: {
            artist: true,
          },
        },
        artists: {
          select: {
            artist: true,
          },
        },
        playHistory: true,
      },
    });

    if (!genreDetail) {
      throw new Error(`Genre with id ${genreId} not found`);
    }

    return {
      ...genreDetail,
      artists: flattenRelation(genreDetail.artists, "artist"),
    };
  },

  createGenreActio: async (genreName: string) => {
    return await db.$transaction(async (tx) => {
      const slug = await tx.genre.generateSlug(genreName);
      return await tx.genre.create({ data: { name: genreName, slug } });
    });
  },
};
