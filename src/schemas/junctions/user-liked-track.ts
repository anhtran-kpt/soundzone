import { z } from "zod";
import { relationFields, timestampFields, baseFields } from "../shared";

export const userLikedTrackSchema = z.object({
  id: baseFields.id,
  userId: relationFields.userId,
  trackId: relationFields.trackId,
  ...timestampFields,
});

export type UserLikedTrack = z.infer<typeof userLikedTrackSchema>;
