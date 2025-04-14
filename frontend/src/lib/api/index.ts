import axios from "axios";
import { getSession, signOut } from "next-auth/react";
import useSWR from "swr";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await signOut({ redirect: true, callbackUrl: "/signin" });
    }
    return Promise.reject(error);
  }
);

export function useAPI(url: string, options = {}) {
  const fetcher = async (url: string) => {
    const response = await api.get(url);
    return response.data;
  };

  return useSWR(url, fetcher, {
    revalidateOnFocus: false,
    ...options,
  });
}

export const mutationAPI = async (url: string, { arg }: { arg: any }) => {
  const response = await api.post(url, arg);
  return response.data;
};
