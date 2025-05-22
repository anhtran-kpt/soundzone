// import { createSongSchema } from "@/schemas";
// import { ApiResponse } from "@/lib/api/server/api-response";
// import { withErrorHandler } from "@/lib/api/server/error-handler";
// import { validateData } from "@/lib/api/server/validate-data";
// import { NextRequest, NextResponse } from "next/server";
// import { createSong, getAllSongs } from "@/actions";

// export const POST = withErrorHandler(async (req: NextRequest) => {
//   const body = await req.json();

//   const validatedData = validateData(createSongSchema, body);

//   const newSong = await createSong(validatedData);

//   return NextResponse.json(ApiResponse.success(newSong), { status: 200 });
// });

// export const GET = withErrorHandler(async () => {
//   const songs = await getAllSongs();

//   return NextResponse.json(ApiResponse.success(songs), { status: 200 });
// });
