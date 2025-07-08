import { ArtistActions } from "@/features/artist";
import { withApiHandler } from "@/lib/api/api-handler";
import { parsePaginationParams } from "@/lib/utils";
import { validateBody } from "@/lib/validation";
import { createArtistSchema } from "@/features/artist";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest) => {
  const searchParams = parsePaginationParams(req);

  return await ArtistActions.getList(searchParams);
});

// export const POST = withApiHandler(async (req: NextRequest) => {
//   const data = await validateBody(req, createArtistSchema);

//   return await ArtistActions.create(data);
// });
