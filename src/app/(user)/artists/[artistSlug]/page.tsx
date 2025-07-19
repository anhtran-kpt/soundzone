import { ArtistBanner } from "@/components/sections/artist-banner";
import { PopularTracks } from "@/components/sections/popular-tracks";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  return (
    <>
      <ArtistBanner artistSlug={artistSlug} />
      <PopularTracks artistSlug={artistSlug} />
    </>
  );
}
