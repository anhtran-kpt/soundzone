import { z } from "zod";
import { relationFields, timestampFields, baseFields } from "../shared";

export const playlistGenreSchema = z.object({
  id: baseFields.id,
  playlistId: relationFields.playlistId,
  genreId: relationFields.genreId,
  ...timestampFields,
});

export type PlaylistGenre = z.infer<typeof playlistGenreSchema>;
