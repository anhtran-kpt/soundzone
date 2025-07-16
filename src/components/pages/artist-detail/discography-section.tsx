"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { AlbumList } from "@/components/ui/album-list";
import { useMemo } from "react";
import { ArtistDetailPage } from "@/lib/types";
import SectionHeading from "@/components/ui/section-heading";
import { NavLink } from "@/components/features/nav-link";

type DiscographyProps = {
  discography: ArtistDetailPage["discography"];
};

export const DiscographySection = ({
  discography: {
    popularReleases,
    albumReleases,
    singleAndEpReleases,
    artistSlug,
  },
}: DiscographyProps) => {
  const availableTabs = useMemo(() => {
    return [
      { key: "popular", label: "Popular", data: popularReleases },
      { key: "albums", label: "Albums", data: albumReleases },
      { key: "singles", label: "Singles & EPs", data: singleAndEpReleases },
    ].filter((tab) => tab.data && tab.data.length > 0);
  }, [popularReleases, albumReleases, singleAndEpReleases]);

  if (availableTabs.length === 0) return null;

  const defaultTab = availableTabs[0].key;

  return (
    <section>
      <div className="flex justify-between items-center">
        <SectionHeading heading="Discography" />
        <NavLink href={`/artists/${artistSlug}/discography`}>Show all</NavLink>
      </div>

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
    </section>
  );
};

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
    <section>
      <div className="flex justify-between items-center">
        <SectionHeading heading="Discography" />
        <Skeleton className="h-4 w-6" />
      </div>
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
    </section>
  );
}
