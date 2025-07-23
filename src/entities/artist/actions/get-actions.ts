"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getActions = withErrorHandler(async (artistSlug: string) => {
  const { id } = await isEntityExists("artist", "slug", artistSlug);

  return await db.artist.findUniqueOrThrow({
    where: {
      id,
    },
  });
});
