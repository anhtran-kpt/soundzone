import { createGenreAction, getGenresAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";
import { validateBody } from "@/lib/validation";
import { genreSchema } from "@/lib/validations";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async () => {
  return await getGenresAction();
});

export const POST = withApiHandler(async (req: NextRequest) => {
  const genreData = validateBody(req, genreSchema);

  const genre = await createGenreAction(genreData);

  return { genre };
});
