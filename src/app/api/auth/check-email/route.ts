import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { emailSchema } from "@/schemas/common-schema";
import { authService } from "@/services/server/auth-service";
import { NextResponse } from "next/server";

export const POST = withErrorHandler(async (req: Request) => {
  const body = await req.json();

  const validatedData = validateData(emailSchema, body);

  const data = await authService.checkEmailExists(validatedData);

  return NextResponse.json(ApiResponse.success(data), { status: 201 });
});
