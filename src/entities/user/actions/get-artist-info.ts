"use server";

import db from "@/lib/prisma/db";
import { withErrorHandler } from "@/entities/shared/with-error-handler";

export const getArtistInfo = withErrorHandler(async (artistSlug: string) => {
  const artist = await db.artist.findUnique({
    where: { slug: artistSlug },
    include: {
      _count: {
        select: { followers: true },
      },
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!artist) {
    throw new Error("Artist not found!");
  }

  return {
    ...artist,
    followers: artist._count.followers,
  };
});
