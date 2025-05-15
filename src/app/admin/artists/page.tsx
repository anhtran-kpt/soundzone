import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import ArtistList from "./components/artist-list";
import ArtistListSkeleton from "./components/artist-list-skeleton";

export default function ArtistsPage() {
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

      <Suspense fallback={<ArtistListSkeleton />}>
        <ArtistList />
      </Suspense>
    </div>
  );
}
