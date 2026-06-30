const brandSwatches = [
  { name: 'Brand Blue', token: 'brand-blue', className: 'bg-brand-blue' },
  {
    name: 'Brand Purple',
    token: 'brand-purple',
    className: 'bg-brand-purple',
  },
  { name: 'Brand Cyan', token: 'brand-cyan', className: 'bg-brand-cyan' },
];

const navySwatches = [
  { name: 'Navy 50', token: 'navy-50', className: 'bg-navy-50' },
  { name: 'Navy 100', token: 'navy-100', className: 'bg-navy-100' },
  { name: 'Navy 200', token: 'navy-200', className: 'bg-navy-200' },
  { name: 'Navy 300', token: 'navy-300', className: 'bg-navy-300' },
  { name: 'Navy 400', token: 'navy-400', className: 'bg-navy-400' },
  { name: 'Navy 500', token: 'navy-500', className: 'bg-navy-500' },
  { name: 'Navy 600', token: 'navy-600', className: 'bg-navy-600' },
  { name: 'Navy 700', token: 'navy-700', className: 'bg-navy-700' },
  { name: 'Navy 800', token: 'navy-800', className: 'bg-navy-800' },
  { name: 'Navy 900', token: 'navy-900', className: 'bg-navy-900' },
  { name: 'Navy 950', token: 'navy-950', className: 'bg-navy-950' },
];

const charcoalSwatches = [
  { name: 'Charcoal 50', token: 'charcoal-50', className: 'bg-charcoal-50' },
  {
    name: 'Charcoal 200',
    token: 'charcoal-200',
    className: 'bg-charcoal-200',
  },
  {
    name: 'Charcoal 400',
    token: 'charcoal-400',
    className: 'bg-charcoal-400',
  },
  {
    name: 'Charcoal 600',
    token: 'charcoal-600',
    className: 'bg-charcoal-600',
  },
  {
    name: 'Charcoal 800',
    token: 'charcoal-800',
    className: 'bg-charcoal-800',
  },
  {
    name: 'Charcoal 950',
    token: 'charcoal-950',
    className: 'bg-charcoal-950',
  },
];

type Swatch = (typeof brandSwatches)[number];

function ColorGrid({ swatches }: { swatches: readonly Swatch[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {swatches.map((swatch) => (
        <div
          className="overflow-hidden rounded-xl border border-white/10"
          key={swatch.token}
        >
          <div className={`h-24 ${swatch.className}`} />
          <div className="bg-navy-900 p-3">
            <p className="text-sm font-semibold text-slate-100">
              {swatch.name}
            </p>
            <p className="mt-1 text-xs text-slate-400">{swatch.token}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="aurora-bg border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-cyan">
            Arizonix Design System
          </p>
          <h1 className="text-gradient max-w-4xl">
            Premium digital foundations
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A visual reference for the color, typography, surface, and gradient
            tokens used across Arizonix.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-24 px-5 py-20 sm:px-8 lg:px-12">
        <section aria-labelledby="brand-colors">
          <h2 id="brand-colors">Brand colors</h2>
          <p className="mb-8 mt-3 text-slate-400">
            Electric accents for primary actions and expressive moments.
          </p>
          <ColorGrid swatches={brandSwatches} />
        </section>

        <section aria-labelledby="navy-scale">
          <h2 id="navy-scale">Navy scale</h2>
          <p className="mb-8 mt-3 text-slate-400">
            Dark-first surfaces with enough range for layered depth.
          </p>
          <ColorGrid swatches={navySwatches} />
        </section>

        <section aria-labelledby="charcoal-scale">
          <h2 id="charcoal-scale">Charcoal scale</h2>
          <p className="mb-8 mt-3 text-slate-400">
            Cool neutrals for text, borders, and supporting UI.
          </p>
          <ColorGrid swatches={charcoalSwatches} />
        </section>

        <section aria-labelledby="typography">
          <h2 id="typography">Typography</h2>
          <div className="mt-8 divide-y divide-white/10 rounded-xl2 border border-white/10 bg-navy-900/70 px-5 sm:px-8">
            <div className="py-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Heading 1
              </p>
              <h1>Engineering what comes next</h1>
            </div>
            <div className="py-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Heading 2
              </p>
              <h2>Intelligence at every layer</h2>
            </div>
            <div className="py-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Heading 3
              </p>
              <h3>Built for ambitious teams</h3>
            </div>
            <div className="py-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Body
              </p>
              <p className="max-w-3xl text-base leading-7 text-slate-300">
                Arizonix combines AI strategy, product engineering, and precise
                execution to create software that moves businesses forward.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="surfaces">
          <h2 id="surfaces">Surfaces and effects</h2>
          <div className="aurora-bg mt-8 grid gap-6 rounded-xl2 border border-white/10 p-5 sm:p-8 lg:grid-cols-2">
            <article className="glass-panel p-7 shadow-glow-blue">
              <p className="text-sm font-semibold text-brand-cyan">
                Glass panel
              </p>
              <h3 className="mt-3">Frosted clarity</h3>
              <p className="mt-3 leading-7 text-slate-300">
                A translucent surface with blur, a soft border, and layered
                depth.
              </p>
            </article>

            <article className="gradient-border rounded-xl2 p-7 shadow-glow-purple">
              <p className="text-sm font-semibold text-brand-cyan">
                Gradient border
              </p>
              <h3 className="mt-3">Electric precision</h3>
              <p className="mt-3 leading-7 text-slate-300">
                A crisp blue, purple, and cyan edge around a deep navy surface.
              </p>
            </article>
          </div>
        </section>

        <section
          className="aurora-bg rounded-xl2 border border-white/10 px-5 py-20 text-center sm:px-8"
          aria-labelledby="gradient-text"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-cyan">
            Aurora background
          </p>
          <h2 className="text-gradient mx-auto max-w-4xl" id="gradient-text">
            Blue to purple to cyan
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            The signature Arizonix gradient treatment, designed to glow without
            overpowering the content.
          </p>
        </section>
      </div>
    </main>
  );
}
