import {
  useQuery,
  useMutation,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { ApiResponse } from "@/types/api-type";

// Hook for GET requests
export function useApiQuery<T>(
  queryKey: QueryKey,
  url: string,
  options?: UseQueryOptions<ApiResponse<T>, Error, T>
) {
  return useQuery<ApiResponse<T>, Error, T>({
    queryKey,
    queryFn: () => apiClient.get<T>(url),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "An error has occurred");
      }
      return response.data as T;
    },
    ...options,
  });
}

// Hook for POST requests
export function useApiPostMutation<T, V = any>(
  url: string,
  options?: UseMutationOptions<ApiResponse<T>, Error, V>
) {
  return useMutation<ApiResponse<T>, Error, V>({
    mutationFn: (variables: V) => apiClient.post<T>(url, variables),
    ...options,
  });
}

// Hook for PUT requests
export function useApiPutMutation<T, V = any>(
  url: string,
  options?: UseMutationOptions<ApiResponse<T>, Error, V>
) {
  return useMutation<ApiResponse<T>, Error, V>({
    mutationFn: (variables: V) => apiClient.put<T>(url, variables),
    ...options,
  });
}

// Hook for DELETE requests
export function useApiDeleteMutation<T>(
  url: string,
  options?: UseMutationOptions<ApiResponse<T>, Error, string>
) {
  return useMutation<ApiResponse<T>, Error, string>({
    mutationFn: (id: string) => apiClient.delete<T>(`${url}/${id}`),
    ...options,
  });
}
