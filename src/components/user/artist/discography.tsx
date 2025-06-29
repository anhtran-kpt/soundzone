"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { AlbumCard } from "@/components/shared/ui";

export function Discography({ popularRelease, albumsByType }) {
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
          {popularRelease?.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="Albums">
        <ul
          role="list"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
        >
          {albumsByType.album?.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="Singles">
        <ul
          role="list"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
        >
          {albumsByType.single?.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
