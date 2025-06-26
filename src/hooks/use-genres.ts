import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { genreApi, ApiClientError } from "@/lib/api-client";
import { queryKeys, invalidateQueries } from "@/lib/query-keys";
import { toast } from "sonner";

export function useGenresQuery(
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.genresList(),
    queryFn: ({ signal }) => genreApi.getGenres(signal),
    placeholderData: keepPreviousData,
    ...options,
  });
}

export function useGenreQuery(
  genreSlug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.genreDetail(genreSlug),
    queryFn: ({ signal }) => genreApi.getGenreBySlug(genreSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!genreSlug,
    ...options,
  });
}

export function useCreateGenreMutation(
  options?: UseMutationOptions<
    unknown,
    ApiClientError,
    Parameters<typeof genreApi.createGenre>[0]
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: genreApi.createGenre,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: invalidateQueries.genres(),
      });

      // queryClient.setQueryData(queryKeys.genresDetail(data.genre.id), data);
      toast.success("Genre created successfully");
      options?.onSuccess?.(data, variables, undefined);
    },
    onError: (error, variables, context) => {
      toast.error(`Create genre failed: ${error.message}`);
      console.error("Create genre failed:", error);
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
}
