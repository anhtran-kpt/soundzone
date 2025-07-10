"use client";

import {
  Button,
  Skeleton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { AlbumCard } from "@/components/shared/ui";
import { ArtistDiscography } from "@/features/artist/artist-types";
import { SectionHeading } from "@/new-components/ui/section-heading";
import Link from "next/link";

export function DiscographySection({
  discography,
}: {
  discography: ArtistDiscography;
}) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <SectionHeading>Discography</SectionHeading>
        <Button asChild type="button" variant="link">
          <Link href={`/artists/${artistSlug}/albums`}>Show all</Link>
        </Button>
      </div>
      <Tabs defaultValue="Popular Releases" className="w-full gap-6">
        <TabsList>
          <TabsTrigger value="Popular Releases">Popular Releases</TabsTrigger>
          <TabsTrigger value="Albums">Albums</TabsTrigger>
          <TabsTrigger value="Singles">Singles & EPs</TabsTrigger>
        </TabsList>
        <TabsContent value="Popular Releases">
          <ul
            role="list"
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
          >
            {discography.popularReleases.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="Albums">
          <ul
            role="list"
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
          >
            {discography.albumReleases.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="Singles">
          <ul
            role="list"
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
          >
            {discography.singleAndEpReleases.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </ul>
        </TabsContent>
      </Tabs>

      <Button variant="link" type="button" className="text-white mt-2">
        See more
      </Button>
    </section>
  );
}

export function DiscographySectionSkeleton({ count = 6 }: { count?: number }) {
  const renderSkeletonCards = () => (
    <ul
      role="list"
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
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
  );
}
