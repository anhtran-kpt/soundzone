"use server";

import db from "@/lib/prisma/db";
import {
  CreateGenreInput,
  createGenreSchema,
  UpdateGenreInput,
  updateGenreSchema,
} from "@/lib/validations";

export async function createGenre(formData: CreateGenreInput) {
  const { name } = createGenreSchema.parse(formData);

  if (await db.genre.findUnique({ where: { name } })) {
    throw new Error("Genre already exists");
  }

  try {
    await db.$transaction(async (tx) => {
      const slug = await tx.genre.generateSlug(name);

      const genre = await tx.genre.create({
        data: {
          name,
          slug,
        },
      });

      return genre;
    });
  } catch (error: any) {
    if (error.code === "P2002" && error.meta.target?.includes("name")) {
      throw new Error("Genre already exists");
    }
    throw error;
  }
}

export async function updateGenre(data: UpdateGenreInput) {
  const { name, id } = updateGenreSchema.parse(data);

  if (await db.genre.findUnique({ where: { name } })) {
    throw new Error("Genre already exists");
  }

  if (!name) {
    throw new Error("Name is required");
  }

  try {
    await db.$transaction(async (tx) => {
      const slug = await tx.genre.generateSlug(name);

      const genre = await tx.genre.update({
        where: { id },
        data: {
          name,
          slug,
        },
      });

      return genre;
    });
  } catch (error: any) {
    if (error.code === "P2002" && error.meta.target?.includes("name")) {
      throw new Error("Genre already exists");
    }
    throw error;
  }
}
