import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() { return <div aria-label="Loading case study" role="status"><Skeleton className="h-[60vh] w-full" /><div className="mx-auto max-w-3xl space-y-4 px-4 py-16">{['w-4/5', 'w-full', 'w-11/12', 'w-3/5', 'w-5/6'].map((width) => <Skeleton className={`h-5 ${width}`} key={width} />)}</div></div>; }
