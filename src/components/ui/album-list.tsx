"use client";

import { AlbumInfo } from "@/features/album/album-types";
import { AlbumCard, AlbumCardSkeleton } from "./album-card";

export const AlbumList = ({ albums }: { albums: AlbumInfo[] }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {albums.map((album) => (
        <AlbumCard key={album.slug} album={album} />
      ))}
    </ul>
  );
};

interface AlbumsGridSkeletonProps {
  count?: number;
}

export const AlbumListSkeleton = ({ count = 8 }: AlbumsGridSkeletonProps) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {Array.from({ length: count }).map((_, index) => (
        <AlbumCardSkeleton key={index} />
      ))}
    </ul>
  );
};
