import { z } from "zod";

export const baseFields = {
  id: z.string().cuid(),
  slug: z.string().min(1, "Slug is required"),
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  publicId: z.string(),
  duration: z.number().positive(),
} as const;

export const timestampFields = {
  createdAt: baseFields.createdAt,
  updatedAt: baseFields.updatedAt,
} as const;
