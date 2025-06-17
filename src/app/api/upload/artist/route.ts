import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { withErrorHandler } from "@/lib/api/server/error-handler";
import { ApiResponse } from "@/lib/api/server/api-response";
import { Readable } from "stream";

export const POST = withErrorHandler(async (req: NextRequest) => {
  const formData = await req.formData();

  const imageFile = formData.get("file") as File;
  const fileName = formData.get("fileName") as string;

  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const stream = Readable.from(buffer);

  const uploadResult = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "soundzone/artists",
        resource_type: "image",
        format: "webp",
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
