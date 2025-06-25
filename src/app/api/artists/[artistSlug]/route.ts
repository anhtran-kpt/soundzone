import { NextRequest } from "next/server";
import { getArtistBySlug } from "@/lib/services/artist";
import withApiResponse from "@/lib/api-handler";

export const GET = withApiResponse(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  const artist = await getArtistBySlug(artistSlug);

  return { data: artist };
});
