import { follow } from "@/entities/artist/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const POST = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  return await follow(artistSlug);
});
