import { createArtistAction, getArtistsAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";
import { validateBody } from "@/lib/validation";
import { createArtistSchema } from "@/schemas";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async () => {
  const data = await getArtistsAction();

  return data;
});

export const POST = withApiHandler(async (req: NextRequest) => {
  const data = await validateBody(req, createArtistSchema);

  const artist = await createArtistAction(data);

  return { artist };
});
