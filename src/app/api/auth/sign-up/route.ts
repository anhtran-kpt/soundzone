import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { signUpRequestSchema } from "@/schemas";
import { validateData } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { userActions } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(signUpRequestSchema, body);

  const user = await userActions.signUp(validatedData);

  return NextResponse.json(ApiResponse.success(user), { status: 200 });
});
