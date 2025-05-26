import { z } from "zod";
import {
  artistRole,
  baseFields,
  relationFields,
  timestampFields,
} from "../shared";

export const artistGenreSchema = z.object({
  id: baseFields.id,
  artistId: relationFields.artistId,
  genreId: relationFields.genreId,
  role: artistRole,
  ...timestampFields,
});

export type ArtistGenre = z.infer<typeof artistGenreSchema>;
