"use client";

import SectionHeading from "@/components/ui/section-heading";
import { usePopularTracks } from "@/entities/artist/queries";
import ErrorMessage from "../features/error-message";
import { TrackGrid } from "../features/track-grid";
import { TrackListSkeleton } from "../ui/track-list";

export const ArtistPopularTracks = ({ artistSlug }: { artistSlug: string }) => {
  const { data, status, error } = usePopularTracks(artistSlug);

  if (status === "pending") {
    return <ArtistPopularTracksSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <SectionHeading heading="Popular" />
      <TrackGrid type="popular" tracks={data} />
    </section>
  );
};

export const ArtistPopularTracksSkeleton = () => {
  return (
    <section>
      <SectionHeading heading="Popular" />
      <TrackListSkeleton count={5} />
    </section>
  );
};
