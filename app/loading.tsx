import { LoadingVisual } from '@/components/ui/loading-visual';

export default function Loading() {
  return (
    <div
      aria-label="Loading Arizonix"
      className="flex min-h-[calc(100dvh-5rem)] items-center justify-center bg-navy-950"
      role="status"
    >
      <LoadingVisual />
    </div>
  );
}
