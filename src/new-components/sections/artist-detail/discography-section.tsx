"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { AlbumList } from "@/new-components/ui/album-list";
import { useMemo } from "react";
import { Section } from "@/new-components/ui/section";
import { useArtistDiscography } from "@/features/artist/artist-queries";

export function DiscographySection({ artistSlug }: { artistSlug: string }) {
  const { data, isLoading } = useArtistDiscography(artistSlug);

  const availableTabs = useMemo(() => {
    if (!data) return [];

    const tabs = [];

    if (data.popularReleases && data.popularReleases.length > 0) {
      tabs.push({
        key: "Popular Releases",
        label: "Popular Releases",
        data: data.popularReleases,
      });
    }

    if (data.albumReleases && data.albumReleases.length > 0) {
      tabs.push({
        key: "Albums",
        label: "Albums",
        data: data.albumReleases,
      });
    }

    if (data.singleAndEpReleases && data.singleAndEpReleases.length > 0) {
      tabs.push({
        key: "Singles & EPs",
        label: "Singles & EPs",
        data: data.singleAndEpReleases,
      });
    }

    return tabs;
  }, [data]);

  if (isLoading) {
    return <DiscographySectionSkeleton />;
  }

  if (availableTabs.length === 0) {
    return null;
  }

  const defaultTab = availableTabs[0].key;

  return (
    <Section heading="Discography" href={`/artists/${artistSlug}/albums`}>
      <Tabs defaultValue={defaultTab} className="w-full gap-6">
        <TabsList>
          {availableTabs.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {availableTabs.map((tab) => (
          <TabsContent key={tab.key} value={tab.key}>
            <AlbumList albums={tab.data} />
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}

export function DiscographySectionSkeleton({ count = 5 }: { count?: number }) {
  const renderSkeletonCards = () => (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="space-y-2">
          <Skeleton className="w-full aspect-square rounded-md" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </li>
      ))}
    </ul>
  );

  return (
    <Section heading="Discography">
      <Tabs defaultValue="Popular Releases" className="w-full gap-6">
        <TabsList>
          <TabsTrigger value="Popular Releases">Popular Releases</TabsTrigger>
          <TabsTrigger value="Albums">Albums</TabsTrigger>
          <TabsTrigger value="Singles">Singles & EPs</TabsTrigger>
        </TabsList>

        <TabsContent value="Popular Releases">
          {renderSkeletonCards()}
        </TabsContent>
        <TabsContent value="Albums">{renderSkeletonCards()}</TabsContent>
        <TabsContent value="Singles">{renderSkeletonCards()}</TabsContent>
      </Tabs>
    </Section>
  );
}
