import { userSchema } from "./entities";
import { z } from "zod";

export const signInSchema = userSchema.pick({ email: true, password: true });
export const signUpSchema = userSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
  role: true,
  avatarUrl: true,
});

export const signUpFormSchema = signUpSchema
  .extend({
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignInDto = z.infer<typeof signInSchema>;
export type SignUpDto = z.infer<typeof signUpSchema>;
export type SignUpFormDto = z.infer<typeof signUpFormSchema>;
