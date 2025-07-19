"use server";

import db from "@/lib/prisma/db";
import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";

export const getFollowingArtists = withErrorHandler(
  async (userSlug: string) => {
    const user = await isEntityExists("user", "slug", userSlug);

    return await db.artist.findMany({
      where: {
        followers: {
          some: {
            userId: user.id,
          },
        },
      },
      select: {
        name: true,
        imagePublicId: true,
        slug: true,
        id: true,
      },
    });
  }
);
