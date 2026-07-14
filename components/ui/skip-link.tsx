export function SkipLink() {
  return (
    <a
      className="sr-only transition-all duration-150 focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:not-sr-only focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-none"
      href="#main-content"
    >
      Skip to main content
    </a>
  );
}
