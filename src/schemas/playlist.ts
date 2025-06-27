import { z } from "zod";
import { baseFields } from "./shared";

export const playlistSchema = z.object({
  title: baseFields.title,
  description: baseFields.description,
  isPublic: z.boolean(),
  coverPublicId: baseFields.publicId,
});

export type CreatePlaylistInput = z.infer<typeof playlistSchema>;
