import { useState } from "react";

export const useErrorHandler = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleError = (err: Error | string) => {
    const errorObj = typeof err === "string" ? new Error(err) : err;
    setError(errorObj);

    console.error("Error handled:", errorObj);
  };

  const retry = async (retryFn: () => Promise<void>) => {
    setIsRetrying(true);
    try {
      await retryFn();
      setError(null);
    } catch (err) {
      handleError(err as Error);
    } finally {
      setIsRetrying(false);
    }
  };

  const clearError = () => setError(null);

  return {
    error,
    isRetrying,
    handleError,
    retry,
    clearError,
  };
};
