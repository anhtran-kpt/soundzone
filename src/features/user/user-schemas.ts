import z from "zod";
import { baseFields } from "../shared";

export const signInSchema = z.object({
  email: baseFields.email,
  password: baseFields.password,
});

export const signUpSchema = z
  .object({
    name: baseFields.name,
    email: baseFields.email,
    password: baseFields.password,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
