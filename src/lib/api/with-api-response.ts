import { NextResponse, NextRequest } from "next/server";

type RouteHandler = (
  req: NextRequest,
  { params }: { params: Promise<Record<string, string>> }
) => Promise<unknown>;

export default function withApiResponse(handler: RouteHandler) {
  return async (
    req: NextRequest,
    { params }: { params: Promise<Record<string, string>> }
  ) => {
    try {
      const result = await handler(req, { params });
      if (result && typeof result === "object" && "data" in result) {
        return NextResponse.json(result);
      }
      return NextResponse.json({ data: result });
    } catch (error: unknown) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Internal Error" },
        { status: 500 }
      );
    }
  };
}
