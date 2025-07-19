export function withErrorHandler<TArgs extends unknown[], TResult>(
  actionOrHandler: string | ((...args: TArgs) => Promise<TResult>),
  maybeHandler?: (...args: TArgs) => Promise<TResult>
) {
  const handler =
    typeof actionOrHandler === "function" ? actionOrHandler : maybeHandler!;

  const actionName =
    typeof actionOrHandler === "string"
      ? actionOrHandler
      : handler.name.toUpperCase();

  return async (...args: TArgs): Promise<TResult> => {
    try {
      return await handler(...args);
    } catch (error) {
      console.error(`[${actionName}]`, error);
      throw new Error(`[${actionName}]: Something went wrong!`);
    }
  };
}
