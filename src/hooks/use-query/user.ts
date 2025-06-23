import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { USER_ENDPOINTS } from "../endpoints";
import { FullUser } from "../types";
import { apiClient } from "../api/client/api-client";
import { SignUpRequest } from "../validations";

const keys = {
  all: ["users"] as const,
  lists: (params: { limit?: number } = {}) =>
    [...keys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...keys.lists({}), { filters }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (slug: string) => [...keys.details(), slug] as const,
};

export function useUsers(params?: { limit?: number }) {
  return useQuery({
    queryKey: keys.lists(params),
    queryFn: ({ signal }) =>
      apiClient.get<FullUser[]>(USER_ENDPOINTS.list, {
        params,
        signal,
      }),
    placeholderData: keepPreviousData,
  });
}

export function useUser(slug: string) {
  return useQuery({
    queryKey: keys.detail(slug),
    queryFn: ({ signal }) =>
      apiClient.get<FullUser>(USER_ENDPOINTS.detail(slug), {
        signal,
      }),
    enabled: !!slug,
    placeholderData: keepPreviousData,
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: (data: SignUpRequest) => {
      return apiClient.post<FullUser>(USER_ENDPOINTS.signUp, data);
    },
  });
}
