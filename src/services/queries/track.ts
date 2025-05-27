import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { trackApi } from "@/services/api";
import { trackKeys } from "./keys";

export function useTracks(params?: { limit?: number }) {
  return useQuery({
    queryKey: trackKeys.lists(),
    queryFn: () => trackApi.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch tracks");
      }
      return response.data;
    },
  });
}

export function useTrack(slug: string) {
  return useQuery({
    queryKey: trackKeys.detail(slug),
    queryFn: () => trackApi.getBySlug(slug),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch track");
      }
      return response.data;
    },
    enabled: !!slug,
  });
}

export function useDeleteTrack() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => trackApi.delete(slug),
    onSuccess: (response, slug) => {
      if (response.success) {
        toast.success("Track deleted successfully");
        queryClient.invalidateQueries({ queryKey: trackKeys.lists() });
        queryClient.removeQueries({ queryKey: trackKeys.detail(slug) });
      } else {
        toast.error(response.error?.message || "Failed to delete track");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting track: ${error.message}`);
    },
  });
}
