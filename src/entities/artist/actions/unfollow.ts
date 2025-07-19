"use server";

import { requireAuth } from "@/lib/next-auth";
import db from "@/lib/prisma/db";
import { isEntityExists } from "../../../app/actions/shared/is-entity-exists";
import { withErrorHandler } from "../../../app/actions/shared/with-error-handler";

export const unfollowArtist = withErrorHandler(async (artistSlug: string) => {
  const session = await requireAuth();
  const artist = await isEntityExists("artist", "slug", artistSlug);

  await db.userFollowedArtist.deleteMany({
    where: { userId: session.user.id, artistId: artist.id },
  });
});
