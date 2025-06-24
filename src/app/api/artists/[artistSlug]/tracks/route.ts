import { parsePaging } from "@/lib/helpers";
import { getTracksByArtistSlug } from "@/lib/services/track";
import withApiResponse from "@/lib/api/with-api-response";
import { NextRequest } from "next/server";

export const GET = withApiResponse(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;
  const { offset, limit } = parsePaging(req.nextUrl.searchParams);

  const { items, total } = await getTracksByArtistSlug(artistSlug, {
    offset,
    limit,
  });

  return {
    data: items,
    meta: {
      offset,
      limit,
      total,
    },
  };
});
