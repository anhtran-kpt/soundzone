"use client";

import { ActionsSection } from "@/new-components/sections/album-detail/actions-section";

export default function AlbumDetail({ albumSlug }: { albumSlug: string }) {
  return (
    <>
      <ActionsSection albumSlug={albumSlug} />
    </>
  );
}
