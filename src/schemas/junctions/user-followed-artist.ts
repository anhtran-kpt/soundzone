import { z } from "zod";
import { artistRole } from "../shared";
import { relationFields, timestampFields, baseFields } from "../shared";

export const userFollowedArtistSchema = z.object({
  id: baseFields.id,
  userId: relationFields.userId,
  artistId: relationFields.artistId,
  role: artistRole,
  ...timestampFields,
});

export type UserFollowedArtist = z.infer<typeof userFollowedArtistSchema>;
