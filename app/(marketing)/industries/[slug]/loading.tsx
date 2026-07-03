import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() { return <main className="mx-auto max-w-7xl space-y-12 px-4 py-16"><Skeleton className="h-[55vh] w-full" /><div className="grid gap-6 md:grid-cols-3">{Array.from({ length: 6 }, (_, index) => <Skeleton className="h-56" key={index} />)}</div></main>; }
