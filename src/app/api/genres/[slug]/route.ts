import { genreActions } from "@/actions";
import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const { slug } = await params;

    const genre = await genreActions.getBySlug(slug);

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

export const DELETE = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const { slug } = await params;

    await genreActions.delete(slug);

    return NextResponse.json(ApiResponse.success(null), { status: 200 });
  }
);
