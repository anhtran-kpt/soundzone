import { Readable } from "stream";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

interface UploadArtistImageOptions {
  file: File;
  artistSlug: string;
  type: "avatar" | "cover";
}

export const uploadArtistImage = async ({
  file,
  artistSlug,
  type,
}: UploadArtistImageOptions) => {
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
        use_filename: true,
        unique_filename: true,
        public_id: `${Date.now()}-${audioFile.name.split(".")[0]}`,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    stream.pipe(uploadStream);
  });
};
