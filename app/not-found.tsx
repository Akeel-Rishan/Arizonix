import { Brain, Briefcase, Home, Mail, Newspaper, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const pages = [
  [Home, 'Home', 'Premium AI & Software Engineering', '/'],
  [Rocket, 'Services', 'What we build for you', '/services'],
  [Briefcase, 'Portfolio', 'Real projects, real results', '/portfolio'],
  [Newspaper, 'Blog', 'Engineering insights', '/blog'],
  [Brain, 'About', 'Who we are', '/about'],
  [Mail, 'Contact', 'Start your project', '/contact'],
] as const;
export default function NotFound() {
  return (
    <main className="aurora-bg min-h-screen px-4 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-gradient text-[80px] font-extrabold leading-none md:text-[120px]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white">
          This Page Took A Wrong Turn
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist, moved, or is
          currently being rebuilt by our engineers.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Go Home</Button>
          <Button href="/services" variant="outline">
            View Our Services
          </Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>
        <p className="mb-4 mt-10 text-sm text-slate-500">Popular Pages:</p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {pages.map(([Icon, name, description, href]) => (
            <Link
              className="glass-panel rounded-xl p-4 text-left transition hover:border-brand-cyan/40"
              href={href}
              key={name}
            >
              <Icon className="size-5 text-brand-cyan" />
              <strong className="mt-2 block text-sm text-white">{name}</strong>
              <span className="text-xs text-slate-500">{description}</span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-xs text-slate-600">
          Error code: 404 · Our AI searched for this page · Still not found ·
          Switching to manual search… 🔍
        </p>
      </div>
    </main>
  );
}
