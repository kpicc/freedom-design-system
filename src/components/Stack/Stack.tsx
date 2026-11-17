import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import './Stack.css';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'vertical' | 'horizontal';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  children?: ReactNode;
}

export function Stack({
  direction = 'vertical',
  gap = 4,
  align,
  justify,
  className,
  style,
  children,
  ...rest
}: StackProps) {
  const classes = [
    'fm-stack',
    `fm-stack--${direction}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const mergedStyle: CSSProperties = {
    gap: `var(--fm-spacing-${gap})`,
    alignItems: align,
    justifyContent: justify,
    ...style,
  };

  return (
    <div className={classes} style={mergedStyle} {...rest}>
      {children}
    </div>
  );
}
