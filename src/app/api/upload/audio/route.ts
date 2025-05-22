import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/config/cloudinary";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { ApiResponse } from "@/lib/api/server/api-response";
import { Readable } from "stream";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const formData = await req.formData();
  const audioFile = formData.get("file") as File;

  const arrayBuffer = await audioFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const stream = Readable.from(buffer);

  const uploadResult = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "audio",
        resource_type: "video",
        format: "mp3",
        overwrite: true,
        use_filename: false,
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
