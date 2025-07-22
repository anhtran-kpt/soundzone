"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getActions = withErrorHandler(async (albumSlug: string) => {
  const { id } = await isEntityExists("album", "slug", albumSlug);

  const album = await db.album.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      slug: true,
      title: true,
    },
  });

  return album;
});
