"use server";

import { PaginationParams } from "@/features/shared";
import db from "@/lib/prisma/db";
import { isEntityExists } from "../../../app/actions/shared/is-entity-exists";
import { withErrorHandler } from "../../../app/actions/shared/with-error-handler";

export const getDiscography = withErrorHandler(
  async (artistSlug: string, params: PaginationParams) => {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const artist = await isEntityExists("artist", "slug", artistSlug);

    const [popularReleases, albumReleases, singleAndEpReleases] =
      await db.$transaction([
        db.album.findMany({
          where: { artistId: artist.id },
          orderBy: {
            likedByUsers: { _count: "desc" },
          },
          take: limit,
          skip,
        }),

        db.album.findMany({
          where: {
            artistId: artist.id,
            releaseType: "ALBUM",
          },
          orderBy: {
            likedByUsers: { _count: "desc" },
          },
          take: limit,
          skip,
        }),

        db.album.findMany({
          where: {
            artistId: artist.id,
            releaseType: { in: ["SINGLE", "EP"] },
          },
          orderBy: {
            likedByUsers: { _count: "desc" },
          },
          take: limit,
          skip,
        }),
      ]);

    return {
      popularReleases,
      albumReleases,
      singleAndEpReleases,
    };
  }
);
