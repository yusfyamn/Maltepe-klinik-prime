// Design Token System - Premium Dental Clinic
// Maltepe Premium Diş Kliniği için tasarım token'ları

export const colors = {
  // Primary Colors
  primary: '#FAFAFA',        // Soft White - Ana arka plan
  accent: '#6D559F',         // Deep Purple - Vurgu rengi
  accentHover: '#5D4889',    // Darker Deep Purple - Hover state
  accentLight: '#E1DCF0',    // Light Purple - Subtle backgrounds
  
  // Text Colors
  text: '#1E1E1E',           // Charcoal - Ana metin
  textMuted: '#6B6B6B',      // Muted text - İkincil metin
  textLight: '#9B9B9B',      // Light text - Placeholder vb.
  
  // Border & Divider
  border: '#E9E6F2',         // Light Lavender Gray
  borderLight: '#F3F1F7',    // Very light border
  
  // Background Variants
  background: '#FFFFFF',     // Pure white
  backgroundAlt: '#F5F3F9',  // Very light purple tint
  backgroundDark: '#FAFAFA', // Soft white
  
  // Semantic Colors
  success: '#4CAF50',
  error: '#E57373',
  warning: '#FFB74D',
} as const;

export const typography = {
  fontFamily: {
    heading: "'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  fontSize: {
    // Responsive font sizes using clamp - Standardized scale
    h1: 'clamp(2.5rem, 5vw, 4rem)',        // 40-64px - Hero headlines
    h2: 'clamp(2rem, 4vw, 3rem)',          // 32-48px - Section titles
    h3: 'clamp(1.5rem, 3vw, 2rem)',        // 24-32px - Card titles
    h4: 'clamp(1.25rem, 2.5vw, 1.5rem)',   // 20-24px - Subsection titles
    h5: 'clamp(1.125rem, 2vw, 1.25rem)',   // 18-20px - Small titles
    h6: 'clamp(1rem, 1.5vw, 1.125rem)',    // 16-18px - Labels
    bodyLg: 'clamp(1.125rem, 1.75vw, 1.25rem)', // 18-20px - Large body
    body: 'clamp(1rem, 1.5vw, 1.125rem)',       // 16-18px - Default body
    bodySm: '0.875rem',                         // 14px - Small body
    caption: '0.75rem',                         // 12px - Captions
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.15',      // Headings - compact
    heading: '1.25',    // Headings - normal
    subheading: '1.35', // Subheadings
    body: '1.65',       // Body text
    relaxed: '1.75',    // Relaxed body
  },
  letterSpacing: {
    tight: '-0.02em',   // Headings
    normal: '0.01em',   // Body text
    wide: '0.1em',      // Uppercase/labels
  },
} as const;

// Animation Timing Constants
export const timing = {
  fast: 0.2,      // Quick interactions
  normal: 0.5,    // Standard animations
  slow: 0.7,      // Slow, dramatic animations
  stagger: 0.1,   // Delay between staggered items
} as const;

// Easing Curves
export const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,  // Premium smooth easing
  bounce: [0.68, -0.55, 0.265, 1.55] as const, // Bouncy effect
  easeOut: [0, 0, 0.2, 1] as const,            // Quick start, slow end
  easeIn: [0.4, 0, 1, 1] as const,             // Slow start, quick end
} as const;

export const spacing = {
  section: {
    generous: 'py-24 md:py-32 lg:py-40',   // Large sections
    balanced: 'py-16 md:py-24 lg:py-32',   // Medium sections
    compact: 'py-12 md:py-16 lg:py-20',    // Compact sections
  },
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  containerNarrow: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  containerWide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
  // Standardized gaps
  gap: {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  },
  // Standardized padding
  padding: {
    sm: 'p-5',
    md: 'p-6',
    lg: 'p-8',
  },
} as const;

export const effects = {
  borderRadius: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  },
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    none: 'shadow-none',
  },
  transition: {
    fast: 'transition-all duration-200 ease-out',
    normal: 'transition-all duration-300 ease-out',
    slow: 'transition-all duration-500 ease-out',
  },
} as const;

// Breakpoints (matching Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
