import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { artistSchema } from "@/schemas";
import { artistService } from "@/services/server/artist";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const { slug } = await params;

    const artist = await artistService.getBySlug(slug);

    return NextResponse.json(ApiResponse.success(artist), { status: 200 });
  }
);

export const PATCH = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const body = await req.json();
    const { slug } = await params;

    const validatedData = validateData(artistSchema, body);

    const newArtist = await artistService.update(slug, validatedData);

    return NextResponse.json(ApiResponse.success(newArtist), { status: 200 });
  }
);

export const DELETE = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const { slug } = await params;

    await artistService.delete(slug);

    return NextResponse.json(ApiResponse.success(null), { status: 200 });
  }
);
