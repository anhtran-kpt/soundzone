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

    const [albums, total] = await Promise.all([
      db.album.findMany({
        where: {
          artistId: artist.id,
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
        },
      }),
    ]);

    return {
      data: albums,
      meta: {
        hasPrev: page > 1,
        hasNext: page * limit < total,
      },
    };
  }
);
