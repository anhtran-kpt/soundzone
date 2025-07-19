import { ArtistBanner } from "@/components/sections/artist-banner";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  return (
    <>
      <ArtistBanner artistSlug={artistSlug} />
    </>
  );
}
