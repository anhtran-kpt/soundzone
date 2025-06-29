"use client";

import { ArtistBanner } from "@/components/shared/ui";
import TracksPopular from "./tracks-popular";
import { useCurrentTrack, useGetArtistBySlug, useIsPlaying } from "@/hooks";
import { notFound } from "next/navigation";
import { Discography } from "./discography";
import { Button } from "@/components/ui";
import { EllipsisIcon, PauseIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const { data: artist, isError, error } = useGetArtistBySlug(artistSlug);
  console.log(artist);

  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!artist) {
    return notFound();
  }

  return (
    <>
      <section>
        <ArtistBanner artist={artist} />
      </section>
      <section className="flex gap-6 items-center py-6">
        <Button type="button" size="icon" className="rounded-full size-12">
          {currentTrack?.album.artistId === artist.id && isPlaying ? (
            <PauseIcon strokeWidth={0} fill="currentColor" className="size-6" />
          ) : (
            <PlayIcon strokeWidth={0} fill="currentColor" className="size-6" />
          )}
        </Button>
        <ShuffleIcon />
        <Button type="button" variant="outline" className="rounded-full">
          Follow
        </Button>
        <EllipsisIcon />
      </section>
      <TracksPopular tracks={artist.tracks} />
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Discography</h2>
          <Button asChild type="button" variant="link">
            <Link href={`/artists/${artist.slug}/discography`}>Show all</Link>
          </Button>
        </div>
        <Discography
          popularRelease={artist.albums}
          albumsByType={artist.albumsByType}
        />
      </section>
    </>
  );
}
