import { createGenreSchema } from "@/schemas";
import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { validateData } from "@/lib/api/server/validate-data";
import { NextRequest, NextResponse } from "next/server";
import { genreActions } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createGenreSchema, body);

  await genreActions.create(validatedData);

  return NextResponse.json(ApiResponse.success(null), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const genres = await genreActions.getAll();

  return NextResponse.json(ApiResponse.success(genres), { status: 200 });
});
