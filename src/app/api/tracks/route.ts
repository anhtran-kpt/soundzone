import { ApiResponse } from "@/lib/api/api-response";
import { withErrorHandler } from "@/lib/api/with-api-response";
import { NextResponse } from "next/server";
import { getAllTracks } from "@/lib/services/track";

// export const POST = withErrorHandler(async (req: NextRequest) => {
//   const body = await req.json();

//   const validatedData = validateData(createTrackSchema, body);

//   const newTrack = await createTrack(validatedData);

//   return NextResponse.json(ApiResponse.success(newTrack), { status: 200 });
// });

export const GET = withErrorHandler(async () => {
  const tracks = await getAllTracks();

  return NextResponse.json(ApiResponse.success(tracks), { status: 200 });
});
