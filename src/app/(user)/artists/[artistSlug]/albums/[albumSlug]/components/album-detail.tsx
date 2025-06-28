"use client";

import { TracksList } from "@/components/shared";
import Banner from "@/components/shared/banner";
import { Button } from "@/components/ui";
import { useGetAlbumBySlug, useIsPlaying } from "@/hooks";
import {
  DownloadIcon,
  EllipsisIcon,
  PauseIcon,
  PlayIcon,
  PlusCircleIcon,
  ShuffleIcon,
} from "lucide-react";
import { notFound } from "next/navigation";

export default function AlbumDetail({ albumSlug }: { albumSlug: string }) {
  const { data: album, isError, error } = useGetAlbumBySlug(albumSlug);
  const isPlaying = useIsPlaying();

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!album) {
    return notFound();
  }

  return (
    <>
      <section>{album.bannerPublicId && <Banner album={album} />}</section>
      <section className="flex gap-6 items-center py-6">
        <Button type="button" size="icon" className="rounded-full size-12">
          {isPlaying ? (
            <PauseIcon strokeWidth={0} fill="currentColor" className="size-6" />
          ) : (
            <PlayIcon strokeWidth={0} fill="currentColor" className="size-6" />
          )}
        </Button>
        <ShuffleIcon />
        <PlusCircleIcon />
        <DownloadIcon />
        <EllipsisIcon />
      </section>
      <section>
        <TracksList tracks={album.tracks} />
      </section>
    </>
  );
}
