"use client";

import { BannerSection, BannerSectionSkeleton } from "@/components/shared/ui";
import {
  DiscographySection,
  DiscographySectionSkeleton,
} from "@/new-components/sections/artist-detail/discography-section";
import {
  AboutSection,
  AboutSectionSkeleton,
} from "@/new-components/sections/artist-detail/about-section";
import {
  PopularSection,
  PopularSectionSkeleton,
} from "@/new-components/sections/artist-detail/popular-section";
import {
  ActionsSection,
  ActionsSectionSkeleton,
} from "@/new-components/sections/artist-detail/actions-section";
import { useQuery } from "@tanstack/react-query";
import { pageKeys } from "@/lib/tanstack-query/query-keys";
import { fetchArtistDetailPage } from "@/lib/tanstack-query/query-fns";
import WithSkeleton from "@/new-components/features/withSkeleton";

export default function ArtistDetailPage({
  artistSlug,
}: {
  artistSlug: string;
}) {
  const { data, isLoading } = useQuery({
    queryKey: pageKeys.artistDetail(artistSlug),
    queryFn: ({ signal }) => fetchArtistDetailPage(artistSlug, signal),
    enabled: !!artistSlug,
  });

  return (
    <>
      <WithSkeleton
        isLoading={isLoading}
        data={data}
        selector={(d) => ({ banner: d.banner })}
        Skeleton={<BannerSectionSkeleton />}
        Component={BannerSection}
      />
      {isLoading || !data ? (
        <ActionsSectionSkeleton />
      ) : (
        <ActionsSection actions={data.actions} />
      )}
      {isLoading || !data ? (
        <PopularSectionSkeleton />
      ) : (
        <PopularSection popular={data.popular} />
      )}
      {isLoading || !data ? (
        <DiscographySectionSkeleton />
      ) : (
        <DiscographySection discography={data.discography} />
      )}
      {isLoading || !data ? (
        <AboutSectionSkeleton />
      ) : (
        <AboutSection about={data.about} />
      )}
    </>
  );
}
