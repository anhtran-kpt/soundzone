import { createArtistSchema } from "@/schemas";
import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { NextRequest, NextResponse } from "next/server";
import { artistService } from "@/services/server/artist";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createArtistSchema, body);

  const newArtist = await artistService.create(validatedData);

  return NextResponse.json(ApiResponse.success(newArtist), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const artists = await artistService.getAll();

  return NextResponse.json(ApiResponse.success(artists), { status: 200 });
});
