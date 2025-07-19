"use server";

import db from "@/lib/prisma/db";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import { requireAuth } from "@/lib/next-auth";

export const createPlaylist = withErrorHandler(async () => {
  const { user } = await requireAuth();

  return await db.$transaction(async (tx) => {
    const count = await tx.playlist.count({
      where: {
        userId: user.id,
        type: "USER",
      },
    });

    const title = `My Playlist #${count + 1}`;

    const slug = await tx.playlist.generateSlug(title);

    return await tx.playlist.create({
      data: {
        title,
        slug,
        type: "USER",
        userId: user.id,
      },
      include: {
        user: true,
      },
    });
  });
});
