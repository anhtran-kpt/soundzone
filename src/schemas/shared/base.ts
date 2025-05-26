import { z } from "zod";

export const baseFields = {
  id: z.string().cuid(),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug must contain only lowercase letters, numbers, and hyphens"
    ),
  name: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters")
    .trim(),
  description: z
    .string()
    .max(2000, "Description must be less than 2000 characters")
    .trim()
    .optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  url: z.string().url("Invalid URL"),
  duration: z.number().int().min(0),
  count: z.number().int().min(0),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
} as const;

export const timestampFields = {
  createdAt: baseFields.createdAt,
  updatedAt: baseFields.updatedAt,
} as const;
