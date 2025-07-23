"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getOthers = withErrorHandler(async (artistSlug: string) => {
  const { id } = await isEntityExists("artist", "slug", artistSlug);

  return await db.artist.findMany({
    where: {
      id: {
        not: id,
      },
    },
    select: {
      name: true,
      slug: true,
      id: true,
      imagePublicId: true,
    },
    take: 5,
  });
});
