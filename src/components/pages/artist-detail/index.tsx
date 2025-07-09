"use client";

import { ArtistBanner } from "@/components/shared/ui";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import { notFound } from "next/navigation";
import { Discography } from "../../user/artist/discography";
import { Button } from "@/components/ui";
import { EllipsisIcon, PauseIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";
import TrackList from "@/components/ui/track-list";
import { useQueries } from "@tanstack/react-query";
import {
  useArtistInfo,
  useArtistPopularTracks,
} from "@/features/artist/artist-queries";
import { SectionHeading } from "@/new-components/ui/section-heading";
import { FollowButton } from "@/new-components/features/follow-button";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const { data: artistInfo, isLoading } = useArtistInfo(artistSlug);
  const { data: popularTracks, isLoading: isPopularTrackLoading } =
    useArtistPopularTracks(artistSlug, { limit: 5 });

  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!artistInfo) {
    return notFound();
  }

  return (
    <>
      <section>
        <ArtistBanner artist={artistInfo} />
      </section>
      <section className="flex gap-6 items-center py-6 relative">
        <Button type="button" size="icon" className="rounded-full size-12">
          {currentTrack?.album.artistId === artistInfo.id && isPlaying ? (
            <PauseIcon strokeWidth={0} fill="currentColor" className="size-6" />
          ) : (
            <PlayIcon strokeWidth={0} fill="currentColor" className="size-6" />
          )}
        </Button>
        <ShuffleIcon />
        <FollowButton artistSlug={artistSlug} />
        <EllipsisIcon />
      </section>
      <section>
        <SectionHeading title="Popular" />
        {popularTracks && (
          <TrackList
            tracks={popularTracks.data.data}
            hasNext={popularTracks.meta?.hasNext}
          />
        )}
      </section>
      <section>
        <SectionHeading title="Discography" />
      </section>
      {/* <TracksPopular tracks={artist.tracks} /> */}
      {/* <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Discography</h2>
          <Button asChild type="button" variant="link">
            <Link href={`/artists/${artist.slug}/discography`}>
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
