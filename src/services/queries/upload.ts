import axios from "axios";

const uploadQueries = {
  uploadImage: async (
    file: File,
    model: "artist" | "user" | "album" | "playlist",
    type: "avatar" | "cover"
  ) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);
    formData.append("model", model);

    const response = await axios.post("/api/upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to upload image");
    }

    return response.data.data.secure_url;
  },

  uploadAudio: async (file: File) => {
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

    return response.data.data;
  },
};

export default uploadQueries;
