import { CTAForm } from '@/components/sections/cta-form';
export function ContactFormSection() {
  return (
    <section className="glass-panel rounded-xl2 p-6 lg:sticky lg:top-24 lg:p-8">
      <h2 className="text-xl font-bold text-white">
        Tell Us About Your Project
      </h2>
      <p className="mb-6 mt-1 text-sm text-slate-400">
        Fill in the form and we&apos;ll be in touch within 48 hours.
      </p>
      <CTAForm />
    </section>
  );
}
