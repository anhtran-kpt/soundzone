"use client";

import { ArtistBanner } from "@/components/shared/ui";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import {
  DiscographySection,
  DiscographySectionSkeleton,
} from "@/new-components/sections/artist-detail/discography-section";
import { Button } from "@/components/ui";
import { EllipsisIcon, PauseIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import { useArtistInfo } from "@/features/artist/artist-queries";
import { FollowButton } from "@/new-components/features/follow-button";
import {
  AboutSection,
  AboutSectionSkeleton,
} from "@/new-components/sections/artist-detail/about-section";
import { PopularSection } from "@/new-components/sections/artist-detail/popular-section";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const { data: artistInfo, isLoading: isArtistInfoLoading } =
    useArtistInfo(artistSlug);

  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

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
      <Button variant="link" type="button" className="text-white mt-2">
        See more
      </Button>
      <PopularSection tracks={popularTracks?.data} />
      {isDiscographyLoading || !discography ? (
        <DiscographySectionSkeleton />
      ) : (
        <DiscographySection discography={discography} artistSlug={artistSlug} />
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
