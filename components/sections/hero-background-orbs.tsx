interface HeroOrb {
  className: string;
}

const orbs: readonly HeroOrb[] = [
  {
    className:
      '-left-24 top-16 size-72 bg-brand-blue/20 sm:size-96 lg:-left-32',
  },
  {
    className:
      '-right-28 top-1/3 size-80 bg-brand-purple/20 sm:size-[28rem] lg:-right-36',
  },
  {
    className:
      'bottom-8 left-1/3 size-64 bg-brand-cyan/15 sm:size-80 lg:bottom-16',
  },
];

export function HeroBackgroundOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {orbs.map((orb, index) => (
        <div
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          data-hero-orb={index + 1}
          key={orb.className}
        />
      ))}
    </div>
  );
}
