import { useMutation, useQuery } from "@tanstack/react-query";
import { userKeys } from "./keys";
import { USER_ENDPOINTS } from "../endpoints";
import { FullUser } from "../types";
import { apiClient } from "../api/client/api-client";
import { SignUpRequest } from "../validations";

export function useUsers(params?: { limit?: number }) {
  return useQuery({
    queryKey: userKeys.lists(),
    queryFn: () => {
      const queryParams = new URLSearchParams();
      if (params?.limit) {
        queryParams.append("limit", params.limit.toString());
      }

      const url = `${USER_ENDPOINTS.list}?${queryParams.toString()}`;
      return apiClient.get<FullUser[]>(url);
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch users");
      }
      return response.data;
    },
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => {
      return apiClient.get<FullUser>(USER_ENDPOINTS.detail(id));
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch user");
      }
      return response.data;
    },
    enabled: !!id,
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: (data: SignUpRequest) => {
      return apiClient.post<FullUser>(USER_ENDPOINTS.signUp, data);
    },
  });
}
