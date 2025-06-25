import { ApiResponse } from "@/lib/api/api-response";
import { withErrorHandler } from "@/lib/api-handler";
import { createAlbumSchema } from "@/lib/validations";
import { validateData } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { createAlbum, getAllAlbums } from "@/lib/services/album";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createAlbumSchema, body);

  const album = await createAlbum(validatedData);

  return NextResponse.json(ApiResponse.success(album), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const albums = await getAllAlbums();

  return NextResponse.json(ApiResponse.success(albums), { status: 200 });
});
