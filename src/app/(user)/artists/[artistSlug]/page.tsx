import { ArtistActions } from "@/components/sections/artist-detail/artist-actions";
import { ArtistBanner } from "@/components/sections/artist-detail/artist-banner";
import { ArtistPopularTracks } from "@/components/sections/artist-detail/artist-popular-tracks";
import { ArtistDiscography } from "@/components/sections/artist-detail/artist-discography";
import { ArtistAbout } from "@/components/sections/artist-detail/artist-about";
import { ArtistOthers } from "@/components/sections/artist-detail/artist-others";

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
      <ArtistOthers artistSlug={artistSlug} />
    </>
  );
}
