import {
  useQuery,
  useMutation,
  UseQueryOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { genreApi } from "@/lib/api-client";
import { toast } from "sonner";
import { genreKeys } from "@/lib/query-keys";
import { CreateGenre } from "@/schemas";

export function useGenresQuery(
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: genreKeys.all,
    queryFn: ({ signal }) => genreApi.getAll(signal),
    placeholderData: keepPreviousData,
    ...options,
  });
}

export function useGenreQuery(
  genreSlug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: genreKeys.detail(genreSlug),
    queryFn: ({ signal }) => genreApi.getBySlug(genreSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!genreSlug,
    ...options,
  });
}

export function useCreateGenreMutation() {
  return useMutation({
    mutationFn: (data: CreateGenre) => genreApi.create(data),
    onSuccess: async () => {
      toast.success("Genre created successfully");
    },
    onError: (error) => {
      toast.error(`Created failed: ${error.message}`);
      console.error("Created failed:", error);
    },
  });
}
