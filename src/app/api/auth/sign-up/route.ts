import { ApiResponse } from "@/lib/api/server/api-response";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { userSchema } from "@/lib/validations";
import { validateData } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { signUpAction } from "@/app/actions/user";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(userSchema, body);

  const user = await signUpAction(validatedData);

  return NextResponse.json(ApiResponse.success(user), { status: 200 });
});
