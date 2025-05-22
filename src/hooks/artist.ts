import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { artistClientService } from "@/services";
import { CreateArtistDto, UpdateArtistDto } from "@/schemas";
import { toast } from "sonner";

export const artistKeys = {
  all: ["artists"] as const,
  lists: () => [...artistKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...artistKeys.lists(), { filters }] as const,
  details: () => [...artistKeys.all, "detail"] as const,
  detail: (slug: string) => [...artistKeys.details(), slug] as const,
};

export function useArtists(params?: { limit?: number }) {
  return useQuery({
    queryKey: artistKeys.lists(),
    queryFn: () => artistClientService.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch artists");
      }
      return response.data;
    },
  });
}

export function useArtist(slug: string) {
  return useQuery({
    queryKey: artistKeys.detail(slug),
    queryFn: () => artistClientService.getBySlug(slug),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch artist");
      }
      return response.data;
    },
    enabled: !!slug,
  });
}

export function useCreateArtist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateArtistDto) => artistClientService.create(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Artist created successfully");
        queryClient.invalidateQueries({ queryKey: artistKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to create artist");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error creating artist: ${error.message}`);
    },
  });
}

export function useUpdateArtist(slug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateArtistDto) =>
      artistClientService.update(slug, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Artist updated successfully");
        queryClient.invalidateQueries({ queryKey: artistKeys.detail(slug) });
        queryClient.invalidateQueries({ queryKey: artistKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to update artist");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating artist: ${error.message}`);
    },
  });
}

export function useDeleteArtist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => artistClientService.delete(slug),
    onSuccess: (response, slug) => {
      if (response.success) {
        toast.success("Artist deleted successfully");
        queryClient.invalidateQueries({ queryKey: artistKeys.lists() });
        queryClient.removeQueries({ queryKey: artistKeys.detail(slug) });
      } else {
        toast.error(response.error?.message || "Failed to delete artist");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting artist: ${error.message}`);
    },
  });
}
