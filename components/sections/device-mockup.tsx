import { Lock } from 'lucide-react';
import type { ReactNode } from 'react';

import type { PortfolioColor, PortfolioDevice } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export interface DeviceMockupProps {
  bgColor: PortfolioColor;
  children?: ReactNode;
  device: PortfolioDevice;
}

const colorMap: Record<
  PortfolioColor,
  { accent: string; border: string; fill: string; muted: string }
> = {
  blue: {
    accent: 'bg-brand-blue/80',
    border: 'border-brand-blue/30',
    fill: 'bg-brand-blue/30',
    muted: 'bg-brand-blue/15',
  },
  purple: {
    accent: 'bg-brand-purple/80',
    border: 'border-brand-purple/30',
    fill: 'bg-brand-purple/30',
    muted: 'bg-brand-purple/15',
  },
  cyan: {
    accent: 'bg-brand-cyan/80',
    border: 'border-brand-cyan/30',
    fill: 'bg-brand-cyan/30',
    muted: 'bg-brand-cyan/15',
  },
};

function DesktopContent({ color }: { color: PortfolioColor }) {
  const colors = colorMap[color];

  return (
    <div className="flex min-h-0 flex-1 gap-2 p-2 sm:gap-3 sm:p-3">
      <div className={cn('w-1/5 rounded-md', colors.muted)}>
        <div className="space-y-2 p-2">
          <div className={cn('h-1.5 w-3/4 rounded-full', colors.fill)} />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div
              className="rounded-md border border-white/10 bg-white/5 p-2"
              key={item}
            >
              <div className={cn('h-1.5 w-1/2 rounded-full', colors.fill)} />
              <div className="mt-2 h-2 w-3/4 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
        <div className="flex min-h-0 flex-1 items-end gap-1 rounded-md border border-white/10 bg-white/5 px-3 pb-3 pt-5">
          {['h-1/3', 'h-3/5', 'h-2/5', 'h-4/5', 'h-1/2', 'h-full'].map(
            (height) => (
              <div
                className={cn('flex-1 rounded-t-sm', height, colors.fill)}
                key={height}
              />
            ),
          )}
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function DesktopMockup({
  color,
  children,
}: {
  color: PortfolioColor;
  children?: ReactNode;
}) {
  return (
    <div className="glass-panel flex aspect-[16/10] w-[88%] max-w-2xl flex-col overflow-hidden rounded-xl shadow-2xl">
      <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-white/10 px-3">
        <span className="size-2 rounded-full bg-red-400/70" />
        <span className="size-2 rounded-full bg-amber-300/70" />
        <span className="size-2 rounded-full bg-emerald-400/70" />
        <div className="ml-2 flex h-4 max-w-52 flex-1 items-center justify-center gap-1 rounded-full bg-white/5 px-2 text-[0.45rem] text-slate-500">
          <Lock className="size-2" /> arizonix.io/project
        </div>
      </div>
      {children ?? <DesktopContent color={color} />}
    </div>
  );
}

function TabletMockup({
  color,
  children,
}: {
  color: PortfolioColor;
  children?: ReactNode;
}) {
  const colors = colorMap[color];

  return (
    <div
      className={cn(
        'aspect-[3/4] h-[88%] rounded-xl2 border-4 bg-navy-900 p-2 shadow-2xl',
        colors.border,
      )}
    >
      <div className="mx-auto mb-2 size-1.5 rounded-full bg-white/30" />
      <div className="flex h-[calc(100%-0.875rem)] flex-col overflow-hidden rounded-lg bg-navy-950 p-3">
        {children ?? (
          <>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className={cn('h-2 w-1/3 rounded-full', colors.fill)} />
              <div className={cn('size-4 rounded-full', colors.muted)} />
            </div>
            <div className="mt-3 flex-1 space-y-2">
              {[0, 1, 2, 3].map((item) => (
                <div
                  className="flex gap-2 rounded-md border border-white/10 bg-white/5 p-2"
                  key={item}
                >
                  <div
                    className={cn('size-6 shrink-0 rounded-md', colors.muted)}
                  />
                  <div className="flex-1 space-y-1.5">
                    <div
                      className={cn('h-1.5 w-2/3 rounded-full', colors.fill)}
                    />
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
            <div className={cn('mt-2 h-7 rounded-md', colors.accent)} />
          </>
        )}
      </div>
    </div>
  );
}

function MobileMockup({
  color,
  children,
}: {
  color: PortfolioColor;
  children?: ReactNode;
}) {
  const colors = colorMap[color];

  return (
    <div
      className={cn(
        'aspect-[9/18] h-[92%] rounded-[1.75rem] border-4 bg-navy-900 p-1.5 shadow-2xl',
        colors.border,
      )}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-navy-950 p-2.5 pt-5">
        <div className="absolute left-1/2 top-1.5 h-2 w-1/3 -translate-x-1/2 rounded-full bg-white/15" />
        {children ?? (
          <>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className={cn('h-2 w-2/5 rounded-full', colors.fill)} />
              <div className={cn('size-4 rounded-full', colors.muted)} />
            </div>
            <div className="mt-2 flex-1 space-y-2 overflow-hidden">
              <div className={cn('h-12 rounded-lg', colors.muted)} />
              {[0, 1, 2, 3].map((item) => (
                <div
                  className="flex gap-2 rounded-md bg-white/5 p-2"
                  key={item}
                >
                  <div className={cn('size-5 shrink-0 rounded', colors.fill)} />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-1 w-full rounded-full bg-white/15" />
                    <div className="h-1 w-2/3 rounded-full bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 border-t border-white/10 pt-2">
              {[0, 1, 2, 3].map((item) => (
                <div
                  className={cn(
                    'mx-auto size-3 rounded',
                    item === 0 ? colors.fill : 'bg-white/10',
                  )}
                  key={item}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function DeviceMockup({ bgColor, children, device }: DeviceMockupProps) {
  return (
    <div
      aria-hidden="true"
      className="flex size-full items-center justify-center"
    >
      {device === 'desktop' ? (
        <DesktopMockup color={bgColor}>{children}</DesktopMockup>
      ) : null}
      {device === 'tablet' ? (
        <TabletMockup color={bgColor}>{children}</TabletMockup>
      ) : null}
      {device === 'mobile' ? (
        <MobileMockup color={bgColor}>{children}</MobileMockup>
      ) : null}
    </div>
  );
}
