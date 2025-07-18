"use client";

import { BannerSection, BannerSectionSkeleton } from "./banner-section";
import {
  DiscographySection,
  DiscographySectionSkeleton,
} from "./discography-section";
import { AboutSection, AboutSectionSkeleton } from "./about-section";
import {
  PopularTracksSection,
  PopularTracksSectionSkeleton,
} from "./popular-tracks-section";
import { ActionsSection, ActionsSectionSkeleton } from "./actions-section";
import { useQuery } from "@tanstack/react-query";
import { pageKeys } from "@/lib/tanstack-query/query-keys";
import WithSkeleton from "@/components/features/withSkeleton";
import fetcher from "@/lib/api/fetcher";
import { ArtistDetailPage } from "@/lib/types";
import { endpoints } from "@/lib/api/endpoints";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const { data, isLoading } = useQuery({
    queryKey: pageKeys.artistDetail(artistSlug),
    queryFn: fetcher<ArtistDetailPage>(endpoints.page.artistDetail(artistSlug)),
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
        selector={(d) => ({ popularTracks: d.popularTracks })}
        Skeleton={<PopularTracksSectionSkeleton />}
        Component={PopularTracksSection}
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
