import AlbumDetail from "@/components/pages/album-detail";

export default async function AlbumDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string; albumSlug: string }>;
}) {
  const { artistSlug, albumSlug } = await params;

  return <AlbumDetail artistSlug={artistSlug} albumSlug={albumSlug} />;
}
