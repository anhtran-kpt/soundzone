"use server";

import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";

export const getArtists = async (params: PaginationParams) => {
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
};

export const getArtistInfo = async (artistSlug: string) => {
  return await db.artist.findUnique({
    where: {
      slug: artistSlug,
    },
  });
};
