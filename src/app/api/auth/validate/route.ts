import { ApiResponse } from "@/lib/server/api-response";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { emailSchema } from "@/schemas/common-schema";
import { authService } from "@/services/server/auth-service";
import { NextResponse } from "next/server";

export const GET = withErrorHandler(async (req: Request) => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  const validatedData = validateData(emailSchema, email);

  const data = await authService.validateEmail(validatedData);

  return NextResponse.json(ApiResponse.success(data), { status: 200 });
});
