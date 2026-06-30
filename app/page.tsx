import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-center gap-4',
      )}
    >
      <h1 className="text-4xl font-bold">Arizonix</h1>
      <p>Site under construction — Phase 0 scaffold complete.</p>
    </main>
  );
}
