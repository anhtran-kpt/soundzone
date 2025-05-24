import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { createArtistSchema } from "@/schemas";
import { validateData } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { artistActions } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createArtistSchema, body);

  const artist = await artistActions.create(validatedData);

  return NextResponse.json(ApiResponse.success(artist), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const artists = await artistActions.getAll();

  return NextResponse.json(ApiResponse.success(artists), { status: 200 });
});
