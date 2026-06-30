'use client';

import { Loader2, type LucideIcon } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/utils';

export type ButtonVariant = 'ghost' | 'outline' | 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonSharedProps {
  children: ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export type ButtonElementProps = ButtonSharedProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonSharedProps | 'href'
  > & {
    href?: undefined;
  };

export type LinkButtonProps = ButtonSharedProps &
  Omit<
    ComponentPropsWithoutRef<typeof Link>,
    keyof ButtonSharedProps | 'href'
  > & {
    disabled?: never;
    href: LinkProps['href'];
    type?: never;
  };

export type ButtonProps = ButtonElementProps | LinkButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white shadow-glow-blue hover:shadow-glow-purple hover:brightness-110',
  secondary:
    'glass-panel text-white hover:border-brand-cyan/30 hover:bg-white/10',
  outline:
    'border border-white/20 bg-transparent text-slate-100 hover:border-white/30 hover:bg-white/5 hover:text-white',
  ghost: 'text-slate-200 hover:bg-white/5 hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-9 gap-1.5 rounded-lg px-3.5 py-2 text-xs',
  md: 'min-h-11 gap-2 rounded-xl px-5 py-2.5 text-sm',
  lg: 'min-h-13 gap-2.5 rounded-xl px-6 py-3 text-base',
};

function setForwardedRef(
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  node: HTMLAnchorElement | HTMLButtonElement | null,
) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref) {
    ref.current = node;
  }
}

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  isLoading: boolean,
  className?: string,
) {
  return cn(
    'inline-flex shrink-0 items-center justify-center font-semibold transition duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:pointer-events-none disabled:opacity-60',
    variantStyles[variant],
    sizeStyles[size],
    isLoading && 'pointer-events-none opacity-70',
    className,
  );
}

function getButtonContent(
  children: ReactNode,
  Icon: LucideIcon | undefined,
  iconPosition: 'left' | 'right',
  isLoading: boolean,
) {
  return (
    <>
      {isLoading ? (
        <Loader2 aria-hidden="true" className="size-4 animate-spin" />
      ) : Icon && iconPosition === 'left' ? (
        <Icon aria-hidden="true" className="size-4" />
      ) : null}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === 'right' ? (
        <Icon aria-hidden="true" className="size-4" />
      ) : null}
    </>
  );
}

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(function Button(props, ref) {
  if (props.href !== undefined) {
    const {
      children,
      className,
      href,
      icon: Icon,
      iconPosition = 'left',
      loading = false,
      onClick,
      size = 'md',
      variant = 'primary',
      ...linkProps
    } = props;

    return (
      <Link
        {...linkProps}
        aria-busy={loading || undefined}
        aria-disabled={loading || undefined}
        className={getButtonClasses(variant, size, loading, className)}
        href={href}
        onClick={(event) => {
          if (loading) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        ref={(node) => setForwardedRef(ref, node)}
      >
        {getButtonContent(children, Icon, iconPosition, loading)}
      </Link>
    );
  }

  const {
    children,
    className,
    disabled,
    icon: Icon,
    iconPosition = 'left',
    loading = false,
    size = 'md',
    type,
    variant = 'primary',
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      aria-busy={loading || undefined}
      className={getButtonClasses(variant, size, loading, className)}
      disabled={disabled || loading}
      ref={(node) => setForwardedRef(ref, node)}
      type={type ?? 'button'}
    >
      {getButtonContent(children, Icon, iconPosition, loading)}
    </button>
  );
});

Button.displayName = 'Button';
