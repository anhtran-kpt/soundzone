import { createAlbumSchema } from "@/schemas";
import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { NextRequest, NextResponse } from "next/server";
import { createAlbum, getAllAlbums } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createAlbumSchema, body);

  await createAlbum(validatedData);

  return NextResponse.json(ApiResponse.success(null), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const albums = await getAllAlbums();

  return NextResponse.json(ApiResponse.success(albums), { status: 200 });
});
