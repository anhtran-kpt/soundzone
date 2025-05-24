import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { songApi } from "@/services/api";
import { CreateSongDto, UpdateSongDto } from "@/schemas";
import { songKeys } from "./keys";

export function useSongs(params?: { limit?: number }) {
  return useQuery({
    queryKey: songKeys.lists(),
    queryFn: () => songApi.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch songs");
      }
      return response.data;
    },
  });
}

export function useSong(slug: string) {
  return useQuery({
    queryKey: songKeys.detail(slug),
    queryFn: () => songApi.getBySlug(slug),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch song");
      }
      return response.data;
    },
    enabled: !!slug,
  });
}

export function useCreateSong() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSongDto) => songApi.create(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Song created successfully");
        queryClient.invalidateQueries({ queryKey: songKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to create song");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error creating song: ${error.message}`);
    },
  });
}

export function useUpdateSong(slug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateSongDto) => songApi.update(slug, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Song updated successfully");
        queryClient.invalidateQueries({ queryKey: songKeys.detail(slug) });
        queryClient.invalidateQueries({ queryKey: songKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to update song");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating song: ${error.message}`);
    },
  });
}

export function useDeleteSong() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => songApi.delete(slug),
    onSuccess: (response, slug) => {
      if (response.success) {
        toast.success("Song deleted successfully");
        queryClient.invalidateQueries({ queryKey: songKeys.lists() });
        queryClient.removeQueries({ queryKey: songKeys.detail(slug) });
      } else {
        toast.error(response.error?.message || "Failed to delete song");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting song: ${error.message}`);
    },
  });
}
