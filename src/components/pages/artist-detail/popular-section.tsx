"use client";

import { TrackList, TrackListSkeleton } from "@/components/ui/track-list";
import SectionHeading from "@/components/ui/section-heading";
import { ArtistDetailPage } from "@/lib/types";
import { Button } from "@/components/ui/button";

type PopularSectionProps = {
  popular: ArtistDetailPage["popular"];
};

export const PopularSection = ({
  popular: { tracks, meta },
}: PopularSectionProps) => {
  return (
    <section>
      <SectionHeading heading="Popular" />
      <TrackList tracks={tracks} />
      {meta.hasNext && (
        <Button variant="link" type="button" className="text-white mt-2">
          See more
        </Button>
      )}
    </section>
  );
};

export const PopularSectionSkeleton = () => {
  return (
    <section>
      <SectionHeading heading="Popular" />
      <TrackListSkeleton count={5} />
    </section>
  );
};
