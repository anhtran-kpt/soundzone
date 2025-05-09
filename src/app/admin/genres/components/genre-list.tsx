"use client";

import { GenreCard } from "./genre-card";
import { useState } from "react";
import { useGenres } from "@/features/genre/hooks";
import { useDeleteGenre } from "@/features/genre/hooks";

export function GenreList() {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { data: genres, isLoading, error } = useGenres();

  const deleteMutation = useDeleteGenre();

  const handleDelete = (id: string) => {
    setDeletingId(id);
    deleteMutation.mutate(id, {
      onSettled: () => {
        setDeletingId(null);
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Error loading genres: {(error as Error).message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {genres?.map((genre) => (
        <GenreCard
          key={genre.id}
          genre={genre}
          onDelete={() => handleDelete(genre.slug)}
        />
      ))}
      {(!genres || genres.length === 0) && (
        <div className="col-span-full text-center p-8 border rounded-lg">
          No genres found.
        </div>
      )}
    </div>
  );
}
