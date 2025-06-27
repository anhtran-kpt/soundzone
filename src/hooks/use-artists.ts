import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { artistApi } from "@/lib/api-client";
import { toast } from "sonner";
import { artistKeys } from "@/lib/query-keys";
import { CreateArtistInput } from "@/schemas";

export function useArtistsQuery() {
  return useQuery({
    queryKey: artistKeys.all,
    queryFn: ({ signal }) => artistApi.getAll(signal),
    placeholderData: keepPreviousData,
  });
}

export function useArtistDetail(artistSlug: string) {
  return useQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => artistApi.getBySlug(artistSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!artistSlug,
  });
}

export function useCreateArtistMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateArtistInput) => artistApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: artistKeys.all,
      });

      toast.success("Artist created successfully");
    },
    onError: (error) => {
      toast.error(`Create artist failed: ${error.message}`);
      console.error("Create artist failed:", error);
    },
  });
}
