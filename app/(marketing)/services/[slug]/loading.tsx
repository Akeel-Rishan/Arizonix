import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div
      aria-label="Loading service page"
      className="mx-auto max-w-7xl space-y-12 px-4 py-16"
      role="status"
    >
      <Skeleton className="aspect-[16/4] w-full" />
      <div className="space-y-4">
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-5/6" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton className="h-56" key={index} />
        ))}
      </div>
    </div>
  );
}
