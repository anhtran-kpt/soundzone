"use client";

import { ArtistBanner } from "@/components/shared/ui";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import { notFound } from "next/navigation";
import { Discography } from "../user/artist/discography";
import { Button } from "@/components/ui";
import { EllipsisIcon, PauseIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";
import TrackList from "@/components/ui/track-list";
import { useQueries } from "@tanstack/react-query";
import { ArtistQueries } from "@/features/artist";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const [artistQuery] = useQueries({
    queries: [ArtistQueries.fetchInfo(artistSlug)],
  });

  const artistData = artistQuery.data;

  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

  // if (isError) {
  //   return <div>Error: {error?.message}</div>;
  // }

  if (!artistData) {
    return notFound();
  }

  return (
    <>
      <section>
        <ArtistBanner artist={artistData} />
      </section>
      {/* <section className="flex gap-6 items-center py-6 relative">
        <Button type="button" size="icon" className="rounded-full size-12">
          {currentTrack?.album.artistId === artistData.id && isPlaying ? (
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
      </section> */}
      {/* <TrackList tracks={artist.tracks} /> */}
      {/* <TracksPopular tracks={artist.tracks} /> */}
      {/* <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Discography</h2>
          <Button asChild type="button" variant="link">
            <Link href={`/artists/${artistData.slug}/discography`}>
              Show all
            </Link>
          </Button>
        </div>
        <Discography
          popularRelease={artist.albums}
          albumsByType={artist.albumsByType}
        />
      </section> */}
    </>
  );
}
