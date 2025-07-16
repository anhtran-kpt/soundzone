import ArtistDetail from "@/components/pages/artist-detail";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  return <ArtistDetail artistSlug={artistSlug} />;
}
