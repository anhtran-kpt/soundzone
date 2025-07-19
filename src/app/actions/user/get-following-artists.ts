"use server";

import db from "@/lib/prisma/db";
import { isEntityExists } from "../../../entities/shared/is-entity-exists";
import { withErrorHandler } from "../shared/with-error-handler";

export const getFollowingArtists = withErrorHandler(
  async (userSlug: string) => {
    const user = await isEntityExists("user", "slug", userSlug);

    const artists = await db.artist.findMany({
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

    return artists;
  }
);
