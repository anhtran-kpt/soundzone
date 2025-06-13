import { z } from "zod";
import { baseFields } from "./common";

export const userSchema = z.object({
  name: baseFields.name,
  email: baseFields.email,
  password: baseFields.password,
});

export const signInSchema = z.object({
  email: baseFields.email,
  password: baseFields.password,
});

export const signUpSchema = userSchema
  .extend({
    passwordConfirmation: baseFields.password,
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
      });
    }
  });

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignUpRequest = z.infer<typeof userSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
