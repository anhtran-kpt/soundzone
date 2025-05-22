import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { albumActions } from "@/actions";

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
