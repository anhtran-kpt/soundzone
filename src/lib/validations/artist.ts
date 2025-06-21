import { baseFields } from "./shared";
import { z } from "zod";

export const artistSchema = z.object({
  name: baseFields.name,
  description: baseFields.description,
  nationality: z.string().optional(),
  imagePublicId: baseFields.publicId,
  bannerPublicId: baseFields.publicId,
});

export const createArtistSchema = artistSchema;
export const updateArtistSchema = createArtistSchema.partial();

export type CreateArtistInput = z.infer<typeof createArtistSchema>;
export type UpdateArtistInput = z.infer<typeof updateArtistSchema>;
