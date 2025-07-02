"use client";

import { TracksList } from "@/components/shared/ui";
import { Button } from "@/components/ui";
import { useCurrentTrack, useGetAlbum, useIsPlaying } from "@/hooks";
import {
  DownloadIcon,
  EllipsisIcon,
  PauseIcon,
  PlayIcon,
  PlusCircleIcon,
  ShuffleIcon,
} from "lucide-react";
import { notFound } from "next/navigation";

export function AlbumDetail({ albumId }: { albumId: string }) {
  const { data: album, isError, error } = useGetAlbum(albumId);
  const isPlaying = useIsPlaying();
  const currentTrack = useCurrentTrack();

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!album) {
    return notFound();
  }

  return (
    <>
      {/* <section>{album.bannerPublicId && <AlbumBanner album={album} />}</section> */}
      <section className="flex gap-6 items-center py-6">
        <Button type="button" size="icon" className="rounded-full size-12">
          {isPlaying && currentTrack?.album.id === album.id ? (
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
