"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { PaginationParams } from "@/entities/shared/shared-types";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";

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
          select: { slug: true, coverPublicId: true },
        },
        artists: {
          select: {
            artist: {
              select: { slug: true, name: true },
            },
          },
        },
        _count: {
          select: {
            playHistory: true,
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
