"use server";

import { requireAuth } from "@/lib/next-auth";
import db from "@/lib/prisma/db";
import { isEntityExists } from "../shared/is-entity-exists";
import { withErrorHandler } from "../shared/with-error-handler";

export const followArtist = withErrorHandler(async (artistSlug: string) => {
  const session = await requireAuth();
  const artist = await isEntityExists("artist", "slug", artistSlug);

  await db.userFollowedArtist.create({
    data: {
      userId: session.user.id,
      artistId: artist.id,
    },
  });
});
