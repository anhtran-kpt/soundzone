export const CLOUDINARY = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "YOUR_CLOUD_NAME",
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "YOUR_API_KEY",
  uploadPreset:
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "soundzone_uploads",
  folder: "/audio",
  resourceType: "video",
};
