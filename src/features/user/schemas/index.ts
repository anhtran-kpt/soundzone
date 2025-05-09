import { z } from "zod";

// Base schema for user
export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Create schema (used for API validation)

// Update schema (allows partial updates)
export const updateUserSchema = userSchema.partial();

// Define TypeScript types based on schemas

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
