"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeading from "@/components/ui/section-heading";
import { NavLink } from "@/components/features/nav-link";
import { useDiscography } from "@/entities/artist/queries";
import ErrorMessage from "../../features/error-message";
import { AlbumGrid, AlbumGridSkeleton } from "@/components/features/album-grid";

export const ArtistDiscography = ({ artistSlug }: { artistSlug: string }) => {
  const { data, status, error } = useDiscography(artistSlug);

  if (status === "pending") {
    return <ArtistDiscographySkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  const availableTabs = [
    { key: "popular", label: "Popular", data: data.popularReleases },
    { key: "albums", label: "Albums", data: data.albumReleases },
    { key: "singles", label: "Singles & EPs", data: data.singleAndEpReleases },
  ].filter((tab) => tab.data && tab.data.length > 0);

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
            <AlbumGrid albums={tab.data} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export function ArtistDiscographySkeleton() {
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
          <AlbumGridSkeleton count={5} />
        </TabsContent>
        <TabsContent value="Albums">
          <AlbumGridSkeleton count={5} />
        </TabsContent>
        <TabsContent value="Singles">
          <AlbumGridSkeleton count={5} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
