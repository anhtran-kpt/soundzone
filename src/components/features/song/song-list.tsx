"use client";

import { useState } from "react";
import { useSongs, useDeleteSong } from "@/services/queries/song";
import { EditIcon, TrashIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Song } from "@/app/generated/prisma";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SongList() {
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  const { data: song, isLoading, error } = useSongs();

  const deleteMutation = useDeleteSong();

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

  if (error) return <div>Error loading songs: {(error as Error).message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {song?.map((song: Song) => (
        <div key={song.id}>
          <Card>
            <div className="flex items-center">
              <Avatar className="size-20">
                <AvatarImage src={song.coverUrl || ""} />
                <AvatarFallback>{song.title.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardHeader>
                  <CardTitle>{song.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {song.lyrics || "No lyrics"}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Link href={`/admin/Songs/${song.slug}/edit`}>
                      <Button variant="outline" size="sm">
                        <EditIcon className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(song.slug)}
                      disabled={deletingSlug === song.slug}
                    >
                      <TrashIcon className="h-4 w-4 mr-1" />
                      {deletingSlug === song.slug ? "Deleting..." : "Delete"}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {(!song || song.length === 0) && (
        <div className="col-span-full text-center p-8 border rounded-lg">
          No songs found.
        </div>
      )}
    </div>
  );
}
