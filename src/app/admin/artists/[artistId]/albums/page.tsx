import { DataTable } from "@/components/ui/data-table";
import { AlbumColumns } from "@/components/admin/album";

export default async function ArtistAlbumsPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;
  // const data = await getAlbumsByArtistSlug(artistSlug);
  return null;

  // return (
  //   <div>
  //     <DataTable columns={AlbumColumns} data={data} />
  //   </div>
  // );
}
