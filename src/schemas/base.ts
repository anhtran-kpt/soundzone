import { z } from "zod";

export const baseFields = {
  id: z.string().uuid("Invalid ID"),
  slug: z.string().min(1, "Slug is required"),
  title: z.string().min(1, "Title is required").trim(),
  description: z.string().trim().optional(),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
} as const;

export const timestampFields = {
  createdAt: baseFields.createdAt,
  updatedAt: baseFields.updatedAt,
} as const;

export const relationFields = {
  albumId: baseFields.id,
  artistId: baseFields.id,
  genreId: baseFields.id,
  songId: baseFields.id,
} as const;
