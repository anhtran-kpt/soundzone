"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getDiscography = withErrorHandler(
  async ({
    albumSlug,
    artistSlug,
  }: {
    albumSlug: string;
    artistSlug: string;
  }) => {
    const limit = 5;
    const page = 1;

    const artist = await isEntityExists("artist", "slug", artistSlug);

    const [artistInfo, albums, total] = await Promise.all([
      db.artist.findUniqueOrThrow({
        where: {
          id: artist.id,
        },
        select: {
          name: true,
        },
      }),

      db.album.findMany({
        where: {
          artistId: artist.id,
          slug: {
            not: albumSlug,
          },
        },
        select: {
          title: true,
          slug: true,
          releaseDate: true,
          coverPublicId: true,
        },
        skip: (page - 1) * limit,
        take: limit,
      }),

      db.album.count({
        where: {
          artistId: artist.id,
          slug: {
            not: albumSlug,
          },
        },
      }),
    ]);

    return {
      artistName: artistInfo.name,
      albums,
      hasNext: page * limit < total,
    };
  }
);
