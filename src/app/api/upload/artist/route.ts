import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { withErrorHandler } from "@/lib/api-config/server/error-handler";
import { ApiResponse } from "@/lib/api-config/server/api-response";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const POST = withErrorHandler(async (req: NextRequest) => {
  const formData = await req.formData();
  const imageFile = formData.get("file") as File;
  const type = formData.get("type") as "avatar" | "cover";

  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const stream = Readable.from(buffer);

  const uploadResult = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `artist/${type}`,
        resource_type: "image",
        format: "webp",
        overwrite: true,
        unique_filename: true,
        quality: "auto",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    stream.pipe(uploadStream);
  });

  return NextResponse.json(ApiResponse.success(uploadResult), { status: 200 });
});
