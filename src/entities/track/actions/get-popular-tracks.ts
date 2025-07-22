"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getPopularTracks = withErrorHandler(
  async ({ artistSlug }: { artistSlug: string }) => {
    const artist = await isEntityExists("artist", "slug", artistSlug);

    return await db.track.findMany({
      where: {
        artists: {
          some: {
            artistId: artist.id,
          },
        },
      },
      include: {
        album: {
          select: {
            id: true,
            slug: true,
            title: true,
            coverPublicId: true,
          },
        },
      },
      omit: {
        lyrics: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
);
