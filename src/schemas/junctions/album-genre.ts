import { z } from "zod";
import { relationFields, timestampFields, baseFields } from "../shared";

export const albumGenreSchema = z.object({
  id: baseFields.id,
  albumId: relationFields.albumId,
  genreId: relationFields.genreId,
  ...timestampFields,
});

export type AlbumGenre = z.infer<typeof albumGenreSchema>;
