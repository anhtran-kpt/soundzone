import { useQuery, useMutation, keepPreviousData } from "@tanstack/react-query";
import { toast } from "sonner";
import { genreKeys } from "@/lib/tanstack-query";
import { CreateGenreInput } from "@/schemas";
import { getGenreBySlug, getGenres, createGenre } from "@/lib/tanstack-query";

export function useGetGenres() {
  return useQuery({
    queryKey: genreKeys.all,
    queryFn: ({ signal }) => getGenres(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetGenreBySlug(genreSlug: string) {
  return useQuery({
    queryKey: genreKeys.detail(genreSlug),
    queryFn: ({ signal }) => getGenreBySlug(genreSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!genreSlug,
  });
}

export function useCreateGenreMutation() {
  return useMutation({
    mutationFn: (data: CreateGenreInput) => createGenre(data),
    onSuccess: async () => {
      toast.success("Genre created successfully");
    },
    onError: (error) => {
      toast.error(`Created failed: ${error.message}`);
      console.error("Created failed:", error);
    },
  });
}
