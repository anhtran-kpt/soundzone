import { NextRequest } from "next/server";
import { withApiHandler } from "@/lib/api-handler";
import { getArtistBySlugAction } from "@/app/actions";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  return await getArtistBySlugAction(artistSlug);
});
