import axios from "axios";

const uploadQueries = {
  uploadArtistImage: async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/api/upload/artist/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to upload image");
    }

    return response.data.data.secure_url;
  },

  uploadArtistBanner: async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/api/upload/artist/banner", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to upload image");
    }

    return response.data.data.secure_url;
  },

  uploadAlbumImage: async (file: File) => {
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
