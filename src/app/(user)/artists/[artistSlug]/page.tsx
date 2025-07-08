import ArtistDetail from "@/components/page/artist-detail";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  return <ArtistDetail artistSlug={artistSlug} />;
}
