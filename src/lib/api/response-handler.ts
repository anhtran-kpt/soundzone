import { NextResponse } from "next/server";

export function createSuccessResponse(data: any, status = 200) {
  return NextResponse.json(data, { status });
}
