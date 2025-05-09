"use client";

import { useGenres, useDeleteGenre } from "@/hooks/use-genres";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function GenreList() {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  // Use the query hook to fetch genres
  const {
    data: genres,
    isLoading,
    error,
  } = useGenres([], {
    // Options like staleTime, refetchInterval can be specified here
    refetchOnWindowFocus: true,
  });

  // Use the mutation hook for deleting a genre
  const deleteMutation = useDeleteGenre({
    // Handle success and error callbacks
    onSuccess: () => {
      toast.success("Genre deleted successfully");
      // Invalidate the genres query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ["genres"] });
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete genre: ${error.message}`);
    },
    onSettled: () => {
      setDeletingId(null);
    },
  });

  const handleDelete = (slug: string) => {
    setDeletingId(slug);
    deleteMutation.mutate(slug);
  };

  if (isLoading) return <div>Loading genres...</div>;
  if (error) return <div>Error loading genres: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Genres</h2>
        <Link href="/genres/new">
          <Button>Add Genre</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {genres?.map((genre) => (
          <div
            key={genre.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{genre.name}</h3>
              <p className="text-sm text-gray-500">{genre.slug}</p>
            </div>
            <div className="flex gap-2">
              <Link href={`/genres/${genre.slug}/edit`}>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(genre.slug)}
                disabled={deletingId === genre.slug}
              >
                {deletingId === genre.slug ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        ))}

        {genres?.length === 0 && (
          <div className="col-span-full text-center p-8 border rounded-lg">
            No genres found. Create your first genre!
          </div>
        )}
      </div>
    </div>
  );
}
