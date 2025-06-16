"use server";

import {
  CreateGenreInput,
  createGenreSchema,
  UpdateGenreInput,
  updateGenreSchema,
} from "@/lib/validations";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createGenre, getGenreByName, updateGenre } from "@/lib/services/genre";

export async function createGenreAction(input: CreateGenreInput) {
  const { name } = createGenreSchema.parse(input);

  if (await getGenreByName(name)) {
    throw new Error("Genre already exists");
  }

  try {
    await createGenre(name);
  } catch (error: unknown) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002" &&
      (error.meta?.target as string[]).includes("name")
    ) {
      throw new Error("Genre already exists");
    }
    throw error;
  }

  revalidatePath("/admin/genres");
  redirect("/admin/genres");
}

export async function updateGenreAction(id: string, input: UpdateGenreInput) {
  const { name } = updateGenreSchema.parse(input);

  if (!id) {
    throw new Error("ID is required");
  }

  if (!name) {
    throw new Error("Name is required");
  }

  if (await getGenreByName(name)) {
    throw new Error("Genre already exists");
  }

  try {
    await updateGenre(id, name);
  } catch (error: unknown) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (
        error.code === "P2002" &&
        (error.meta?.target as string[]).includes("name")
      ) {
        throw new Error("Genre already exists");
      }
    }

    throw error;
  }

  revalidatePath("/admin/genres");
  redirect("/admin/genres");
}
