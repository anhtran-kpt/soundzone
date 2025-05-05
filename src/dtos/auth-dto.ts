import {
  signInSchema,
  signUpClientSchema,
  signUpSchema,
} from "@/schemas/auth-schema";
import { z } from "zod";

export type SignUpDto = z.infer<typeof signUpSchema>;
export type SignInDto = z.infer<typeof signInSchema>;
export type SignUpClientDto = z.infer<typeof signUpClientSchema>;
