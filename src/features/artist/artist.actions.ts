"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";
import { parseParams } from "@/lib/utils";

export const ArtistActions = {
  getList: async (params?: Partial<PaginationParams>) => {
    const { page, limit } = parseParams(params);

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

  getById: async (artistId: string) => {
    const artistDetail = await db.artist.findUnique({
      where: {
        id: artistId,
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
      throw new Error(`Artist with id ${artistId} not found`);
    }

    return {
      ...artistDetail,
      artists: flattenRelation(artistDetail.artists, "artist"),
    };
  },
};
