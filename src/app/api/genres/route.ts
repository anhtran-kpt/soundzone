import { createGenreSchema } from "@/features/genre/schemas";
import { genreService } from "@/features/genre/services/server";
import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { NextRequest, NextResponse } from "next/server";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createGenreSchema, body);

  const newGenre = await genreService.create(validatedData);

  return NextResponse.json(ApiResponse.success(newGenre), { status: 200 });
});

export const GET = withErrorHandler(async (req: NextRequest) => {
  const genres = await genreService.getAll();

  return NextResponse.json(ApiResponse.success(genres), { status: 200 });
});
