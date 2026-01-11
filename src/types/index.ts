// Type Definitions - Maltepe Premium Dental Clinic

// Demo Variant Types
export type DemoVariant = 'clinic-estate' | 'aesthetic-luxury' | 'medical-authority' | 'phone-mockup';

export interface ThemeConfig {
  variant: DemoVariant;
  hero: {
    layout: 'centered' | 'split' | 'full-width';
    imagePosition: 'background' | 'side' | 'overlay';
    animationIntensity: 'minimal' | 'moderate' | 'smooth';
  };
  spacing: 'generous' | 'balanced' | 'compact';
  contentDensity: 'minimal' | 'balanced' | 'rich';
  visualEmphasis: 'typography' | 'imagery' | 'mixed';
}

// Demo Configuration Constants
export const DEMO_CONFIGS: Record<DemoVariant, ThemeConfig> = {
  'clinic-estate': {
    variant: 'clinic-estate',
    hero: {
      layout: 'centered',
      imagePosition: 'background',
      animationIntensity: 'minimal',
    },
    spacing: 'generous',
    contentDensity: 'minimal',
    visualEmphasis: 'typography',
  },
  'aesthetic-luxury': {
    variant: 'aesthetic-luxury',
    hero: {
      layout: 'split',
      imagePosition: 'side',
      animationIntensity: 'smooth',
    },
    spacing: 'balanced',
    contentDensity: 'balanced',
    visualEmphasis: 'imagery',
  },
  'medical-authority': {
    variant: 'medical-authority',
    hero: {
      layout: 'full-width',
      imagePosition: 'overlay',
      animationIntensity: 'moderate',
    },
    spacing: 'compact',
    contentDensity: 'rich',
    visualEmphasis: 'mixed',
  },
  'phone-mockup': {
    variant: 'phone-mockup',
    hero: {
      layout: 'centered',
      imagePosition: 'overlay',
      animationIntensity: 'smooth',
    },
    spacing: 'balanced',
    contentDensity: 'minimal',
    visualEmphasis: 'imagery',
  },
};

export const DEMO_LABELS: Record<DemoVariant, { title: string; description: string }> = {
  'clinic-estate': {
    title: 'Clinic Estate',
    description: 'Minimal, Apple-style tasarım. Doktor güveni ön planda.',
  },
  'aesthetic-luxury': {
    title: 'Aesthetic Luxury',
    description: 'Görsel ağırlıklı, estetik işlemler odaklı.',
  },
  'medical-authority': {
    title: 'Medical Authority',
    description: 'Kurumsal, SEO-heavy, güven sinyalleri yüksek.',
  },
  'phone-mockup': {
    title: 'Phone Mockup',
    description: 'Before/After slider ile telefon mockup tasarımı.',
  },
};

// Service Types
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
  featured?: boolean;
  keywords: string[];
}

// Doctor Types
export interface Doctor {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  image: string;
  specializations: string[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  content: string;
  rating: number;
  date: string;
  avatar?: string;
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Before/After Types
export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  beforeImage: string;
  afterImage: string;
  description?: string;
}

// Contact Types
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  district: string;
  city: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

// SEO Types
export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
