import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { getTracksByArtistSlug } from "@/lib/services/track";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler(
  async (req: NextRequest, { params }: { params: { artistSlug: string } }) => {
    const artistSlug = params.artistSlug;

    if (!artistSlug) {
      return NextResponse.json(
        ApiResponse.error("INVALID_REQUEST", "Artist slug is required"),
        {
          status: 400,
        }
      );
    }

    const limit = req.nextUrl.searchParams.get("limit");
    const page = req.nextUrl.searchParams.get("page");

    const tracks = await getTracksByArtistSlug(artistSlug, {
      limit: limit ? parseInt(limit) : undefined,
      page: page ? parseInt(page) : 1,
    });

    return NextResponse.json(ApiResponse.success(tracks), { status: 200 });
  }
);
