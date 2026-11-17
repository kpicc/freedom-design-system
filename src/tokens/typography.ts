/**
 * Typography tokens.
 * 'Ambra' is Freedom's proprietary typeface; the fallback stack
 * matches what ships on freedommobile.ca.
 * Keep in sync with tokens.css.
 */
export const typography = {
  fontFamily: {
    sans: "'Ambra','Helvetica Neue',Helvetica,Arial,sans-serif",
    mono: "ui-monospace,SFMono-Regular,Menlo,monospace",
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    bold: '700',
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.7',
  },
} as const;
