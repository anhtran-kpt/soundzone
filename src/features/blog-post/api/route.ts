import { ApiResponse } from "@/lib/server/api-response";
import { NextRequest, NextResponse } from "next/server";
import { createBlogPostSchema, updateBlogPostSchema } from "../schemas";
import { withErrorHandler } from "@/lib/server/error-handler";
import { validateData } from "@/lib/server/validate-data";
import { blogPostService } from "../services/server";

// GET - List all blogPosts
export const GET = withErrorHandler(async (req: NextRequest) => {
  // Parse query parameters if needed
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit");

  const blogPosts = await blogPostService.getAll({
    limit: limit ? parseInt(limit) : undefined,
  });

  return NextResponse.json(ApiResponse.success(blogPosts), { status: 200 });
});

// POST - Create a new blogPost
export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();
  const validatedData = validateData(createBlogPostSchema, body);

  const newBlogPost = await blogPostService.create(validatedData);

  return NextResponse.json(ApiResponse.success(newBlogPost), { status: 201 });
});

// Template for dynamic routes ([id]/route.ts)
/*
export const GET = withErrorHandler(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const blogPost = await blogPostService.getById(params.id);
  
  if (!blogPost) {
    return NextResponse.json(
      ApiResponse.error("BlogPost not found"),
      { status: 404 }
    );
  }
  
  return NextResponse.json(ApiResponse.success(blogPost), { status: 200 });
});

export const PUT = withErrorHandler(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body = await req.json();
  const validatedData = validateData(updateBlogPostSchema, body);
  
  const updatedBlogPost = await blogPostService.update(params.id, validatedData);
  
  return NextResponse.json(ApiResponse.success(updatedBlogPost), { status: 200 });
});

export const DELETE = withErrorHandler(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await blogPostService.delete(params.id);
  
  return NextResponse.json(ApiResponse.success(null), { status: 200 });
});
*/
