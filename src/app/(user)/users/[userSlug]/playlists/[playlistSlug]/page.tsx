"use server";

import { PlaylistBanner } from "@/components/sections/playlist-detail/playlist-banner";

export default async function Page({
  params,
}: {
  params: Promise<{ userSlug: string; playlistSlug: string }>;
}) {
  const { playlistSlug, userSlug } = await params;

  return (
    <>
      <PlaylistBanner userSlug={userSlug} playlistSlug={playlistSlug} />
    </>
  );
}
