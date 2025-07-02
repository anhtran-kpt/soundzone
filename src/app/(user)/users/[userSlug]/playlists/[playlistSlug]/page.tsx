"use server";

import { PlaylistDetail } from "@/components/user/playlist/playlist-detail";
import { getQueryClient } from "@/lib/get-query-client";
import { prefetchPlaylistBySlug } from "@/lib/prefetchers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page({
  params,
}: {
  params: Promise<{ playlistSlug: string }>;
}) {
  const { playlistSlug } = await params;

  const qc = getQueryClient();
  console.log(playlistSlug);

  await prefetchPlaylistBySlug(qc, playlistSlug);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <PlaylistDetail playlistSlug={playlistSlug} />
    </HydrationBoundary>
  );
}
