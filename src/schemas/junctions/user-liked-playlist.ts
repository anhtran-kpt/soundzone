import { z } from "zod";
import { relationFields, timestampFields, baseFields } from "../shared";

export const userLikedPlaylistSchema = z.object({
  id: baseFields.id,
  userId: relationFields.userId,
  playlistId: relationFields.playlistId,
  ...timestampFields,
});

export type UserLikedPlaylist = z.infer<typeof userLikedPlaylistSchema>;
