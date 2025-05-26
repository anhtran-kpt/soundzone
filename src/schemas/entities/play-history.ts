import { z } from "zod";
import { baseFields, relationFields } from "../shared";
import { trackBaseSchema } from "./track";
import { userBaseSchema } from "./user";

export const playHistorySchema = z.object({
  id: baseFields.id,
  trackId: relationFields.trackId,
  playedAt: z.coerce.date(),
  playDuration: z.number(),
  completedPlay: z.boolean(),
  sourceType: z.string().optional(),
  sourceId: z.string().optional(),
  deviceType: z.string().optional(),
  userId: relationFields.userId,
});

export const playHistoryWithRelationsSchema = playHistorySchema.extend({
  track: z.lazy(() => trackBaseSchema),
  user: z.lazy(() => userBaseSchema),
});

export type PlayHistory = z.infer<typeof playHistorySchema>;
export type PlayHistoryWithRelations = z.infer<
  typeof playHistoryWithRelationsSchema
>;
