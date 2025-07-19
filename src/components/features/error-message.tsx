import React, { useState } from "react";
import {
  AlertCircle,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Wifi,
  Lock,
  Server,
  AlertTriangle,
} from "lucide-react";

interface ErrorMessageProps {
  error?: Error | string | null;
  title?: string;
  message?: string;
  variant?: "default" | "warning" | "critical" | "network";
  showRetry?: boolean;
  retryText?: string;
  onRetry?: () => void;
  showDetails?: boolean;
  className?: string;
  children?: React.ReactNode;
  isRetrying?: boolean;
}

type ErrorType = "network" | "validation" | "auth" | "server" | "unknown";

interface ApiError extends Error {
  status?: number;
  code?: string;
  type?: ErrorType;
}

const getErrorType = (error: Error | string): ErrorType => {
  if (typeof error === "string") return "unknown";

  const apiError = error as ApiError;
  if (apiError.type) return apiError.type;

  if (apiError.status === 401 || apiError.status === 403) return "auth";
  if (apiError.status === 422) return "validation";
  if (apiError.status ?? 500 >= 500) return "server";
  if (
    apiError.message?.includes("fetch") ||
    apiError.message?.includes("network")
  )
    return "network";

  return "unknown";
};

const getErrorConfig = (type: ErrorType, variant: string) => {
  const configs = {
    network: {
      icon: Wifi,
      title: "Connection Error",
      description: "Please check your internet connection",
      colors: "bg-blue-50 border-blue-200 text-blue-800",
    },
    auth: {
      icon: Lock,
      title: "Authentication Error",
      description: "You need to log in to access this resource",
      colors: "bg-red-50 border-red-200 text-red-800",
    },
    server: {
      icon: Server,
      title: "Server Error",
      description: "Something went wrong on our end",
      colors: "bg-red-50 border-red-200 text-red-800",
    },
    validation: {
      icon: AlertTriangle,
      title: "Validation Error",
      description: "Please check your input",
      colors: "bg-yellow-50 border-yellow-200 text-yellow-800",
    },
    unknown: {
      icon: AlertCircle,
      title: "Something went wrong",
      description: "An unexpected error occurred",
      colors: "bg-gray-50 border-gray-200 text-gray-800",
    },
  };

  const variantColors = {
    default: "bg-gray-50 border-gray-200 text-gray-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    critical: "bg-red-50 border-red-200 text-red-800",
    network: "bg-blue-50 border-blue-200 text-blue-800",
  };

  return {
    ...configs[type],
    colors:
      variantColors[variant as keyof typeof variantColors] ||
      configs[type].colors,
  };
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  title,
  message,
  variant = "default",
  showRetry = false,
  retryText = "Try again",
  onRetry,
  showDetails = false,
  className = "",
  children,
  isRetrying = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!error && !message) return null;

  const errorObj = typeof error === "string" ? new Error(error) : error;
  const errorType = errorObj ? getErrorType(errorObj) : "unknown";
  const config = getErrorConfig(errorType, variant);
  const Icon = config.icon;

  const displayTitle = title || config.title;
  const displayMessage = message || errorObj?.message || config.description;

  return (
    <div className={`border rounded-lg p-4 ${config.colors} ${className}`}>
      <div className="flex items-start space-x-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-sm font-medium">{displayTitle}</h3>
              <p className="text-sm opacity-80 mt-1">{displayMessage}</p>
            </div>

            {showDetails && errorObj && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 p-1 hover:bg-black/10 rounded transition-colors"
                aria-label={isExpanded ? "Hide details" : "Show details"}
              >
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            )}
          </div>

          {/* Error details */}
          {showDetails && errorObj && isExpanded && (
            <div className="mt-3 p-3 bg-black/5 rounded text-xs font-mono">
              <div>
                <strong>Type:</strong> {errorType}
              </div>
              {(errorObj as ApiError).status && (
                <div>
                  <strong>Status:</strong> {(errorObj as ApiError).status}
                </div>
              )}
              {(errorObj as ApiError).code && (
                <div>
                  <strong>Code:</strong> {(errorObj as ApiError).code}
                </div>
              )}
              <div>
                <strong>Message:</strong> {errorObj.message}
              </div>
              {errorObj.stack && (
                <details className="mt-2">
                  <summary className="cursor-pointer hover:opacity-80">
                    Stack trace
                  </summary>
                  <pre className="mt-1 text-xs whitespace-pre-wrap">
                    {errorObj.stack}
                  </pre>
                </details>
              )}
            </div>
          )}

          {/* Custom children content */}
          {children && <div className="mt-3">{children}</div>}

          {/* Actions */}
          {showRetry && onRetry && (
            <div className="mt-3">
              <button
                onClick={onRetry}
                disabled={isRetrying}
                className="inline-flex items-center space-x-2 px-3 py-1.5 text-sm font-medium bg-white/50 hover:bg-white/70 border border-current/20 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw
                  className={`w-4 h-4 ${isRetrying ? "animate-spin" : ""}`}
                />
                <span>{isRetrying ? "Retrying..." : retryText}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
