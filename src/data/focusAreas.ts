import { FocusArea } from '@/types';

export const focusAreas: FocusArea[] = [
  {
    title: 'Product Discovery',
    description: 'Making the process of finding and exploring products in nearby stores intuitive and dependable.',
    iconName: 'Search',
    bullets: [
      'Store-level inventory visibility without cumbersome ERPs',
      'One-tap availability request mechanisms',
      'Contextual search by product category and local vicinity'
    ],
    details: 'Bridging the offline information gap so people know exactly which local storefront has the item they need before stepping out.'
  },
  {
    title: 'Mobile & Web Technology',
    description: 'Building lightweight, reliable, low-bandwidth applications across mobile and modern web.',
    iconName: 'Smartphone',
    bullets: [
      'Dual-app architecture (Customer & Seller platforms)',
      'Sub-second push notifications for instant stock checks',
      'Minimalist offline-first mobile interactions'
    ],
    details: 'Ensuring that even small mom-and-pop retailers with basic smartphones can manage requests in two taps.'
  },
  {
    title: 'User Experience',
    description: 'Reducing friction, cognitive load, and unnecessary steps in the shopping journey.',
    iconName: 'Compass',
    bullets: [
      'Zero-fluff request-and-reply paradigm',
      'Clear binary responses (Available / Not Available)',
      'Direct navigation to verified physical stores'
    ],
    details: 'Focusing entirely on eliminating the multi-store search fatigue that frustrates everyday shoppers.'
  },
  {
    title: 'Software Engineering',
    description: 'Constructing maintainable, scalable, practical technology with clean modular design.',
    iconName: 'Cpu',
    bullets: [
      'Resilient backend services with event-driven notifications',
      'Type-safe architectures and decoupled microservices',
      'Auditable data models designed for continuous evolution'
    ],
    details: 'Writing pragmatic, well-tested code that prioritizes uptime, speed, and real-world utility over hype.'
  },
  {
    title: 'Product Innovation',
    description: 'Experimenting with new approaches to everyday offline retail and community discovery problems.',
    iconName: 'Sparkles',
    bullets: [
      'Hyperlocal discovery indexing algorithms',
      'Lightweight catalog digitization for local retailers',
      'Fast validation feedback loops with local communities'
    ],
    details: 'Iterating rapidly with authentic customer and seller feedback to test what truly works in the real world.'
  }
];
