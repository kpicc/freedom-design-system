/**
 * Freedom Mobile brand colors.
 * Derived from freedommobile.ca production markup (2026-10).
 * Keep in sync with tokens.css and Figma variables.
 */

export const colors = {
  brand: {
    /** Primary brand orange — CTAs, highlights */
    50: '#FDF3EB',
    100: '#FAE0CC',
    200: '#F5C199',
    300: '#F09A5B',
    400: '#ED6B1F',
    500: '#DB5C05',
    600: '#C35500',
    700: '#9A4200',
    800: '#6E2F00',
    900: '#421C00',
    950: '#290F00',
  },
  navy: {
    /** Deep navy — headings, footer, dark surfaces */
    50: '#EBF4FA',
    100: '#CCE2F0',
    200: '#99C4DD',
    300: '#66A6C9',
    400: '#3388B6',
    500: '#156BA3',
    600: '#0F5687',
    700: '#0A4166',
    800: '#052B44',
    900: '#012F4C',
    950: '#011E30',
  },
  gray: {
    50: '#F8F9FA',
    100: '#F5F5F5',
    200: '#F2F2F2',
    300: '#E0E0E0',
    400: '#DEDEDE',
    500: '#CECECE',
    600: '#999999',
    700: '#8F8F8F',
    800: '#4E4E4E',
    900: '#1A1A1A',
    950: '#000000',
  },
  success: '#2E7D32',
  warning: '#ED6C02',
  danger: '#C62828',
  info: '#156BA3',
  white: '#FFFFFF',
  black: '#000000',
} as const;

/** Semantic aliases consumed by components */
export const semantic = {
  actionPrimary: colors.brand[500],
  actionPrimaryHover: colors.black,
  actionPrimaryPressed: colors.brand[600],
  link: colors.navy[500],
  linkHover: colors.navy[600],
  textPrimary: colors.gray[900],
  textSecondary: colors.gray[800],
  textMuted: colors.gray[700],
  surfaceDefault: colors.white,
  surfaceMuted: colors.gray[200],
  surfaceDark: colors.navy[900],
  border: colors.gray[400],
  focusRing: colors.navy[500],
} as const;
