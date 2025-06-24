import withApiResponse from "@/lib/api/with-api-response";
import { parsePaging } from "@/lib/helpers";
import { NextRequest } from "next/server";
import { getAlbumsByArtistSlug } from "@/lib/services/album";

export const GET = withApiResponse(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  const { offset, limit } = parsePaging(req.nextUrl.searchParams);

  const { items, total } = await getAlbumsByArtistSlug(artistSlug, {
    offset,
    limit,
  });

  return {
    data: items,
    total,
    offset,
    limit,
  };
});
