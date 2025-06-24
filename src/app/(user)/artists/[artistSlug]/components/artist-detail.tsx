"use client";

import CustomLink from "@/components/common/custom-link";
import TracksPopular from "./tracks-popular";
import ArtistBanner from "./artist-banner";
import { useFetchArtistBySlug } from "@/hooks/use-query/artist";
import { notFound } from "next/navigation";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const { data, isError, error } = useFetchArtistBySlug(artistSlug);
  console.log("data", data?.data);

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (data) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <ArtistBanner artist={artist} />
      <TracksPopular artistSlug={artistSlug} />
      {/* <section className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Top Tracks</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {tracks?.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </section> */}
      <section>
        <h2 className="text-2xl font-bold mb-2">About</h2>
        <p className="text-sm text-muted-foreground">
          {artist.description || "No description available"}
        </p>
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-2">Discography</h2>
          <CustomLink href={`/artists/${artist.slug}/discography`}>
            Show all
          </CustomLink>
        </div>
        {/* <Discography albums={artist.albums} /> */}
      </section>
    </div>
  );
}
