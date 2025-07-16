import { JSX } from "react";

type WithSkeletonProps<T> = {
  isLoading: boolean;
  data: T | undefined;
  selector: (data: T) => any;
  Skeleton: JSX.Element;
  Component: React.ComponentType<any>;
};

export default function WithSkeleton<T>({
  isLoading,
  data,
  selector,
  Skeleton,
  Component,
}: WithSkeletonProps<T>) {
  if (isLoading || !data) return Skeleton;

  const props = selector(data);
  return <Component {...props} />;
}
