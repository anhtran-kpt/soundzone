import { ApiResponse } from "@/lib/api/api-response";
import { withErrorHandler } from "@/lib/api/with-api-response";
import { NextRequest, NextResponse } from "next/server";
import { getAllTracksByArtistSlug } from "@/lib/services/track";

export const GET = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const { slug } = await params;
    const tracks = await getAllTracksByArtistSlug(slug);

    return NextResponse.json(ApiResponse.success(tracks), { status: 200 });
  }
);
