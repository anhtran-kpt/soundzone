// import { createTrackSchema } from "@/schemas";
// import { ApiResponse } from "@/lib/api/server/api-response";
// import { withErrorHandler } from "@/lib/api/server/error-handler";
// import { validateData } from "@/lib/api/server/validate-data";
// import { NextRequest, NextResponse } from "next/server";
// import { createTrack, getAllTracks } from "@/actions";

// export const POST = withErrorHandler(async (req: NextRequest) => {
//   const body = await req.json();

//   const validatedData = validateData(createTrackSchema, body);

//   const newTrack = await createTrack(validatedData);

//   return NextResponse.json(ApiResponse.success(newTrack), { status: 200 });
// });

// export const GET = withErrorHandler(async () => {
//   const tracks = await getAllTracks();

//   return NextResponse.json(ApiResponse.success(tracks), { status: 200 });
// });
