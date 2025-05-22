import { signInSchema } from "@/schemas";
import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { validateData } from "@/lib/api/server/validate-data";
import { NextRequest, NextResponse } from "next/server";
import { authActions } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(signInSchema, body);

  const user = await authActions.signIn(validatedData);

  return NextResponse.json(ApiResponse.success(user), { status: 200 });
});
