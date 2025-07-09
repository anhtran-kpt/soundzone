"use client";

import { ArtistBanner } from "@/components/shared/ui";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import { notFound } from "next/navigation";
import { Discography } from "../../../new-components/ui/discography";
import { Button } from "@/components/ui";
import { EllipsisIcon, PauseIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";
import TrackList from "@/components/ui/track-list";
import { useQueries } from "@tanstack/react-query";
import {
  useArtistDiscography,
  useArtistInfo,
  useArtistPopularTracks,
} from "@/features/artist/artist-queries";
import { SectionHeading } from "@/new-components/ui/section-heading";
import { FollowButton } from "@/new-components/features/follow-button";
import { TrackListSkeleton } from "@/new-components/ui/track-list-skeleton";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const { data: artistInfo, isLoading: isArtistInfoLoading } =
    useArtistInfo(artistSlug);
  const { data: popularTracks, isLoading: isPopularTrackLoading } =
    useArtistPopularTracks(artistSlug, { limit: 5 });
  const { data: discography, isLoading: isDiscographyLoading } =
    useArtistDiscography(artistSlug);

  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

  console.log(popularTracks);

  return (
    <div className="space-y-3">
      <section>
        {!isArtistInfoLoading && (
          <ArtistBanner
            name={artistInfo.name}
            bannerPublicId={artistInfo.bannerPublicId}
          />
        )}
      </section>
      <section className="flex gap-6 items-center py-6 relative">
        {!isArtistInfoLoading && (
          <Button type="button" size="icon" className="rounded-full size-12">
            {currentTrack?.album.artistId === artistInfo.id && isPlaying ? (
              <PauseIcon
                strokeWidth={0}
                fill="currentColor"
                className="size-6"
              />
            ) : (
              <PlayIcon
                strokeWidth={0}
                fill="currentColor"
                className="size-6"
              />
            )}
          </Button>
        )}
        <ShuffleIcon />
        <FollowButton artistSlug={artistSlug} />
        <EllipsisIcon />
      </section>
      <section>
        <SectionHeading title="Popular" />
        {isPopularTrackLoading || !popularTracks ? (
          <TrackListSkeleton count={5} />
        ) : (
          <TrackList
            tracks={popularTracks.data.data}
            hasNext={popularTracks.meta?.hasNext ?? false}
          />
        )}
        <Button variant="link" type="button" className="text-white mt-2">
          See more
        </Button>
      </section>
      <section>
        <div className="flex items-center justify-between">
          <SectionHeading title="Discography" />
          <Button asChild type="button" variant="link">
            <Link href={`/artists/${artistSlug}/albums`}>Show all</Link>
          </Button>
        </div>
        {!isDiscographyLoading && <Discography discography={discography} />}
      </section>

      {/* <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Discography</h2>
          <Button asChild type="button" variant="link">
            <Link href={`/artists/${artist.slug}/discography`}>
              Show all
            </Link>
          </Button>
        </div>
       
      </section> */}
    </div>
  );
}
