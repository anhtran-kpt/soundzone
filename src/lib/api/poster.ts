import { api } from "./api-client";

export function poster<TRequest, TResponse>(
  url: string,
  data?: TRequest
): () => Promise<TResponse> {
  return async () => {
    return await api.post<TResponse>(url, data);
  };
}
