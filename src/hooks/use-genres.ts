import { useQuery, useMutation, keepPreviousData } from "@tanstack/react-query";
import { toast } from "sonner";
import { genreKeys } from "@/lib/query-keys";
import { CreateGenreInput } from "@/schemas";
import { getGenre, getGenres, createGenre } from "@/lib/queries";

export function useGetGenres() {
  return useQuery({
    queryKey: genreKeys.all,
    queryFn: ({ signal }) => getGenres(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetGenre(genreId: string) {
  return useQuery({
    queryKey: genreKeys.detail(genreId),
    queryFn: ({ signal }) => getGenre(genreId, signal),
    placeholderData: keepPreviousData,
    enabled: !!genreId,
  });
}

export function useCreateGenre() {
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
