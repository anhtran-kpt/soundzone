"use client";

import { ArtistBanner } from "@/components/shared/ui";
import { DiscographySection } from "@/new-components/sections/artist-detail/discography-section";
import { AboutSection } from "@/new-components/sections/artist-detail/about-section";
import { PopularSection } from "@/new-components/sections/artist-detail/popular-section";
import { ActionsSection } from "@/new-components/sections/artist-detail/actions-section";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  return (
    <>
      <ArtistBanner artistSlug={artistSlug} />
      <ActionsSection artistSlug={artistSlug} />
      <PopularSection artistSlug={artistSlug} />
      <DiscographySection artistSlug={artistSlug} />
      <AboutSection artistSlug={artistSlug} />
    </>
  );
}
