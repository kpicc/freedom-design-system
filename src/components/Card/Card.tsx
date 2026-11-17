import { HTMLAttributes, ReactNode } from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 'none' | 'small';
  padded?: boolean;
  children?: ReactNode;
}

export function Card({
  elevation = 'small',
  padded = true,
  className,
  children,
  ...rest
}: CardProps) {
  const classes = [
    'fm-card',
    `fm-card--${elevation}`,
    !padded && 'fm-card--flush',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
