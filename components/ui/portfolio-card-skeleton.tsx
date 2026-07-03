import { Skeleton } from '@/components/ui/skeleton';

export function PortfolioCardSkeleton() {
  return <div className="grid gap-6 lg:grid-cols-2">{Array.from({ length: 2 }, (_, index) => <Skeleton className="h-[34rem]" key={index} />)}</div>;
}
