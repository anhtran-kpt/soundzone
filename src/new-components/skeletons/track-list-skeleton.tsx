import { Skeleton } from "@/components/ui/skeleton";

export const TrackListSkeleton = ({ count = 10 }: { count?: number }) => {
  return (
    <ul role="list" className="w-full">
      {Array.from({ length: count }).map((_, index) => (
        <li
          key={index}
          className="flex items-center gap-6 py-2 px-4 text-muted-foreground rounded-md"
        >
          <div className="w-4 text-base font-semibold text-center">
            <Skeleton className="w-4 h-4 rounded-sm" />
          </div>

          <div className="flex items-center gap-3 grow min-w-0">
            <Skeleton className="size-12 rounded-md shrink-0" />
            <div className="flex flex-col gap-1 w-full overflow-hidden">
              <Skeleton className="h-4 w-3/4 rounded" />
              <Skeleton className="h-3 w-1/2 rounded" />
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-10 h-3 rounded" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
        </li>
      ))}
    </ul>
  );
};
