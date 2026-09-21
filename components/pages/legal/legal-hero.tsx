import Link from 'next/link';
export function LegalHero({
  intro,
  lastUpdated,
  title,
}: {
  intro: string;
  lastUpdated: string;
  title: string;
}) {
  return (
    <div className="py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
        <Link href="/">Home</Link> <span aria-hidden="true">/</span>{' '}
        <span aria-current="page">{title}</span>
      </nav>
      <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: {lastUpdated}</p>
      <p className="mt-4 max-w-xl text-slate-400">{intro}</p>
    </div>
  );
}
