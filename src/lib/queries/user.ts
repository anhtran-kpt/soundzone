import { api } from "@/lib/api-client";
import { SignUpInput } from "@/schemas";
import { GetUsersReturn, SignUpReturn, GetUserReturn } from "@/types";

const endpoints = {
  list: "/users",
  detail: (userId: string) => `/users/${userId}`,
  signUp: "/auth/sign-up",
} as const;

export const getUsers = async (signal: AbortSignal) => {
  return await api.get<GetUsersReturn>(endpoints.list, signal);
};

export const getUser = async (userId: string, signal: AbortSignal) => {
  return await api.get<GetUserReturn>(endpoints.detail(userId), signal);
};

export const signUp = async (data: SignUpInput) => {
  return await api.post<SignUpReturn>(endpoints.signUp, data);
};
