const API_ENDPOINTS = {
  auth: {
    signup: "/auth/signup",
    checkEmailExists: "/auth/check-email",
  },
  songs: {
    list: "/songs",
    detail: (id: string) => `/songs/${id}`,
    create: "/songs",
    update: (id: string) => `/songs/${id}`,
    delete: (id: string) => `/songs/${id}`,
    favorite: (id: string) => `/songs/${id}/favorite`,
  },
  playlists: {
    list: "/playlists",
    detail: (id: string) => `/playlists/${id}`,
    create: "/playlists",
    update: (id: string) => `/playlists/${id}`,
    delete: (id: string) => `/playlists/${id}`,
    addSong: (id: string) => `/playlists/${id}/songs`,
    removeSong: (id: string, songId: string) =>
      `/playlists/${id}/songs/${songId}`,
  },
  user: {
    profile: "/user/profile",
    updateProfile: "/user/profile",
  },
};

export default API_ENDPOINTS;
