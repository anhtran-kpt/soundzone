"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";
import { parseParams } from "@/lib/utils";

export const TrackActions = {
  getList: async (params?: Partial<PaginationParams>) => {
    const { page, limit } = parseParams(params);

    const data = await db.track.findMany({
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

  getById: async (trackId: string) => {
    const trackDetail = await db.track.findUnique({
      where: {
        id: trackId,
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

    if (!trackDetail) {
      throw new Error(`Track with id ${trackId} not found`);
    }

    return {
      ...trackDetail,
      artists: flattenRelation(trackDetail.artists, "artist"),
    };
  },
};
