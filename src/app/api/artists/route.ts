import { createArtistAction, getArtistsAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { validateBody } from "@/lib/validation";
import { createArtistSchema } from "@/schemas";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async () => {
  return await getArtistsAction();
});

export const POST = withApiHandler(async (req: NextRequest) => {
  const data = await validateBody(req, createArtistSchema);

  return await createArtistAction(data);
});
