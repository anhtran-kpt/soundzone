import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { albumClientService } from "@/services/client";
import { CreateAlbumDto, UpdateAlbumDto } from "@/schemas";
import { toast } from "sonner";

export const albumKeys = {
  all: ["albums"] as const,
  lists: () => [...albumKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...albumKeys.lists(), { filters }] as const,
  details: () => [...albumKeys.all, "detail"] as const,
  detail: (slug: string) => [...albumKeys.details(), slug] as const,
};

export function useAlbums(params?: { limit?: number }) {
  return useQuery({
    queryKey: albumKeys.lists(),
    queryFn: () => albumClientService.getAll(params),
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
    queryFn: () => albumClientService.getBySlug(slug),
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
    mutationFn: (data: CreateAlbumDto) => albumClientService.create(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("album created successfully");
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
    mutationFn: (data: UpdateAlbumDto) => albumClientService.update(slug, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("album updated successfully");
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
    mutationFn: (slug: string) => albumClientService.delete(slug),
    onSuccess: (response, slug) => {
      if (response.success) {
        toast.success("album deleted successfully");
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
