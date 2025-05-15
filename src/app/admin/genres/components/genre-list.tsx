"use client";

import { useState } from "react";
import { useGenres, useDeleteGenre } from "@/hooks";
import { EditIcon, TrashIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Genre } from "@/app/generated/prisma";
import Link from "next/link";

export function GenreList() {
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  const { data: genres, isLoading, error } = useGenres();

  const deleteMutation = useDeleteGenre();

  const handleDelete = (slug: string) => {
    setDeletingSlug(slug);
    deleteMutation.mutate(slug, {
      onSettled: () => {
        setDeletingSlug(null);
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
              <div className="flex items-center gap-3 mt-4">
                <Link href={`/admin/genres/${genre.slug}/edit`}>
                  <Button variant="outline" size="sm">
                    <EditIcon className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(genre.slug)}
                  disabled={deletingSlug === genre.slug}
                >
                  <TrashIcon className="h-4 w-4 mr-1" />
                  {deletingSlug === genre.slug ? "Deleting..." : "Delete"}
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
