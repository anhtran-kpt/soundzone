"use server";

import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";
import { trackInfoSelect } from "./track-presets";
import { flattenRelation } from "@/lib/helpers";

export const getList = async (params: PaginationParams) => {
  const { page, limit } = params;

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
};

export const getTrackInfo = async (trackSlug: string) => {
  const trackInfo = await db.track.findUniqueOrThrow({
    where: {
      slug: trackSlug,
    },
    select: trackInfoSelect,
  });

  return {
    ...trackInfo,
    artists: flattenRelation(trackInfo.artists, "artist"),
  };
};
