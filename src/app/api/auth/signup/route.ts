import { errorHandler } from "@/lib/api/error-handler";
import { createSuccessResponse } from "@/lib/api/response-handler";
import { authService } from "@/services/auth.service";
import { signUpSchema } from "@/types/auth.type";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = signUpSchema.parse(body);

    const user = authService.signUp(validatedData);

    return createSuccessResponse(
      {
        message: "Signed up successfully",
        user,
      },
      201
    );
  } catch (error) {
    return errorHandler(error);
  }
}
