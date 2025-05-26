import { z } from "zod";
import { relationFields, timestampFields, baseFields } from "../shared";

export const trackGenreSchema = z.object({
  id: baseFields.id,
  trackId: relationFields.trackId,
  genreId: relationFields.genreId,
  ...timestampFields,
});

export type TrackGenre = z.infer<typeof trackGenreSchema>;
