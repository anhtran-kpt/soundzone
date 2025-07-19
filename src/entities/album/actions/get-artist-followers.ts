"use server";

import db from "@/lib/prisma/db";
import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";

export const getArtistFollowers = withErrorHandler(
  async (artistSlug: string) => {
    const artist = await isEntityExists("artist", "slug", artistSlug);

    const followers = await db.artist.count({
      where: {
        id: artist.id,
      },
    });

    return followers;
  }
);
