import { Skeleton } from '@/components/ui/skeleton';

export function ServiceCardSkeleton() {
  return <div className="grid gap-6 md:grid-cols-3">{Array.from({ length: 3 }, (_, index) => <Skeleton className="h-72" key={index} />)}</div>;
}
