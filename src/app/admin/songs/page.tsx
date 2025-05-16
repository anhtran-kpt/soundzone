import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import SongList from "./components/song-list";
import SongListSkeleton from "./components/song-list-skeleton";

export default function SongsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Songs</h1>
        <Link href="/admin/songs/new">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Song
          </Button>
        </Link>
      </div>

      <Suspense fallback={<SongListSkeleton />}>
        <SongList />
      </Suspense>
    </div>
  );
}
