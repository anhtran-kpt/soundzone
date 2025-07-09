"use server";

import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";

export const getArtistPopularTracks = async (
  artistSlug: string,
  params: PaginationParams
) => {
  const { page, limit } = params;

  const [tracks, total] = await db.$transaction([
    db.track.findMany({
      where: {
        artists: {
          some: {
            role: "MAIN_ARTIST",
            artist: {
              slug: artistSlug,
            },
          },
        },
      },
      orderBy: {
        playHistory: {
          _count: "desc",
        },
      },
      include: {
        _count: {
          select: {
            playHistory: true,
          },
        },
        album: {
          select: {
            title: true,
            id: true,
          },
        },
        artists: {
          include: {
            artist: {
              select: { name: true, slug: true },
            },
          },
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    }),

    db.track.count({
      where: {
        artists: {
          some: {
            role: "MAIN_ARTIST",
            artist: {
              slug: artistSlug,
            },
          },
        },
      },
    }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    data: tracks,
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
