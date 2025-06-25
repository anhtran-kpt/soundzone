import { ApiResponse } from "@/lib/api/api-response";
import { withErrorHandler } from "@/lib/api-handler";
import { createGenreSchema } from "@/lib/validations";
import { validateData } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { createGenre, getAllGenres } from "@/lib/services/genre";

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
