import { z } from "zod";
import { relationFields, timestampFields, baseFields } from "../shared";

export const playlistTrackSchema = z.object({
  id: baseFields.id,
  playlistId: relationFields.playlistId,
  trackId: relationFields.trackId,
  ...timestampFields,
});

export type PlaylistTrack = z.infer<typeof playlistTrackSchema>;
