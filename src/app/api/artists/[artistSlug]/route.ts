import { NextRequest } from "next/server";
import { withApiHandler } from "@/lib/api/api-handler";
import { getArtistInfo } from "@/entities/artist/actions/get-info";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  return await getArtistInfo(artistSlug);
});
