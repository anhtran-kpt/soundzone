import { api } from "@/lib/api-client";
import { SignUpInput } from "@/schemas";
import { GetUsersReturn, SignUpReturn, GetUserBySlugReturn } from "@/types";

const endpoints = {
  list: "/users",
  detail: (userSlug: string) => `/users/${userSlug}`,
  signUp: "/auth/sign-up",
} as const;

export const getUsers = async (signal: AbortSignal) => {
  return await api.get<GetUsersReturn>(endpoints.list, signal);
};

export const getUserBySlug = async (userSlug: string, signal: AbortSignal) => {
  return await api.get<GetUserBySlugReturn>(endpoints.detail(userSlug), signal);
};

export const signUp = async (data: SignUpInput) => {
  return await api.post<SignUpReturn>(endpoints.signUp, {
    data,
  });
};
