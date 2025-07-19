"use server";

import { withErrorHandler } from "@/entities/shared/with-error-handler";
import { requireAuth } from "@/lib/next-auth";
import db from "@/lib/prisma/db";

export const isFollowing = withErrorHandler(async (artistSlug: string) => {
  const session = await requireAuth();

  const artist = await db.artist.findUniqueOrThrow({
    where: {
      slug: artistSlug,
    },
    select: { id: true },
  });

  const followed = await db.userFollowedArtist.findFirst({
    where: {
      userId: session.user.id,
      artistId: artist.id,
    },
    select: { id: true },
  });

  return !!followed;
});
