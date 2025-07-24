"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";

export const getTracks = withErrorHandler(async (albumSlug: string) => {
  const { id } = await isEntityExists("album", "slug", albumSlug);

  const album = await db.album.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      coverPublicId: true,
      tracks: {
        select: {
          title: true,
          duration: true,
          audioPublicId: true,
          trackNumber: true,
          artists: {
            select: {
              artist: {
                select: {
                  name: true,
                  slug: true,
                },
              },
            },
          },
          id: true,
          slug: true,
          isExplicit: true,
          _count: {
            select: { playHistory: true },
          },
        },
      },
    },
  });

  return album.tracks.map((track) => ({
    ...track,
    coverPublicId: album.coverPublicId,
    artists: flattenRelation(track.artists, "artist"),
    plays: track._count.playHistory,
  }));
});
