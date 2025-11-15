import type { JSX } from 'react';
import React from 'react';
import { cn } from '~/shared/lib/utils';

export const badgeVariantStyles = {
    'white': 'rounded-2xl bg-white text-black hover:bg-white/80',
};

interface BadgeProps<T extends React.ElementType = 'div'> {
  as?: T;
  variant?: keyof typeof badgeVariantStyles;
  className?: string;
  children?: React.ReactNode;
}

export function Badge<T extends React.ElementType = 'div'>({
  as,
  className,
  variant = 'white',
  children,
  ...props
}: BadgeProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BadgeProps<T>>): JSX.Element {
  const Component = as || 'div';
  return (
    <Component
      {...props}
      className={cn(
        'whitespace-nowrap rounded-full border bg-card px-4 py-2 text-sm',
        'hover:bg-accent transition-colors',
        badgeVariantStyles[variant],
        className,
      )}
    >
      {children}
    </Component>
  );
}
