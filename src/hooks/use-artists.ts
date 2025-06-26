import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { artistApi, ApiClientError } from "@/lib/api-client";
import { toast } from "sonner";
import { artistKeys } from "@/lib/query-keys";

export function useArtistsQuery(
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: artistKeys.all,
    queryFn: ({ signal }) => artistApi.getArtists(signal),
    placeholderData: keepPreviousData,
    ...options,
  });
}

export function useArtistQuery(
  artistSlug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => artistApi.getArtistBySlug(artistSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!artistSlug,
    ...options,
  });
}

export const useTracksByArtistSlug = (
  artistSlug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: artistKeys.tracks(artistSlug),
    queryFn: ({ signal }) =>
      artistApi.getTracksByArtistSlug(artistSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!artistSlug,
    ...options,
  });
};

export function useCreateArtistMutation(
  options?: UseMutationOptions<
    unknown,
    ApiClientError,
    Parameters<typeof artistApi.createArtist>[0]
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: artistApi.createArtist,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: artistKeys.all,
      });

      // queryClient.setQueryData(queryKeys.artistsDetail(data.artist.id), data);
      toast.success("Artist created successfully");
      options?.onSuccess?.(data, variables, undefined);
    },
    onError: (error, variables, context) => {
      toast.error(`Create artist failed: ${error.message}`);
      console.error("Create artist failed:", error);
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
}
