"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const update = withErrorHandler(
  async (
    input: { title?: string; description?: string },
    playlistSlug: string
  ) => {
    const { id } = await isEntityExists("playlist", "slug", playlistSlug);

    const dataToUpdate: Record<string, string> = {};

    if (input.title !== undefined) {
      dataToUpdate.title = input.title;
    }

    if (input.description !== undefined) {
      dataToUpdate.description = input.description;
    }

    if (Object.keys(dataToUpdate).length === 0) {
      throw new Error("No fields provided for update");
    }

    await db.playlist.update({
      where: { id },
      data: dataToUpdate,
    });
  }
);
