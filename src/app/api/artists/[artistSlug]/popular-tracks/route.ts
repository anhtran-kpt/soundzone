import { NextRequest } from "next/server";
import { withApiHandler } from "@/lib/api/api-handler";
import { getArtistPopularTracks } from "@/features/artist/artist-actions";
import { parsePaginationParams } from "@/lib/utils";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;
  const paginationParams = parsePaginationParams(req);

  return await getArtistPopularTracks(artistSlug, paginationParams);
});
