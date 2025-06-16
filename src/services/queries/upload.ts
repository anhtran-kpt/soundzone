import axios from "axios";

export async function uploadArtistImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

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

export async function uploadAlbumImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

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

export async function uploadAudio(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post("/api/upload/audio", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to upload audio");
  }

  return response.data.data.public_id;
}
