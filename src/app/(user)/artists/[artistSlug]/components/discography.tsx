"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlbumCard from "@/components/shared/album-card";
import { useMemo } from "react";
import { useAlbumsByArtistSlug } from "@/hooks/use-query/album";
import { notFound } from "next/navigation";

export default function Discography({ artistSlug }: { artistSlug: string }) {
  const { data, isError, error } = useAlbumsByArtistSlug(artistSlug, {
    offset: 0,
    limit: 5,
  });

  const albums = data?.data;

  const albumsData = useMemo(() => {
    return albums?.filter((album) => album.releaseType === "ALBUM");
  }, [albums]);

  const singlesData = useMemo(() => {
    return albums?.filter((album) => album.releaseType === "SINGLE");
  }, [albums]);

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!albums) {
    return notFound();
  }

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
          {albumsData?.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="Albums">
        <ul
          role="list"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
        >
          {albumsData?.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="Singles">
        <ul
          role="list"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
        >
          {singlesData?.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
