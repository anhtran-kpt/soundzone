"use client";

import { useState } from "react";
import { useArtists, useDeleteArtist } from "@/hooks";
import { EditIcon, TrashIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Artist } from "@/app/generated/prisma";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ArtistList() {
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  const { data: artists, isLoading, error } = useArtists();

  const deleteMutation = useDeleteArtist();

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

  if (error)
    return <div>Error loading artists: {(error as Error).message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artists?.map((artist: Artist) => (
        <div key={artist.id}>
          <Card>
            <div className="flex items-center">
              <Avatar className="size-20">
                <AvatarImage src={artist.avatarUrl || ""} />
                <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardHeader>
                  <CardTitle>{artist.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {artist.bio || "No bio"}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Link href={`/admin/artists/${artist.slug}/edit`}>
                      <Button variant="outline" size="sm">
                        <EditIcon className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(artist.slug)}
                      disabled={deletingSlug === artist.slug}
                    >
                      <TrashIcon className="h-4 w-4 mr-1" />
                      {deletingSlug === artist.slug ? "Deleting..." : "Delete"}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {(!artists || artists.length === 0) && (
        <div className="col-span-full text-center p-8 border rounded-lg">
          No artists found.
        </div>
      )}
    </div>
  );
}
