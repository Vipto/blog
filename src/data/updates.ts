import { ProductUpdate } from '@/types';

export const productUpdates: ProductUpdate[] = [
  {
    id: 'update-sep-2026',
    period: 'September 2026',
    headline: 'Current Direction: Refining Request-Response Latency and Seller Interface',
    status: 'Under Active Iteration',
    summary: 'Focusing on optimizing the end-to-end latency of the "Check Availability" notification pipeline and testing simplified seller dashboard interactions on entry-level Android devices.',
    explored: [
      'Different notification dispatch strategies to ensure sellers receive availability requests even in low-power or background states.',
      'A simplified single-screen seller interface that allows responding with "Available" or "Not Available" in under two seconds.',
      'Customer search ranking based on verified geographic proximity rather than promotional bidding.'
    ],
    changed: [
      'Replaced multi-step confirmation modals with a direct, unambiguous two-button action for sellers.',
      'Refined the customer search UI to immediately emphasize whether store location distance is within walking radius.',
      'Restructured client cache invalidation so product availability statuses do not show stale confirmations.'
    ],
    learned: [
      'Shop owners are significantly more responsive when the action requires zero typing during busy shop hours.',
      'Customers value a clear "Not Available" response much more than silence or unconfirmed listings, as it immediately saves them an unnecessary trip.'
    ],
    tag: 'Alpha Iteration'
  },
  {
    id: 'update-aug-2026',
    period: 'August 2026',
    headline: 'Product Experimentation: Testing the Request-Based Workflow with Local Retailers',
    status: 'Currently Experimenting',
    summary: 'Conducted small-scale field tests with neighborhood electronics, stationary, and apparel stores to validate whether shopkeepers would actively respond to real-time customer availability queries.',
    explored: [
      'Manual vs. automated catalog photo upload workflows for store owners.',
      'Notification sounds and prominent visual alerts for incoming availability requests on merchant phones.',
      'Customer behavior when given estimated response time windows.'
    ],
    changed: [
      'Removed complex SKU management requirements; allowed sellers to upload photos and product names without requiring barcode scanners or extensive metadata.',
      'Added an auto-expiration window (30 minutes) on availability queries so sellers do not receive outdated requests.'
    ],
    learned: [
      'Complex inventory software is the #1 barrier for small retailers. A lightweight photo-and-request model had a 4x higher adoption rate in initial trials.',
      'Students and hostel residents repeatedly confirmed that finding specialty items (cables, specific medicines, textbooks) locally was their largest pain point.'
    ],
    tag: 'Field Experiments'
  },
  {
    id: 'update-jul-2026',
    period: 'July 2026',
    headline: 'Early Development: Customer & Seller Dual-App Architecture',
    status: 'Early Development',
    summary: 'Built the initial architectural foundation decoupling the Customer App (discovery, search, request trigger) from the Seller App (inventory capture, request inbox, store profile).',
    explored: [
      'Monolithic vs decoupled client application structures for consumer and merchant personas.',
      'Lightweight geospatial querying using geohashes to compute nearby stores efficiently without heavy server overhead.',
      'Authentication flows suited for phone number verification with minimal onboarding friction.'
    ],
    changed: [
      'Committed to two distinct native/hybrid mobile client applications to keep app size minimal and specialized.',
      'Established core data models: Stores, Products, AvailabilityRequests, and StoreVerifications.'
    ],
    learned: [
      'Keeping customer and seller applications strictly separated allows for vastly different UI optimization targets (rich discovery for buyers vs high-contrast utility for sellers).'
    ],
    tag: 'System Architecture'
  },
  {
    id: 'update-jun-2026',
    period: 'June 2026',
    headline: 'Conceptualization: Framing the Hyperlocal Discovery Gap',
    status: 'Tested & Refined',
    summary: 'Formulated the foundational philosophy of Vipto: "Search Online. Confirm Availability. Buy Offline." Defined why existing map directories and e-commerce platforms leave offline product discovery broken.',
    explored: [
      'The disconnect between map search (shows business, not product inventory) and delivery apps (focuses on warehouses and delayed delivery).',
      'Interviews with 40+ local consumers who made unnecessary trips to physical stores only to find items out of stock.'
    ],
    changed: [
      'Formulated the core initiative thesis and drafted the initial product specification and engineering roadmap.',
      'Established the transparency and open journal commitment to document the entire development journey publicly.'
    ],
    learned: [
      'Over 75% of interviewees stated they prefer buying urgent items in-person if they can be certain the shop has it in stock before leaving home.'
    ],
    tag: 'Product Discovery'
  }
];
