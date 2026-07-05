import { Button } from '@/components/ui/button';
export default function BlogNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold text-brand-cyan">404</p>
        <h1 className="mt-3 text-4xl font-bold text-white">
          Article Not Found
        </h1>
        <p className="mt-4 text-slate-400">
          The article you&apos;re looking for may have been moved or removed.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Button href="/blog">Back to Blog</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </main>
  );
}
