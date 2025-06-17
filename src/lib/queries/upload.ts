import axios from "axios";

export async function uploadArtistImage(file: File, fileName: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", fileName);

  const response = await axios.post("/api/upload/artist", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to upload image");
  }

  return response.data.data.public_id;
}

export async function uploadAlbumImage(file: File, fileName: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", fileName);

  const response = await axios.post("/api/upload/album", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to upload image");
  }

  return response.data.data.public_id;
}

export async function uploadAudio(file: File, fileName: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", fileName);

  const response = await axios.post("/api/upload/track", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to upload audio");
  }

  return {
    duration: response.data.data.duration,
    publicId: response.data.data.public_id,
  };
}
