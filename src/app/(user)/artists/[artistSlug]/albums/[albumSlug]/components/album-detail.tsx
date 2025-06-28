"use client";

import Banner from "@/components/shared/banner";
import { useGetAlbumBySlug } from "@/hooks";
import { notFound } from "next/navigation";

export default function AlbumDetail({ albumSlug }: { albumSlug: string }) {
  const { data: album, isError, error } = useGetAlbumBySlug(albumSlug);

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!album) {
    return notFound();
  }

  return (
    <>
      <section>{album.bannerPublicId && <Banner album={album} />}</section>
    </>
  );
}
