"use client";

import { useState } from "react";
import { useGenres } from "@/features/genre/hooks";
import { useDeleteGenre } from "@/features/genre/hooks";
import { EditIcon, TrashIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Genre } from "@/app/generated/prisma";
import Link from "next/link";

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
      {genres?.map((genre: Genre) => (
        <div key={genre.id}>
          <Card>
            <CardHeader>
              <CardTitle>{genre.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {genre.description || "No description"}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Link href={`/admin/genres/${genre.slug}/edit`}>
                  <Button variant="outline" size="sm">
                    <EditIcon className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(genre.id)}
                  disabled={deletingId === genre.id}
                >
                  {deletingId === genre.id ? "Deleting..." : "Delete"}
                  <TrashIcon className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
      {(!genres || genres.length === 0) && (
        <div className="col-span-full text-center p-8 border rounded-lg">
          No genres found.
        </div>
      )}
    </div>
  );
}
