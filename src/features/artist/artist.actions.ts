"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";

export const ArtistActions = {
  getList: async (params: PaginationParams) => {
    const { page, limit } = params;

    const data = await db.artist.findMany({
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

  getBySlug: async (artistSlug: string) => {
    const artistDetail = await db.artist.findUnique({
      where: {
        id: artistSlug,
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

    if (!artistDetail) {
      throw new Error(`Artist ${artistSlug} not found`);
    }

    return {
      ...artistDetail,
      artists: flattenRelation(artistDetail.artists, "artist"),
    };
  },
};
