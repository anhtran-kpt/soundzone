import { z } from "zod";
import { baseFields } from "@/entities/shared/shared-schemas";

export const artistSchema = z.object({
  name: baseFields.name,
  description: baseFields.description,
  imagePublicId: baseFields.publicId,
  bannerPublicId: baseFields.publicId,
});

export const createArtistSchema = artistSchema;
export type CreateArtistInput = z.infer<typeof createArtistSchema>;
