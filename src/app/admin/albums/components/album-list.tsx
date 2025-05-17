"use client";

import { useState } from "react";
import { useAlbums, useDeleteAlbum } from "@/hooks";
import { EditIcon, TrashIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Album } from "@/app/generated/prisma";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AlbumList() {
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  const { data: albums, isLoading, error } = useAlbums();

  const deleteMutation = useDeleteAlbum();

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

  if (error) return <div>Error loading albums: {(error as Error).message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums?.map((album: Album) => (
        <div key={album.id}>
          <Card>
            <div className="flex items-center">
              <Avatar className="size-20">
                <AvatarImage src={album.coverUrl || ""} />
                <AvatarFallback>{album.title.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardHeader>
                  <CardTitle>{album.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {album.description || "No description"}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Link href={`/admin/albums/${album.slug}/edit`}>
                      <Button variant="outline" size="sm">
                        <EditIcon className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(album.slug)}
                      disabled={deletingSlug === album.slug}
                    >
                      <TrashIcon className="h-4 w-4 mr-1" />
                      {deletingSlug === album.slug ? "Deleting..." : "Delete"}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {(!albums || albums.length === 0) && (
        <div className="col-span-full text-center p-8 border rounded-lg">
          No albums found.
        </div>
      )}
    </div>
  );
}
