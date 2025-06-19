"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlbumCard from "../shared/album-card";
import { FullAlbum } from "@/lib/types";

export default function Discography({ albums }: { albums: FullAlbum[] }) {
  return (
    <Tabs defaultValue="Popular Releases" className="w-full">
      <TabsList>
        <TabsTrigger value="Popular Releases">Popular Releases</TabsTrigger>
        <TabsTrigger value="Albums">Albums</TabsTrigger>
        <TabsTrigger value="Singles">Singles</TabsTrigger>
      </TabsList>
      <TabsContent value="Popular Releases">
        <ul
          role="list"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="Albums">Albums</TabsContent>
      <TabsContent value="Singles">Singles</TabsContent>
    </Tabs>
  );
}
