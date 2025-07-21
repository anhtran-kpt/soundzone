"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getBanner = withErrorHandler(async (albumSlug: string) => {
  const { id } = await isEntityExists("album", "slug", albumSlug);

  const album = await db.album.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      coverPublicId: true,
      title: true,
      releaseType: true,
      releaseDate: true,
      artist: {
        select: {
          imagePublicId: true,
          slug: true,
          name: true,
        },
      },
      tracks: {
        select: {
          duration: true,
        },
      },
    },
  });

  return {
    ...album,
    totalDuration: album.tracks.reduce((acc, track) => acc + track.duration, 0),
  };
});
