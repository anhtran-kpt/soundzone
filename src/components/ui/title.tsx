"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const Title = ({
  title,
  isActive,
}: {
  title: string;
  isActive?: boolean;
}) => {
  return (
    <p
      className={cn(
        "font-medium text-[0.925rem] truncate text-foreground",
        isActive && "text-primary"
      )}
    >
      {title}
    </p>
  );
};

export const TitleSkeleton = () => {
  return <Skeleton className="h-4 w-32" />;
};
