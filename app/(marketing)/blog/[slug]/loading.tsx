import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() {
  return (
    <div aria-label="Loading article" className="mx-auto max-w-6xl px-4 pb-20 pt-32" role="status">
      <div className="max-w-4xl">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="mt-8 h-12 w-full" />
        <Skeleton className="mt-3 h-12 w-4/5" />
        <Skeleton className="mt-6 h-7 w-3/4" />
        <Skeleton className="mt-8 aspect-video w-full rounded-xl2" />
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          {Array.from({ length: 10 }, (_, index) => (
            <Skeleton
              className={index % 4 === 0 ? 'h-8 w-2/3' : 'h-5 w-full'}
              key={index}
            />
          ))}
        </div>
        <Skeleton className="hidden h-80 rounded-xl2 lg:block" />
      </div>
    </div>
  );
}
