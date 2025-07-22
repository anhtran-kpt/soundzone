import { getDiscography } from "@/entities/album/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { albumSlug, artistSlug } = await params;

  const data = await getDiscography();
});
