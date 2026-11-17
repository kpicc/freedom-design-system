import { HTMLAttributes, ReactNode, createElement } from 'react';
import './Text.css';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'eyebrow' | 'h6' | 'body';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Semantic style; sizes are responsive (mobile → desktop at 992px) */
  variant?: TextVariant;
  /** Render as a different element, e.g. as="p" for an h1-styled paragraph */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children?: ReactNode;
}

const defaultTag: Record<TextVariant, TextProps['as']> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  eyebrow: 'h5',
  h6: 'h6',
  body: 'p',
};

export function Text({
  variant = 'body',
  as,
  className,
  children,
  ...rest
}: TextProps) {
  const tag = as ?? defaultTag[variant] ?? 'p';
  const classes = ['fm-text', `fm-text--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return createElement(tag, { className: classes, ...rest }, children);
}
