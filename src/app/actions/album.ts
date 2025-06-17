"use server";

import { CreateAlbumInput, createAlbumInputSchema } from "@/lib/validations";
import { createAlbum } from "@/lib/services/album";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAlbumAction(input: CreateAlbumInput) {
  const { ...data } = createAlbumInputSchema.parse(input);

  try {
    return await createAlbum(data);
  } catch (error) {
    throw error;
  }

  revalidatePath("/admin/albums");
  redirect("/admin/albums");
}
