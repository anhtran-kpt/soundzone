import { ApiResponse } from "@/lib/api/api-response";
import { withErrorHandler } from "@/lib/api-handler";
import { getAlbumBySlug } from "@/lib/services/album";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const { slug } = await params;

    const album = await getAlbumBySlug(slug);

    return NextResponse.json(ApiResponse.success(album), { status: 200 });
  }
);

// export const PATCH = withErrorHand ler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const body = await req.json();
//     const { slug } = await params;

//     const validatedData = validateData(albumSchema, body);

//     const newalbum = await updateAlbum(slug, validatedData);

//     return NextResponse.json(ApiResponse.success(newalbum), { status: 200 });
//   }
// );

// export const DELETE = withErrorHandler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const { slug } = await params;

//     await albumService.delete(slug);

//     return NextResponse.json(ApiResponse.success(null), { status: 200 });
//   }
// );
