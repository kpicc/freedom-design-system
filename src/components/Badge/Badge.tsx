import { HTMLAttributes, ReactNode } from 'react';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'promo' | 'info' | 'success' | 'neutral';
  children?: ReactNode;
}

export function Badge({
  variant = 'promo',
  className,
  children,
  ...rest
}: BadgeProps) {
  const classes = ['fm-badge', `fm-badge--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
