"use server";

import { PaginationParams } from "@/features/shared";
import db from "@/lib/prisma/db";

export const getDiscography = async (
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

    const [popularReleases, albumReleases, singleAndEpReleases] =
      await db.$transaction([
        db.album.findMany({
          where: {
            artistId: artist.id,
          },
          orderBy: {
            likedByUsers: {
              _count: "desc",
            },
          },
          take: limit,
          skip,
        }),

        db.album.findMany({
          where: {
            artistId: artist.id,
            releaseType: "ALBUM",
          },
          orderBy: {
            likedByUsers: {
              _count: "desc",
            },
          },
          take: limit,
          skip,
        }),

        db.album.findMany({
          where: {
            artistId: artist.id,
            releaseType: {
              in: ["SINGLE", "EP"],
            },
          },
          orderBy: {
            likedByUsers: {
              _count: "desc",
            },
          },
          take: limit,
          skip,
        }),
      ]);

    return {
      popularReleases,
      albumReleases,
      singleAndEpReleases,
    };
  } catch (error) {
    console.error("[GET DISCOGRAPHY]", error);

    return { error: "Something went wrong!" };
  }
};
