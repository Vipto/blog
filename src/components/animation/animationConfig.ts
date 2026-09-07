export interface SneakerData {
  id: string;
  name: string;
  category: string;
  brand: string;
  distance: string;
  confidence: number;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  glowColor: string;
  modelType: 'runner' | 'hightop' | 'minimal' | 'tech' | 'trail';
}

export const SNEAKER_PRODUCTS: SneakerData[] = [
  {
    id: 'prod-01',
    name: 'AeroGlide Pro',
    category: 'Performance Runner',
    brand: 'Vipto Studio',
    distance: '1.8 km away',
    confidence: 99.8,
    primaryColor: '#3b82f6',
    secondaryColor: '#1d4ed8',
    accentColor: '#60a5fa',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    modelType: 'runner',
  },
  {
    id: 'prod-02',
    name: 'HyperRetro Hi',
    category: 'Lifestyle High-Top',
    brand: 'Vipto Studio',
    distance: '2.3 km away',
    confidence: 99.4,
    primaryColor: '#ef4444',
    secondaryColor: '#b91c1c',
    accentColor: '#f87171',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    modelType: 'hightop',
  },
  {
    id: 'prod-03',
    name: 'Veloce Minimal',
    category: 'Leather Sneaker',
    brand: 'Vipto Studio',
    distance: '1.2 km away',
    confidence: 99.9,
    primaryColor: '#10b981',
    secondaryColor: '#047857',
    accentColor: '#34d399',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    modelType: 'minimal',
  },
  {
    id: 'prod-04',
    name: 'NeonPulse 90',
    category: 'Cushioned Trainer',
    brand: 'Vipto Studio',
    distance: '3.1 km away',
    confidence: 98.7,
    primaryColor: '#f59e0b',
    secondaryColor: '#b45309',
    accentColor: '#fbbf24',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    modelType: 'tech',
  },
  {
    id: 'prod-05',
    name: 'Apex Trail-X',
    category: 'All-Terrain Explorer',
    brand: 'Vipto Studio',
    distance: '0.9 km away',
    confidence: 99.6,
    primaryColor: '#8b5cf6',
    secondaryColor: '#6d28d9',
    accentColor: '#a78bfa',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    modelType: 'trail',
  },
];

export const SCENE_TIMINGS = {
  REAL_PRODUCTS: 1800,     // Scene 0: Boutique shelf presentation
  ONE_PHOTO: 1800,         // Scene 1: Viewfinder gliding in, shutter press, flash
  AI_DETECTION: 2200,      // Scene 2: Volumetric scan beam + bounding boxes
  ENHANCEMENT: 1800,       // Scene 3: Clean background removal & studio lighting
  CATALOG_CREATION: 2400,  // Scene 4: 5 glassmorphic product cards assembly
  LOCAL_DISCOVERY: 2200,   // Scene 5: 5km radar map & customer lock-on
  CHECK_AVAILABILITY: 1900,// Scene 6: Interactive tap & Available confirmation
  VISIT_STORE_LOOP: 1500,  // Scene 7: Visit store prompt & seamless zoom back
};

export const SPRING_PRESETS = {
  snappy: { type: 'spring' as const, stiffness: 380, damping: 26, mass: 0.8 },
  gentle: { type: 'spring' as const, stiffness: 220, damping: 24, mass: 1 },
  bouncy: { type: 'spring' as const, stiffness: 450, damping: 18, mass: 0.7 },
  cinematic: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  subtle: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
};
