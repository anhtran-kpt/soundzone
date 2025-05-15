import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { signUpSchema } from "@/schemas";
import { authService } from "@/services/server";
import { NextResponse } from "next/server";

export const POST = withErrorHandler(async (req: Request) => {
  const body = await req.json();

  const validatedData = validateData(signUpSchema, body);

  const newUser = await authService.signUp(validatedData);

  return NextResponse.json(ApiResponse.success(newUser), { status: 201 });
});
