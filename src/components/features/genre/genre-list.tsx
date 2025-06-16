"use client";

import { useGenres } from "@/lib/queries/genre";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Genre } from "@/app/generated/prisma";

export default function GenreList() {
  const { data: genres, isLoading, error } = useGenres();

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
