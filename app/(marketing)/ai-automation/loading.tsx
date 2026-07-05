import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() {
  return (
    <main>
      <Skeleton className="min-h-screen rounded-none" />
      <section className="container mx-auto px-4 py-24">
        <Skeleton className="mx-auto h-12 max-w-xl" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton className="h-80 rounded-xl2" key={index} />
          ))}
        </div>
      </section>
      <section className="container mx-auto grid gap-8 px-4 py-24 lg:grid-cols-[0.7fr_1.3fr]">
        <Skeleton className="h-96 rounded-xl2" />
        <Skeleton className="h-96 rounded-xl2" />
      </section>
    </main>
  );
}
