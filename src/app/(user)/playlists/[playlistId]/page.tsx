"use server";

import { PlaylistDetail } from "@/components/user/playlist/playlist-detail";
import { getQueryClient } from "@/lib/tanstack-query/get-query-client";
import { prefetchPlaylist } from "@/lib/prefetchers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page({
  params,
}: {
  params: Promise<{ playlistId: string }>;
}) {
  const { playlistId } = await params;

  const qc = getQueryClient();

  await prefetchPlaylist(qc, playlistId);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <PlaylistDetail playlistId={playlistId} />
    </HydrationBoundary>
  );
}
