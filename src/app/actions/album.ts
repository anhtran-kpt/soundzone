import { CreateAlbumInput, createAlbumInputSchema } from "@/lib/validations";
import { createAlbum } from "@/lib/services/album";

export async function createAlbumAction(input: CreateAlbumInput) {
  const { ...data } = createAlbumInputSchema.parse(input);

  try {
    return await createAlbum(data);
  } catch (error) {
    throw error;
  }
}
