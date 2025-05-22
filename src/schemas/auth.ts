import { z } from "zod";

export const authSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signInSchema = authSchema.pick({ email: true, password: true });
export const signUpSchema = authSchema;

export const updateAuthSchema = authSchema.partial();

export type SignInDto = z.infer<typeof signInSchema>;
export type SignUpDto = z.infer<typeof signUpSchema>;
export type UpdateAuthDto = z.infer<typeof updateAuthSchema>;
