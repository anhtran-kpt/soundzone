"use server";

import { PlaylistBanner } from "@/components/sections/playlist-detail/playlist-banner";
import { PlaylistTrackAdding } from "@/components/sections/playlist-detail/playlist-track-adding";

export default async function Page({
  params,
}: {
  params: Promise<{ userSlug: string; playlistSlug: string }>;
}) {
  const { playlistSlug, userSlug } = await params;

  return (
    <>
      <PlaylistBanner userSlug={userSlug} playlistSlug={playlistSlug} />
      <PlaylistTrackAdding playlistSlug={playlistSlug} />
    </>
  );
}
