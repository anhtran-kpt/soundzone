import { useState, useEffect, useCallback } from "react";
import { ApiClientError } from "@/lib/api-client";
import { toast } from "sonner";

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiClientError | null;
}

interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: unknown) => void;
  onError?: (error: ApiClientError) => void;
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
) {
  const { immediate = true, onSuccess, onError } = options;

  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const data = await apiCall();
      setState({ data, loading: false, error: null });
      onSuccess?.(data);
      return data;
    } catch (error) {
      const apiError =
        error instanceof ApiClientError
          ? error
          : new ApiClientError({
              code: "UNKNOWN_ERROR",
              message: "An unexpected error occurred",
            });

      setState({ data: null, loading: false, error: apiError });
      onError?.(apiError);
      throw apiError;
    }
  }, [apiCall, onSuccess, onError]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    ...state,
    execute,
    retry: execute,
  };
}

export function useMutation<T, P = unknown>(
  apiCall: (params: P) => Promise<T>,
  options: UseApiOptions = {}
) {
  const { onSuccess, onError } = options;

  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const mutate = useCallback(
    async (params: P) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const data = await apiCall(params);
        setState({ data, loading: false, error: null });
        onSuccess?.(data);
        return data;
      } catch (error) {
        const apiError =
          error instanceof ApiClientError
            ? error
            : new ApiClientError({
                code: "UNKNOWN_ERROR",
                message: "An unexpected error occurred",
              });

        setState((prev) => ({ ...prev, loading: false, error: apiError }));
        onError?.(apiError);
        throw apiError;
      }
    },
    [apiCall, onSuccess, onError]
  );

  return {
    ...state,
    mutate,
    reset: () => setState({ data: null, loading: false, error: null }),
  };
}

export function useApiError() {
  const [error, setError] = useState<ApiClientError | null>(null);

  const handleError = useCallback((error: ApiClientError) => {
    setError(error);

    toast.error(`{API Error: ${error.message}}`);
    console.error("API Error:", error.message);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError,
    isValidationError: error?.code === "VALIDATION_ERROR",
    isNotFoundError: error?.code === "NOT_FOUND",
    isUnauthorizedError: error?.code === "UNAUTHORIZED",
  };
}
