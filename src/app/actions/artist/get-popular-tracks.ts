"use server";

import { PaginationParams } from "@/features/shared";
import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";

export const getPopularTracks = async (
  artistSlug: string,
  params: PaginationParams
) => {
  try {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const artist = await db.artist.findUnique({
      where: {
        slug: artistSlug,
      },
    });

    if (!artist) {
      return { error: "Artist not found!" };
    }

    const tracks = await db.track.findMany({
      where: {
        artists: {
          some: {
            artistId: artist.id,
          },
        },
      },
      omit: {
        lyrics: true,
        createdAt: true,
        updatedAt: true,
      },
      include: {
        album: {
          select: {
            slug: true,
          },
        },
        artists: {
          select: {
            artist: {
              select: {
                slug: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        playHistory: {
          _count: "desc",
        },
      },
      take: limit,
      skip,
    });

    return tracks.map((track) => ({
      ...track,
      artists: flattenRelation(track.artists, "artist"),
    }));
  } catch (error) {
    console.error("[GET POPULAR TRACKS]", error);

    return { error: "Something went wrong!" };
  }
};
