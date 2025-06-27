import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { createArtist, getArtistBySlug, getArtists } from "@/lib/queries";
import { CreateArtistInput } from "@/schemas";
import { artistKeys } from "@/lib/query-keys";

export function useGetArtists() {
  return useQuery({
    queryKey: artistKeys.all,
    queryFn: ({ signal }) => getArtists(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetArtistBySlug(artistSlug: string) {
  return useQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => getArtistBySlug(artistSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!artistSlug,
  });
}

export function useCreateArtist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateArtistInput) => createArtist(data),
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
