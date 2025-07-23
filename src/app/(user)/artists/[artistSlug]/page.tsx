import { ArtistActions } from "@/components/sections/artist-actions";
import { ArtistBanner } from "@/components/sections/artist-banner";
import { ArtistPopularTracks } from "@/components/sections/artist-popular-tracks";
import { ArtistDiscography } from "@/components/sections/artist-discography";
import { ArtistAbout } from "@/components/sections/artist-about";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  return (
    <>
      <ArtistBanner artistSlug={artistSlug} />
      <ArtistActions artistSlug={artistSlug} />
      <ArtistPopularTracks artistSlug={artistSlug} />
      <ArtistDiscography artistSlug={artistSlug} />
      <ArtistAbout artistSlug={artistSlug} />
    </>
  );
}
