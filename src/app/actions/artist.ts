"use server";

import { createArtist, updateArtist } from "@/lib/services/artist";
import {
  CreateArtistInput,
  createArtistSchema,
  UpdateArtistInput,
  updateArtistSchema,
} from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createArtistAction(input: CreateArtistInput) {
  const { ...data } = createArtistSchema.parse(input);

  try {
    await createArtist(data);
  } catch (error: unknown) {
    throw error;
  }

  revalidatePath("/admin/artists");
  redirect("/admin/artists");
}

export async function updateArtistAction(id: string, input: UpdateArtistInput) {
  const { ...data } = updateArtistSchema.parse(input);

  try {
    await updateArtist(id, data);
  } catch (error: unknown) {
    throw error;
  }

  revalidatePath("/admin/artists");
  redirect("/admin/artists");
}
