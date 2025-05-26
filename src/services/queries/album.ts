import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { albumApi } from "@/services/api";
import { CreateAlbumRequest, UpdateAlbumRequest } from "@/schemas";
import { albumKeys } from "./keys";

export function useAlbums(params?: { limit?: number }) {
  return useQuery({
    queryKey: albumKeys.lists(),
    queryFn: () => albumApi.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch albums");
      }
      return response.data;
    },
  });
}

export function useAlbum(slug: string) {
  return useQuery({
    queryKey: albumKeys.detail(slug),
    queryFn: () => albumApi.getBySlug(slug),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch album");
      }
      return response.data;
    },
    enabled: !!slug,
  });
}

export function useCreateAlbum() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAlbumRequest) => albumApi.create(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Album created successfully");
        queryClient.invalidateQueries({ queryKey: albumKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to create album");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error creating album: ${error.message}`);
    },
  });
}

export function useUpdateAlbum(slug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateAlbumRequest) => albumApi.update(slug, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Album updated successfully");
        queryClient.invalidateQueries({ queryKey: albumKeys.detail(slug) });
        queryClient.invalidateQueries({ queryKey: albumKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to update album");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating album: ${error.message}`);
    },
  });
}

export function useDeleteAlbum() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => albumApi.delete(slug),
    onSuccess: (response, slug) => {
      if (response.success) {
        toast.success("Album deleted successfully");
        queryClient.invalidateQueries({ queryKey: albumKeys.lists() });
        queryClient.removeQueries({ queryKey: albumKeys.detail(slug) });
      } else {
        toast.error(response.error?.message || "Failed to delete album");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting album: ${error.message}`);
    },
  });
}
