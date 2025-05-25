import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { trackApi } from "@/services/api";
import { CreateTrackDto, UpdateTrackDto } from "@/schemas";
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

export function useCreateTrack() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTrackDto) => trackApi.create(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Track created successfully");
        queryClient.invalidateQueries({ queryKey: trackKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to create track");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error creating track: ${error.message}`);
    },
  });
}

export function useUpdateTrack(slug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateTrackDto) => trackApi.update(slug, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Track updated successfully");
        queryClient.invalidateQueries({ queryKey: trackKeys.detail(slug) });
        queryClient.invalidateQueries({ queryKey: trackKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to update track");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating track: ${error.message}`);
    },
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
