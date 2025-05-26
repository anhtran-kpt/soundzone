import { z } from "zod";
import {
  artistRole,
  relationFields,
  baseFields,
  timestampFields,
} from "../shared";

export const userLikedAlbumSchema = z.object({
  id: baseFields.id,
  userId: relationFields.userId,
  albumId: relationFields.albumId,
  role: artistRole,
  ...timestampFields,
});

export type UserLikedAlbum = z.infer<typeof userLikedAlbumSchema>;
