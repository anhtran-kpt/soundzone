"use client";

import { BannerSection, BannerSectionSkeleton } from "./banner-section";
import {
  DiscographySection,
  DiscographySectionSkeleton,
} from "./discography-section";
import { AboutSection, AboutSectionSkeleton } from "./about-section";
import { PopularSection, PopularSectionSkeleton } from "./popular-section";
import { ActionsSection, ActionsSectionSkeleton } from "./actions-section";
import { useQuery } from "@tanstack/react-query";
import { pageKeys } from "@/lib/tanstack-query/query-keys";
import { fetchArtistDetailPage } from "@/lib/tanstack-query/query-fns";
import WithSkeleton from "@/components/features/withSkeleton";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
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
      <WithSkeleton
        isLoading={isLoading}
        data={data}
        selector={(d) => ({ actions: d.actions })}
        Skeleton={<ActionsSectionSkeleton />}
        Component={ActionsSection}
      />
      <WithSkeleton
        isLoading={isLoading}
        data={data}
        selector={(d) => ({ popular: d.popular })}
        Skeleton={<PopularSectionSkeleton />}
        Component={PopularSection}
      />
      <WithSkeleton
        isLoading={isLoading}
        data={data}
        selector={(d) => ({ discography: d.discography })}
        Skeleton={<DiscographySectionSkeleton />}
        Component={DiscographySection}
      />
      <WithSkeleton
        isLoading={isLoading}
        data={data}
        selector={(d) => ({ about: d.about })}
        Skeleton={<AboutSectionSkeleton />}
        Component={AboutSection}
      />
    </>
  );
}
