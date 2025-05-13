import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { GenreList } from "./components/genre-list";
import GenreListSkeleton from "./components/genre-list-skeleton";

export default function GenresPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Genres</h1>
        <Link href="/admin/genres/new">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Genre
          </Button>
        </Link>
      </div>

      <Suspense fallback={<GenreListSkeleton />}>
        <GenreList />
      </Suspense>
    </div>
  );
}
