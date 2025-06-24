import { ApiResponse } from "@/lib/api/api-response";
import { withErrorHandler } from "@/lib/api/with-api-response";
import { getGenreBySlug } from "@/lib/services/genre";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const { slug } = await params;

    const genre = await getGenreBySlug(slug);

    return NextResponse.json(ApiResponse.success(genre), { status: 200 });
  }
);

// export const PATCH = withErrorHandler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const body = await req.json();
//     const { slug } = await params;

//     const validatedData = validateData(genreSchema, body);

//     const newGenre = await genreService.update(slug, validatedData);

//     return NextResponse.json(ApiResponse.success(newGenre), { status: 200 });
//   }
// );

// export const DELETE = withErrorHandler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const { slug } = await params;

//     await genreActions.delete(slug);

//     return NextResponse.json(ApiResponse.success(null), { status: 200 });
//   }
// );
