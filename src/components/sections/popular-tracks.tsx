"use client";

import { TrackList, TrackListSkeleton } from "@/components/ui/track-list";
import SectionHeading from "@/components/ui/section-heading";
import { usePopularTracks } from "@/entities/artist/queries";
import ErrorMessage from "../features/error-message";

export const PopularTracks = ({ artistSlug }: { artistSlug: string }) => {
  const { data, isLoading, error } = usePopularTracks(artistSlug);

  if (isLoading) {
    <PopularTracksSkeleton />;
  }

  if (error) {
    <ErrorMessage error={error} />;
  }

  console.log(data);

  return (
    <section>
      <SectionHeading heading="Popular" />
      <TrackList tracks={data} />
    </section>
  );
};

export const PopularTracksSkeleton = () => {
  return (
    <section>
      <SectionHeading heading="Popular" />
      <TrackListSkeleton count={5} />
    </section>
  );
};
