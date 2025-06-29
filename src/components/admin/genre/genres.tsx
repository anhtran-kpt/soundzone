"use client";

import { DataTable } from "@/components/ui/data-table";
import { useGetGenres } from "@/hooks";
import { notFound } from "next/navigation";
import { GenreColumns } from "./genre-columns";
import { Button } from "@/components/ui";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export const Genres = () => {
  const { data: genres, isError, error } = useGetGenres();

  if (isError) {
    <div>Error: {error.message}</div>;
  }

  if (!genres) {
    return notFound();
  }

  return (
    <>
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">All Genres</h3>
          <Button type="button" variant="outline" asChild>
            <Link href={`/admin/genres/new`}>
              <PlusIcon />
              New genre
            </Link>
          </Button>
        </div>
        <DataTable columns={GenreColumns} data={genres} />
      </section>
    </>
  );
};
