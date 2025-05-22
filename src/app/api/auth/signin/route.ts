import { signInSchema } from "@/schemas";
import { ApiResponse } from "@/lib/api-config/server/api-response";
import { withErrorHandler } from "@/lib/api-config/server/error-handler";
import { validateData } from "@/lib/api-config/server/validate-data";
import { NextRequest, NextResponse } from "next/server";
import { signIn } from "@/actions";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(signInSchema, body);

  const user = await signIn(validatedData);

  return NextResponse.json(ApiResponse.success(user), { status: 200 });
});
