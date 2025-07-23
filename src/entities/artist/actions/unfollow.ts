"use server";

import { requireAuth } from "@/lib/next-auth";
import db from "@/lib/prisma/db";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import { isEntityExists } from "@/entities/shared/is-entity-exists";

export const unfollow = withErrorHandler(async (artistSlug: string) => {
  const session = await requireAuth();
  const artist = await isEntityExists("artist", "slug", artistSlug);

  await db.userFollowedArtist.deleteMany({
    where: { userId: session.user.id, artistId: artist.id },
  });
});
