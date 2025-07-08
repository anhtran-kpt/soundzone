import { NextRequest } from "next/server";
import { withApiHandler } from "@/lib/api/api-handler";
import { getArtistAction } from "@/app/actions";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistId } = await params;

  return await getArtistAction(artistId);
});
