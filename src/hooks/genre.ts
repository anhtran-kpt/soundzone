import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateGenreDto, UpdateGenreDto } from "@/schemas";
import { toast } from "sonner";
import { genreQueries } from "@/queries";

export const genreKeys = {
  all: ["genres"] as const,
  lists: () => [...genreKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...genreKeys.lists(), { filters }] as const,
  details: () => [...genreKeys.all, "detail"] as const,
  detail: (slug: string) => [...genreKeys.details(), slug] as const,
};

export function useGenres(params?: { limit?: number }) {
  return useQuery({
    queryKey: genreKeys.lists(),
    queryFn: () => genreQueries.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch genres");
      }
      return response.data;
    },
  });
}

export function useGenre(slug: string) {
  return useQuery({
    queryKey: genreKeys.detail(slug),
    queryFn: () => genreQueries.getBySlug(slug),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch genre");
      }
      return response.data;
    },
    enabled: !!slug,
  });
}

export function useCreateGenre() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateGenreDto) => genreQueries.create(data),
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

export function useUpdateGenre(slug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateGenreDto) => genreQueries.update(slug, data),
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

export function useDeleteGenre() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => genreQueries.delete(slug),
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
