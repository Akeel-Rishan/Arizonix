'use client';
import { cn } from '@/lib/utils';
export function BlogCategoryFilter({
  activeCategory,
  categories,
  counts,
  onCategoryChange,
}: {
  activeCategory: string;
  categories: string[];
  counts: Record<string, number>;
  onCategoryChange: (category: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          aria-pressed={activeCategory === category}
          className={cn(
            'glass-panel min-h-11 shrink-0 rounded-full px-4 text-sm text-slate-300 focus-visible:ring-2 focus-visible:ring-brand-cyan',
            activeCategory === category && 'gradient-border text-white',
          )}
          key={category}
          onClick={() => onCategoryChange(category)}
          type="button"
        >
          {category}{' '}
          <span className="text-xs text-slate-400">
            ({counts[category] ?? 0})
          </span>
        </button>
      ))}
    </div>
  );
}
