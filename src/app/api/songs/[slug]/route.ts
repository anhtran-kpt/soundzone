// import { ApiResponse } from "@/lib/server/api-response";
// import { withErrorHandler } from "@/lib/server/error-handler";
// import { validateData } from "@/lib/server/validate-data";
// import { updateSongSchema } from "@/schemas";
// import { songService } from "@/services/server";
// import { NextRequest, NextResponse } from "next/server";

// export const GET = withErrorHandler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const { slug } = await params;

//     const song = await songService.getBySlug(slug);

//     return NextResponse.json(ApiResponse.success(song), { status: 200 });
//   }
// );

// export const PATCH = withErrorHandler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const body = await req.json();
//     const { slug } = await params;

//     const validatedData = validateData(updateSongSchema, body);

//     const newSong = await songService.update(slug, validatedData);

//     return NextResponse.json(ApiResponse.success(newSong), { status: 200 });
//   }
// );

// export const DELETE = withErrorHandler(
//   async (
//     req: NextRequest,
//     { params }: { params: Promise<{ slug: string }> }
//   ) => {
//     const { slug } = await params;

//     await songService.delete(slug);

//     return NextResponse.json(ApiResponse.success(null), { status: 200 });
//   }
// );
