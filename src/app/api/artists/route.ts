import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { createArtistSchema } from "@/lib/validations";
import { validateData } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { createArtist, getAllArtists } from "@/lib/services/artist";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createArtistSchema, body);

  const artist = await createArtist(validatedData);

  return NextResponse.json(ApiResponse.success(artist), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const artists = await getAllArtists();

  return NextResponse.json(ApiResponse.success(artists), { status: 200 });
});
