// app/api/upload/audio/route.ts
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { withErrorHandler } from "@/lib/server/error-handler";
import { ApiResponse } from "@/lib/server/api-response";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = withErrorHandler(async (req: NextRequest) => {
  const formData = await req.formData();
  const audioFile = formData.get("file") as File;

  const arrayBuffer = await audioFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataURI = `data:${audioFile.type};base64,${base64}`;

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      dataURI,
      {
        folder: "audio",
        resource_type: "video",
        format: "mp3",
        overwrite: true,
        use_filename: true,
        unique_filename: true,
        public_id: `${Date.now()}-${audioFile.name.split(".")[0]}`,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
  });

  return NextResponse.json(ApiResponse.success(result), { status: 200 });
});
