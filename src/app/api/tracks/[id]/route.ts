import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { getTrackById } from "@/lib/services/track";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler(
  async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const track = await getTrackById(id);

    return NextResponse.json(ApiResponse.success(track), { status: 200 });
  }
);

// export const PATCH = withErrorHandler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const body = await req.json();
//     const { slug } = await params;

//     const validatedData = validateData(updateTrackSchema, body);

//     const newTrack = await trackService.update(slug, validatedData);

//     return NextResponse.json(ApiResponse.success(newTrack), { status: 200 });
//   }
// );

// export const DELETE = withErrorHandler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const { slug } = await params;

//     await trackService.delete(slug);

//     return NextResponse.json(ApiResponse.success(null), { status: 200 });
//   }
// );
