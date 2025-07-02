"use client";

import { ArtistBanner } from "@/components/shared/ui";
import { useGetArtist } from "@/hooks";
import { AlbumForm } from "./album-form";
import { notFound } from "next/navigation";

export const NewAlbumPage = ({ artistId }: { artistId: string }) => {
  const { data: artist, isError, error } = useGetArtist(artistId);

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
