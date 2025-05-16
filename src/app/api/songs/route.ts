import { createSongSchema } from "@/schemas";
import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { NextRequest, NextResponse } from "next/server";
import { songService } from "@/services/server";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createSongSchema, body);

  const newSong = await songService.create(validatedData);

  return NextResponse.json(ApiResponse.success(newSong), { status: 200 });
});

export const GET = withErrorHandler(async () => {
  const songs = await songService.getAll();

  return NextResponse.json(ApiResponse.success(songs), { status: 200 });
});
