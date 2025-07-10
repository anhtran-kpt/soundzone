"use client";

import { ArtistBanner } from "@/components/shared/ui";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import { notFound } from "next/navigation";
import {
  DiscographySection,
  DiscographySectionSkeleton,
} from "@/new-components/sections/artist-detail/discography-section";
import { Button } from "@/components/ui";
import { EllipsisIcon, PauseIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";
import TrackList from "@/components/ui/track-list";
import {
  useArtistDiscography,
  useArtistInfo,
  useArtistPopularTracks,
} from "@/features/artist/artist-queries";
import { SectionHeading } from "@/new-components/ui/section-heading";
import { FollowButton } from "@/new-components/features/follow-button";
import { TrackListSkeleton } from "@/new-components/ui/track-list-skeleton";
import {
  AboutSection,
  AboutSectionSkeleton,
} from "@/new-components/sections/artist-detail/about-section";

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
        <SectionHeading>Popular</SectionHeading>
        {isPopularTrackLoading || !popularTracks ? (
          <TrackListSkeleton count={5} />
        ) : (
          <TrackList tracks={popularTracks.data} />
        )}
      </section>
      {isDiscographyLoading || !discography ? (
        <DiscographySectionSkeleton />
      ) : (
        <DiscographySection />
      )}
      {isArtistInfoLoading || !artistInfo ? (
        <AboutSectionSkeleton />
      ) : (
        <AboutSection
          imagePublicId={artistInfo?.imagePublicId}
          name={artistInfo?.name}
          description={artistInfo?.description ?? ""}
        />
      )}
    </div>
  );
}
