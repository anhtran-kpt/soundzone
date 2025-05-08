import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { genreSchema } from "@/schemas/genre-schema";
import { genreService } from "@/services/server/genre-service";
import { NextResponse } from "next/server";

export const POST = withErrorHandler(async (req: Request) => {
  const body = await req.json();

  const validatedData = validateData(genreSchema, body);

  const newGenre = await genreService.createGenre(validatedData);

  return NextResponse.json(ApiResponse.success(newGenre), { status: 201 });
});

// export const GET = withErrorHandler(async (req: Request) => {
//   const body = await req.json();

//   const validatedData = validateData(body, genreSchema);

//   const genre = await genreService.createGenre(validatedData);

//   return NextResponse.json(ApiResponse.success(genre), { status: 200 });
// });
