"use server";

import db from "@/lib/prisma/db";
import { isEntityExists, withErrorHandler } from "../../../app/actions/shared";

export const getFollowers = withErrorHandler(async (artistSlug: string) => {
  const artist = await isEntityExists("artist", "slug", artistSlug);

  const followers = await db.artist.count({
    where: {
      id: artist.id,
    },
  });

  return followers;
});
