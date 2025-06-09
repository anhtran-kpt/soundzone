"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { DataTable } from "@/components/common/data-table";
import { columns } from "@/components/features/artist/columns";
import { useArtists } from "@/services/queries/artist";

export default function ArtistsPage() {
  const { data: artists, isLoading, error } = useArtists();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Artists</h1>
        <Link href="/admin/artists/new">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Artist
          </Button>
        </Link>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={artists || []} />
      </div>
    </div>
  );
}
