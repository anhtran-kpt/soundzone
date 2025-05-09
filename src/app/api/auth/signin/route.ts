import { signInSchema } from "@/features/auth/schemas";
import { authService } from "@/features/auth/services/server";
import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { NextRequest, NextResponse } from "next/server";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(signInSchema, body);

  const user = await authService.signIn(validatedData);

  return NextResponse.json(ApiResponse.success(user), { status: 200 });
});
