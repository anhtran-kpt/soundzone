import { User } from "@/app/generated/prisma";
import { apiClient } from "../api-client";
import type { SignUp } from "@/types";

export const signUp = async (input: SignUp) => {
  return await apiClient.post<User>("/sign-up", input);
};
