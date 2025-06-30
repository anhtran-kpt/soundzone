"use client";

import { Button, DataTable } from "@/components/ui";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { ArtistColumns } from "@/components/admin/artist";
import { useGetArtists } from "@/hooks";

export default function ArtistsPage() {
  const { data: artists, isLoading, error } = useGetArtists();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!artists) {
    return <div>No artists found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Artists</h3>
        <Button asChild type="button" variant="outline">
          <Link href="/admin/artists/new">
            <PlusIcon className="mr-1 size-4" />
            New artist
          </Link>
        </Button>
      </div>
      <DataTable columns={ArtistColumns} data={artists || []} />
    </div>
  );
}
