import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { withErrorHandler } from "@/lib/api/with-api-response";
import { ApiResponse } from "@/lib/api/api-response";
import { Readable } from "stream";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const formData = await req.formData();

  const audioFile = formData.get("file") as File;
  const fileName = formData.get("fileName") as string;

  const arrayBuffer = await audioFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const stream = Readable.from(buffer);

  const uploadResult = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "soundzone/tracks",
        resource_type: "video",
        format: "mp3",
        public_id: fileName,
        overwrite: true,
        unique_filename: false,
        use_filename: false,
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
