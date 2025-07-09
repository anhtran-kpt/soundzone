"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { AlbumCard } from "@/components/shared/ui";
import { ArtistDiscography } from "@/features/artist/artist-types";

export function Discography({
  discography,
}: {
  discography: ArtistDiscography;
}) {
  return (
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
  );
}
