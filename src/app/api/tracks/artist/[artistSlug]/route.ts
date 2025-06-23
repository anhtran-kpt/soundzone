import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
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
