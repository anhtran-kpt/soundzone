"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getArtistBanner = withErrorHandler(async (artistSlug: string) => {
  const artist = await isEntityExists("artist", "slug", artistSlug);

  return await db.artist.findUnique({
    where: {
      id: artist.id,
    },
    select: {
      name: true,
      bannerPublicId: true,
    },
  });
});
