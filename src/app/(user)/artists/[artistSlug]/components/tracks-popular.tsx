import { CldImage } from "next-cloudinary";
import { Explicit } from "@/components/shared";
import { useFetchTracksByArtistSlug } from "@/hooks/use-query/track";

export default function TracksPopular({ artistSlug }: { artistSlug: string }) {
  const {
    data: tracks,
    isError,
    error,
  } = useFetchTracksByArtistSlug(artistSlug, { limit: 5 });

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!tracks) {
    return <div>No tracks found.</div>;
  }

  console.log(tracks);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Popular</h2>
      <ul role="list" className="flex flex-col gap-4">
        {tracks.map((track, index) => (
          <li key={track.id}>
            <div className="flex items-center gap-6">
              <span className="text-base font-medium text-muted-foreground text-right w-4">
                {index + 1}
              </span>
              <div className="flex items-center gap-2">
                <div className="relative size-12">
                  <CldImage
                    src={
                      albums.find((album) => album.id === track.albumId)
                        ?.coverPublicId ?? ""
                    }
                    alt={
                      albums.find((album) => album.id === track.albumId)
                        ?.title ?? ""
                    }
                    fill
                    className="rounded-md"
                    sizes="160px"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-medium">{track.title}</h3>
                  <div className="flex items-center gap-1">
                    {!track.isExplicit && <Explicit />}
                    <span className="text-sm text-muted-foreground">
                      {track.artists
                        .map((artist) => artist.artist.name)
                        .join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
