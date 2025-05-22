import { createArtistSchema } from "@/schemas";
import { ApiResponse } from "@/lib/api-config/server/api-response";
import { withErrorHandler } from "@/lib/api-config/server/error-handler";
import { validateData } from "@/lib/api-config/server/validate-data";
import { NextRequest, NextResponse } from "next/server";
import { createArtist, getAllArtists } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createArtistSchema, body);

  await createArtist(validatedData);

  return NextResponse.json(ApiResponse.success(null), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const artists = await getAllArtists();

  return NextResponse.json(ApiResponse.success(artists), { status: 200 });
});
