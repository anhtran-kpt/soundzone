import { z } from "zod";
import { baseFields } from "../shared";

export const signUpFormSchema = z
  .object({
    name: baseFields.name,
    email: baseFields.email,
    password: baseFields.password,
    confirmPassword: baseFields.password,
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
      });
    }
  });

export type SignUpForm = z.infer<typeof signUpFormSchema>;
