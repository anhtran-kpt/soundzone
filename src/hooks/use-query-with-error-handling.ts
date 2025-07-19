import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useErrorHandler } from "./use-error-handler";

export const useQueryWithErrorHandling = <T>(
  queryKey: QueryKey,
  queryFn: QueryFunction<T>,
  options?: UseQueryOptions<T, Error>
) => {
  const {
    handleError,
    error: handledError,
    clearError,
    retry,
    isRetrying,
  } = useErrorHandler();

  const query = useQuery<T, Error>({
    queryKey,
    queryFn,
    ...options,
    onError: (error) => {
      handleError(error);
      options?.onError?.(error);
    },
    onSuccess: (data) => {
      clearError();
      options?.onSuccess?.(data);
    },
  });

  const retryQuery = () => {
    return retry(() => query.refetch().then(() => {}));
  };

  return {
    ...query,
    handledError,
    retryQuery,
    isRetrying: isRetrying || query.isRefetching,
  };
};
