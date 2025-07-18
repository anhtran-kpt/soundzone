import { api } from "./api-client";

export default function fetcher<TResponse = unknown>(
  url: string
): ({ signal }: { signal: AbortSignal }) => Promise<TResponse> {
  return async ({ signal }) => {
    const response = await api.get<TResponse>(url, signal);

    return response;
  };
}
