import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      ref={ref}
      {...props}
    />
  ),
);

Container.displayName = 'Container';
