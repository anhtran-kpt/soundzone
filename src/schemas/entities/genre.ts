import { z } from "zod";
import { baseFields, timestampFields } from "../shared";
import {
  albumGenreSchema,
  artistGenreSchema,
  playlistGenreSchema,
  trackGenreSchema,
} from "../junctions";

export const genreBaseSchema = z.object({
  id: baseFields.id,
  name: baseFields.name,
  slug: baseFields.slug,
  description: baseFields.description,
  ...timestampFields,
});

export const genreWithRelationsSchema = genreBaseSchema.extend({
  albums: z.array(z.lazy(() => albumGenreSchema)),
  artists: z.array(z.lazy(() => artistGenreSchema)),
  tracks: z.array(z.lazy(() => trackGenreSchema)),
  playlists: z.array(z.lazy(() => playlistGenreSchema)),
});

export type Genre = z.infer<typeof genreBaseSchema>;
export type GenreWithRelations = z.infer<typeof genreWithRelationsSchema>;
