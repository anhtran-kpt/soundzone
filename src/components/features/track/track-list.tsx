"use client";

import { useState } from "react";
import { useTracks, useDeleteTrack } from "@/services/queries/track";
import { EditIcon, TrashIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Track } from "@/app/generated/prisma";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TrackList() {
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  const { data: track, isLoading, error } = useTracks();

  const deleteMutation = useDeleteTrack();

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

  if (error) return <div>Error loading tracks: {(error as Error).message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {track?.map((track: Track) => (
        <div key={track.id}>
          <Card>
            <div className="flex items-center">
              <Avatar className="size-20">
                <AvatarImage src={track.coverUrl || ""} />
                <AvatarFallback>{track.title.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardHeader>
                  <CardTitle>{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {track.lyrics || "No lyrics"}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Link href={`/admin/Tracks/${track.slug}/edit`}>
                      <Button variant="outline" size="sm">
                        <EditIcon className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(track.slug)}
                      disabled={deletingSlug === track.slug}
                    >
                      <TrashIcon className="h-4 w-4 mr-1" />
                      {deletingSlug === track.slug ? "Deleting..." : "Delete"}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {(!track || track.length === 0) && (
        <div className="col-span-full text-center p-8 border rounded-lg">
          No tracks found.
        </div>
      )}
    </div>
  );
}
