import { createAlbumAction, getAlbumsAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { validateBody } from "@/lib/validation";
import { createAlbumInputSchema } from "@/schemas";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async () => {
  return await getAlbumsAction();
});

export const POST = withApiHandler(async (req: NextRequest) => {
  const data = await validateBody(req, createAlbumInputSchema);

  const album = await createAlbumAction(data);

  return { album };
});
