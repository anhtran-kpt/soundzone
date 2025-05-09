import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { genreClientService } from "../services/client";
import { CreateGenreDto, UpdateGenreDto } from "../schemas";
import { toast } from "sonner";

// Define query keys for this genre
export const genreKeys = {
  all: ["genres"] as const,
  lists: () => [...genreKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...genreKeys.lists(), { filters }] as const,
  details: () => [...genreKeys.all, "detail"] as const,
  detail: (slug: string) => [...genreKeys.details(), slug] as const,
};

// Hook to fetch all genres
export function useGenres(params?: { limit?: number }) {
  return useQuery({
    queryKey: genreKeys.lists(),
    queryFn: () => genreClientService.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch genres");
      }
      return response.data;
    },
  });
}

// Hook to fetch a single genre
export function useGenre(slug: string) {
  return useQuery({
    queryKey: genreKeys.detail(slug),
    queryFn: () => genreClientService.getBySlug(slug),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch genre");
      }
      return response.data;
    },
    enabled: !!slug, // Only run if slug exists
  });
}

// Hook to create an genre
export function useCreateGenre() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateGenreDto) => genreClientService.create(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Genre created successfully");
        queryClient.invalidateQueries({ queryKey: genreKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to create genre");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error creating genre: ${error.message}`);
    },
  });
}

// Hook to update an genre
export function useUpdateGenre(slug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateGenreDto) => genreClientService.update(slug, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Genre updated successfully");
        queryClient.invalidateQueries({ queryKey: genreKeys.detail(slug) });
        queryClient.invalidateQueries({ queryKey: genreKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to update genre");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating genre: ${error.message}`);
    },
  });
}

// Hook to delete an genre
export function useDeleteGenre() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => genreClientService.delete(slug),
    onSuccess: (response, slug) => {
      if (response.success) {
        toast.success("Genre deleted successfully");
        queryClient.invalidateQueries({ queryKey: genreKeys.lists() });
        queryClient.removeQueries({ queryKey: genreKeys.detail(slug) });
      } else {
        toast.error(response.error?.message || "Failed to delete genre");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting genre: ${error.message}`);
    },
  });
}
