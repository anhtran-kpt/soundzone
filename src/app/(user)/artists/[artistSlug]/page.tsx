"use client";

// import AlbumCard from "@/components/common/album-card";
import { useParams } from "next/navigation";
import { useArtist } from "@/lib/queries/artist";
import Discography from "@/components/sections/discography";
import CustomLink from "@/components/common/custom-link";
import { ArtistBanner } from "@/components/sections";

export default function ArtistPage() {
  const { artistSlug } = useParams();

  const { data: artist, status } = useArtist(artistSlug as string);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Artist not found</div>;
  }

  console.log(artist);

  return (
    <div className="flex flex-col gap-4">
      <ArtistBanner artist={artist} />
      <section className="mt-12">
        {/* <h2 className="text-2xl font-bold mb-2">Top Tracks</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {artist.tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div> */}
      </section>
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
        <Discography albums={artist.albums} />
        {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {artist.albums.length > 0 ? (
            artist.albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No albums found</p>
          )}
        </div> */}
      </section>
    </div>
  );
}
