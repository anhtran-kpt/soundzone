import { z } from "zod";
import { baseFields } from "../../shared";

export const signUpRequestSchema = z.object({
  name: baseFields.name,
  email: baseFields.email,
  password: baseFields.password,
});

export const signInRequestSchema = z.object({
  email: baseFields.email,
  password: baseFields.password,
});

export type SignUpRequest = z.infer<typeof signUpRequestSchema>;
export type SignInRequest = z.infer<typeof signInRequestSchema>;
