import { SVGProps } from 'react';
import './Icon.css';

export type IconName = 'info' | 'phone' | 'chevronRight' | 'check';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  /** Pixel size; defaults to 16 */
  size?: number;
}

const paths: Record<IconName, string> = {
  info: 'M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.9 12.2h-1.8V6.7h1.8v5.5zM8 5.6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  phone: 'M11.2 0H4.8C4.4 0 4 .4 4 .9v14.2c0 .5.4.9.8.9h6.4c.4 0 .8-.4.8-.9V.9c0-.5-.4-.9-.8-.9zM8 15a.9.9 0 1 1 0-1.8A.9.9 0 0 1 8 15zM11 12.5H5v-11h6v11z',
  chevronRight:
    'M5.5 1.5a.75.75 0 0 0-.53 1.28L9.19 7l-4.22 4.22a.75.75 0 1 0 1.06 1.06l4.75-4.75a.75.75 0 0 0 0-1.06L6.03 1.72a.75.75 0 0 0-.53-.22z',
  check:
    'M13.3 3.3a1 1 0 0 0-1.4 0L6.2 9 4.1 6.9a1 1 0 1 0-1.4 1.4l2.8 2.8a1 1 0 0 0 1.4 0l6.4-6.4a1 1 0 0 0 0-1.4z',
};

export function Icon({ name, size = 16, ...rest }: IconProps) {
  return (
    <svg
      className={`fm-icon fm-icon--${name}`}
      width={size}
      height={size}
      viewBox={name === 'info' || name === 'phone' ? '0 0 16 16' : '0 0 16 16'}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {name === 'info' ? (
        <>
          <circle cx="8" cy="8" r="8" />
          <path
            d="M6.25 5.5a1.75 1.75 0 0 1 3.5 0c0 1.5-1.75 1.5-1.75 3.25"
            fill="none"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="8" cy="11.25" r="0.75" fill="white" />
        </>
      ) : (
        <path d={paths[name]} />
      )}
    </svg>
  );
}
