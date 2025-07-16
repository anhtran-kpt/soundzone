"use client";

import WithSkeleton from "@/components/features/withSkeleton";
import { ActionsSection } from "@/components/pages/album-detail/actions-section";
import {
  AlbumBannerSection,
  AlbumBannerSectionSkeleton,
} from "@/components/pages/album-detail/album-banner-section";
import { TrackListSection } from "@/components/pages/album-detail/track-list-section";
import { fetchAlbumDetailPage } from "@/lib/tanstack-query/query-fns";
import { pageKeys } from "@/lib/tanstack-query/query-keys";
import { useQuery } from "@tanstack/react-query";

export default function AlbumDetail({
  artistSlug,
  albumSlug,
}: {
  artistSlug: string;
  albumSlug: string;
}) {
  const { data, isLoading } = useQuery({
    queryKey: pageKeys.artistAlbumDetail(artistSlug, albumSlug),
    queryFn: ({ signal }) =>
      fetchAlbumDetailPage(artistSlug, albumSlug, signal),
    enabled: !!artistSlug && !!albumSlug,
  });

  return (
    <>
      <WithSkeleton
        isLoading={isLoading}
        data={data}
        selector={(d) => ({ banner: d.banner })}
        Skeleton={<AlbumBannerSectionSkeleton />}
        Component={AlbumBannerSection}
      />
      {/* <AlbumBannerSection albumSlug={albumSlug} />
      <ActionsSection albumSlug={albumSlug} />
      <TrackListSection albumSlug={albumSlug} /> */}
    </>
  );
}
