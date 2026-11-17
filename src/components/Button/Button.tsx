import { ButtonHTMLAttributes, forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  platform?: 'desktop' | 'mobile';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'solid', size = 'medium', platform = 'desktop', fullWidth = false, className, ...rest },
    ref,
  ) => {
    const classes = [
      'fm-button',
      `fm-button--${variant}`,
      `fm-button--${size}`,
      `fm-button--${platform}`,
      fullWidth && 'fm-button--full',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <button ref={ref} className={classes} {...rest} />;
  },
);

Button.displayName = 'Button';
