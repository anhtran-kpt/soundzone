"use client";

import { ActionsSection } from "@/new-components/sections/album-detail/actions-section";
import { AlbumBannerSection } from "@/new-components/sections/album-detail/album-banner-section";
import { TrackListSection } from "@/new-components/sections/album-detail/track-list-section";

export default function AlbumDetail({ albumSlug }: { albumSlug: string }) {
  return (
    <>
      <AlbumBannerSection albumSlug={albumSlug} />
      <ActionsSection albumSlug={albumSlug} />
      <TrackListSection albumSlug={albumSlug} />
    </>
  );
}
