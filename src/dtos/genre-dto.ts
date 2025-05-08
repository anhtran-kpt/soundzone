import { genreSchema } from "@/schemas/genre-schema";
import { z } from "zod";

export type CreateGenreDto = z.infer<typeof genreSchema>;
