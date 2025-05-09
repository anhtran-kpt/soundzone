import { z } from "zod";

// Base schema for auth
export const authSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Create schema (used for API validation)
export const signInSchema = authSchema.pick({ email: true, password: true });
export const signUpSchema = authSchema;

// Update schema (allows partial updates)
export const updateAuthSchema = authSchema.partial();

// Define TypeScript types based on schemas
export type SignInDto = z.infer<typeof signInSchema>;
export type SignUpDto = z.infer<typeof signUpSchema>;
export type UpdateAuthDto = z.infer<typeof updateAuthSchema>;
