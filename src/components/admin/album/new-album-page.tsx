"use client";

import { ArtistBanner } from "@/components/shared/ui";
import { useGetArtistBySlug } from "@/hooks";
import { AlbumForm } from "./album-form";
import { notFound } from "next/navigation";

export const NewAlbumPage = ({ artistSlug }: { artistSlug: string }) => {
  const { data: artist, isError, error } = useGetArtistBySlug(artistSlug);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!artist) {
    return notFound();
  }

  return (
    <>
      <section>
        <ArtistBanner artist={artist} />
      </section>
      <section>
        <AlbumForm artist={artist} />
      </section>
    </>
  );
};
