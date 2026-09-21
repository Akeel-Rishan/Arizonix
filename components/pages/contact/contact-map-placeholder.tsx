export function ContactMapPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="glass-panel relative mt-6 flex h-48 items-center justify-center overflow-hidden rounded-xl2"
    >
      <p className="absolute left-4 top-3 text-xs text-slate-400">
        Our team is distributed across 3 continents
      </p>
      <div className="flex gap-8 text-sm text-slate-300">
        {['Americas', 'Europe', 'Asia'].map((region, index) => (
          <span className="relative" key={region}>
            <span
              className={`mr-2 inline-block size-2 rounded-full ${index === 0 ? 'bg-brand-blue' : index === 1 ? 'bg-brand-purple' : 'bg-brand-cyan'}`}
            >
              <span className="absolute size-2 animate-ping rounded-full bg-current" />
            </span>
            {region}
          </span>
        ))}
      </div>
    </div>
  );
}
