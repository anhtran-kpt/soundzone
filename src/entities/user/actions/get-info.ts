"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getInfo = withErrorHandler(async (userSlug: string) => {
  const user = await isEntityExists("user", "slug", userSlug);

  return await db.user.findUnique({
    where: {
      id: user.id,
    },
  });
});
