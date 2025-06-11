import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { createAlbumRequestSchema } from "@/lib/validations/album";
import { validateData } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { albumActions } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createAlbumRequestSchema, body);

  const album = await albumActions.create(validatedData);

  return NextResponse.json(ApiResponse.success(album), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const albums = await albumActions.getAll();

  return NextResponse.json(ApiResponse.success(albums), { status: 200 });
});
