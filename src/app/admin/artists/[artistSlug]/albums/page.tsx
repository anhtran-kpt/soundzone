import { DataTable } from "@/components/common/data-table";
import { columns } from "@/components/features/album/columns";
import albumActions from "@/actions/album";

export default async function ArtistAlbumsPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;
  const data = await albumActions.getByArtistSlug(artistSlug);

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
