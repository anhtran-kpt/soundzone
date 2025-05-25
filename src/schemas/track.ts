import { trackSchema } from "./entities";
import { z } from "zod";

export const createTrackSchema = trackSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
});

export const updateTrackSchema = trackSchema.partial();
export type CreateTrackDto = z.infer<typeof createTrackSchema>;
export type UpdateTrackDto = z.infer<typeof updateTrackSchema>;
