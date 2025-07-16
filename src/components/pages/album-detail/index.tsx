"use client";

import { ActionsSection } from "@/components/pages/album-detail/actions-section";
import { AlbumBannerSection } from "@/components/pages/album-detail/album-banner-section";
import { TrackListSection } from "@/components/pages/album-detail/track-list-section";

export default function AlbumDetail({ albumSlug }: { albumSlug: string }) {
  return (
    <>
      <AlbumBannerSection albumSlug={albumSlug} />
      <ActionsSection albumSlug={albumSlug} />
      <TrackListSection albumSlug={albumSlug} />
    </>
  );
}
