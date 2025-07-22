"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getBanner = withErrorHandler(async (artistSlug: string) => {
  const { id } = await isEntityExists("artist", "slug", artistSlug);

  const artist = await db.artist.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      name: true,
      imagePublicId: true,
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  return {
    ...artist,
    followers: artist._count.followers,
  };
});
