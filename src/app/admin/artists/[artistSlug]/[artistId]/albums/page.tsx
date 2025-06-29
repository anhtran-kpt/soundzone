import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/admin/features/album/columns";
import { getAlbumsByArtistId } from "@/lib/services/album";

export default async function ArtistAlbumsPage({
  params,
}: {
  params: Promise<{ artistId: string }>;
}) {
  const { artistId } = await params;
  const data = await getAlbumsByArtistId(artistId);

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
