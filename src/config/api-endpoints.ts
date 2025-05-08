import { ValidateEmailDto } from "@/dtos/auth-dto";

const API_ENDPOINTS = {
  auth: {
    signin: "/auth/signin",
    signup: "/auth/signup",
    validateEmail: (email: ValidateEmailDto) =>
      `/auth/validate?email=${encodeURIComponent(email)}`,
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
  genres: {
    list: "/genres",
    detail: (slug: string) => `/genres/${slug}`,
    create: "/genres",
    update: (slug: string) => `/genres/${slug}`,
    delete: (slug: string) => `/genres/${slug}`,
  },
  user: {
    profile: "/user/profile",
    updateProfile: "/user/profile",
  },
};

export default API_ENDPOINTS;
