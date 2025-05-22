import { createGenreSchema } from "@/schemas";
import { ApiResponse } from "@/lib/api-config/server/api-response";
import { withErrorHandler } from "@/lib/api-config/server/error-handler";
import { validateData } from "@/lib/api-config/server/validate-data";
import { NextRequest, NextResponse } from "next/server";
import { createGenre, getAllGenres } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createGenreSchema, body);

  await createGenre(validatedData);

  return NextResponse.json(ApiResponse.success(null), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const genres = await getAllGenres();

  return NextResponse.json(ApiResponse.success(genres), { status: 200 });
});
