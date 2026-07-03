import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() { return <main><Skeleton className="h-[70vh] w-full" /><div className="mx-auto max-w-7xl space-y-5 px-4 py-16"><Skeleton className="h-10 w-2/3" /><Skeleton className="h-5 w-full" /><Skeleton className="h-5 w-5/6" /></div></main>; }
