export interface LegalSection {
  body: string[];
  id: string;
  title: string;
  bullets?: string[];
}
export function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
      <nav aria-label="Page contents" className="hidden lg:block">
        <ol className="sticky top-28 space-y-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                className="text-sm text-slate-400 hover:text-brand-blue"
                href={`#${section.id}`}
              >
                {index + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="cms-prose legal-prose">
        {sections.map((section) => (
          <section
            aria-labelledby={`${section.id}-heading`}
            className="scroll-mt-28"
            id={section.id}
            key={section.id}
          >
            <h2 id={`${section.id}-heading`}>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
