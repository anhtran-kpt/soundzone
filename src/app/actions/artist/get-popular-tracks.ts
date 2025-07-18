"use server";

import { PaginationParams } from "@/features/shared";
import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { isEntityExists } from "../shared/is-entity-exists";
import { withErrorHandler } from "../shared/with-error-handler";

export const getPopularTracks = withErrorHandler(
  async (artistSlug: string, params: PaginationParams) => {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const artist = await isEntityExists("artist", "slug", artistSlug);

    const tracks = await db.track.findMany({
      where: {
        artists: {
          some: { artistId: artist.id },
        },
      },
      omit: {
        lyrics: true,
        createdAt: true,
        updatedAt: true,
      },
      include: {
        album: {
          select: { slug: true },
        },
        artists: {
          select: {
            artist: {
              select: { slug: true, name: true },
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
  }
);
