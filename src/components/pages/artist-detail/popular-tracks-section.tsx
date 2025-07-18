"use client";

import { TrackList, TrackListSkeleton } from "@/components/ui/track-list";
import SectionHeading from "@/components/ui/section-heading";
import { ArtistDetailPage } from "@/lib/types";

type PopularTracksSectionProps = {
  popularTracks: ArtistDetailPage["popularTracks"];
};

export const PopularTracksSection = ({
  popularTracks,
}: PopularTracksSectionProps) => {
  return (
    <section>
      <SectionHeading heading="Popular" />
      <TrackList tracks={popularTracks} />
    </section>
  );
};

export const PopularTracksSectionSkeleton = () => {
  return (
    <section>
      <SectionHeading heading="Popular" />
      <TrackListSkeleton count={5} />
    </section>
  );
};
