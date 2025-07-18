"use server";

import db from "@/lib/prisma/db";
import { isEntityExists } from "../shared/is-entity-exists";
import { withErrorHandler } from "../shared/with-error-handler";

export const getPlaylists = withErrorHandler(async (userSlug: string) => {
  const user = await isEntityExists("user", "slug", userSlug);

  const playlists = await db.playlist.findMany({
    where: {
      userId: user.id,
    },
    select: {
      title: true,
      coverPublicId: true,
      slug: true,
      id: true,
    },
  });

  return playlists;
});
