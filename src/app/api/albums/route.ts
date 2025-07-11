import { getAlbumList } from "@/features/album/album-actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { parsePaginationParams } from "@/lib/utils";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest) => {
  const paginationParams = parsePaginationParams(req);

  return await getAlbumList(paginationParams);
});

// export const POST = withApiHandler(async (req: NextRequest) => {
//   const data = await validateBody(req, createAlbumInputSchema);

//   const album = await createAlbumAction(data);

//   return { album };
// });
