import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => (
    <div
      className={cn(
        'glass-panel p-6 sm:p-7',
        hover &&
          'transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/30 hover:bg-white/10 hover:shadow-glow-blue',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex flex-col space-y-2', className)}
      ref={ref}
      {...props}
    />
  ),
);
CardHeader.displayName = 'CardHeader';

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      className={cn(
        'text-xl font-semibold tracking-tight text-white',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    className={cn('text-sm leading-6 text-slate-400', className)}
    ref={ref}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div className={cn('pt-5', className)} ref={ref} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex items-center pt-6', className)}
      ref={ref}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';
