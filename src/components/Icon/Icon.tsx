import { HTMLAttributes } from 'react';
import './Icon.css';

const iconModules = import.meta.glob('../../icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const iconUrls: Record<string, string> = {};
for (const [path, url] of Object.entries(iconModules)) {
  const name = path.match(/\/([^/]+)\.svg$/)?.[1];
  if (name) iconUrls[name] = url;
}

// Legacy names kept for existing consumers
const aliases: Record<string, string> = {
  phone: 'smartphone',
  chevronRight: 'chevron-right',
  info: 'tooltip-filled',
};

export const iconNames = Object.keys(iconUrls).sort();

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Icon file name, e.g. "check", "chevron-right", "face-id" */
  name: string;
  /** Pixel size; defaults to 24 */
  size?: number;
  /** Icon colour; defaults to currentColor */
  color?: string;
}

export function Icon({
  name,
  size = 24,
  color,
  className,
  style,
  ...rest
}: IconProps) {
  const resolved = iconUrls[aliases[name] ?? name] ? aliases[name] ?? name : undefined;
  const url = resolved ? iconUrls[resolved] : undefined;

  return (
    <span
      className={`fm-icon fm-icon--${name}${className ? ` ${className}` : ''}`}
      role="img"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        backgroundColor: color ?? 'currentColor',
        WebkitMaskImage: url ? `url("${url}")` : undefined,
        maskImage: url ? `url("${url}")` : undefined,
        ...style,
      }}
      {...rest}
    />
  );
}
