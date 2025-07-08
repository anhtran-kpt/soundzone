import { createGenreAction, getGenresAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { validateBody } from "@/lib/validation";
import { genreSchema } from "@/schemas";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async () => {
  return await getGenresAction();
});

export const POST = withApiHandler(async (req: NextRequest) => {
  const { name } = await validateBody(req, genreSchema);

  return await createGenreAction(name);
});
