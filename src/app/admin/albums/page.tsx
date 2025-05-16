import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import AlbumList from "./components/album-list";
import AlbumListSkeleton from "./components/album-list-skeleton";

export default function AlbumsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Albums</h1>
        <Link href="/admin/albums/new">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Album
          </Button>
        </Link>
      </div>

      <Suspense fallback={<AlbumListSkeleton />}>
        <AlbumList />
      </Suspense>
    </div>
  );
}
