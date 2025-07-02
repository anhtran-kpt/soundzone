import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { createArtist, getArtist, getArtists } from "@/lib/queries";
import { CreateArtistInput } from "@/schemas";
import { artistKeys } from "@/lib/query-keys";

export function useGetArtists() {
  return useQuery({
    queryKey: artistKeys.all,
    queryFn: ({ signal }) => getArtists(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetArtist(artistId: string) {
  return useQuery({
    queryKey: artistKeys.detail(artistId),
    queryFn: ({ signal }) => getArtist(artistId, signal),
    placeholderData: keepPreviousData,
    enabled: !!artistId,
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
