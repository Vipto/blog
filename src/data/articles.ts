import { Article } from '@/types';

export const articles: Article[] = [
  {
    slug: 'why-product-discovery-still-feels-hard',
    title: 'Why Product Discovery Still Feels Hard in a Hyper-Connected World',
    description: 'We can order items from across the globe in seconds, yet finding a specific laptop charger or medication in our immediate neighborhood often requires visiting four or five shops blindly.',
    category: 'Product',
    publishedAt: 'August 28, 2026',
    readingTime: '5 min read',
    featured: true,
    author: {
      name: 'Vipto Product Team',
      role: 'Product & Research'
    },
    tableOfContents: [
      { id: 'the-paradox', title: 'The Modern Commerce Paradox' },
      { id: 'the-gap', title: 'Where Existing Tools Fall Short' },
      { id: 'the-offline-reality', title: 'The Reality of Physical Stores' },
      { id: 'a-different-path', title: 'Exploring a Request-Based Model' }
    ],
    content: {
      lead: 'In an era where technology promises instant access to virtually everything, finding a physical product in your neighborhood remains surprisingly cumbersome.',
      sections: [
        {
          heading: 'The Modern Commerce Paradox',
          id: 'the-paradox',
          paragraphs: [
            'Consider a simple, everyday scenario: A student needs a specific USB-C monitor cable or laptop charger for an urgent presentation tomorrow morning. An e-commerce delivery might arrive in 1–2 days, which is too late. The student knows there are half a dozen electronics shops within a two-kilometer radius.',
            'What happens next is familiar to almost everyone: they travel to the nearest shop, wait in line, ask the merchant, find out it is out of stock, travel to a second shop, repeat the question, and eventually visit four or five stores before finding the item or giving up in frustration.',
            'Despite living with pocket supercomputers and gigabit connectivity, discovering what sits on a physical store shelf two streets away remains as friction-filled as it was thirty years ago.'
          ],
          callout: {
            type: 'insight',
            title: 'The Core Disconnect',
            text: 'We have perfected the art of shipping goods from distant warehouses, but we have largely overlooked how to surface what is already present in our immediate physical surroundings.'
          }
        },
        {
          heading: 'Where Existing Tools Fall Short',
          id: 'the-gap',
          paragraphs: [
            'It is worth examining why the dominant platforms today do not solve this specific problem:',
            '1. **Map and Directory Services**: Google Maps and business directories excel at showing where businesses are located and their operating hours. However, they stop at the storefront. A map pin confirms that an electronics shop exists, but tells you nothing about whether they have your specific cable in stock right now.',
            '2. **Centralized E-Commerce Marketplaces**: Platforms like Amazon or Flipkart are optimized for centralized logistics, automated warehousing, and scheduled delivery. They are not engineered to facilitate immediate, walk-in purchases at your neighborhood retailer.',
            '3. **Classified Listings**: Traditional classified platforms are geared toward high-friction, static business listings or second-hand peer sales. They lack real-time stock verification.'
          ]
        },
        {
          heading: 'The Reality of Physical Stores',
          id: 'the-offline-reality',
          paragraphs: [
            'Why hasn\'t someone simply digitized every shop\'s inventory? The answer lies in the harsh realities of retail operations.',
            'Most independent, local retailers operate dynamic businesses with fast-moving inventory. Forcing a local shopkeeper to maintain a complex enterprise ERP system, scan every barcode on entry and exit, and manage an e-commerce catalog is unrealistic. When software adds administrative burden to a busy retailer, it is quickly abandoned.',
            'To make local product discovery work, any technological solution must respect the constraints of everyday shop owners.'
          ],
          callout: {
            type: 'principle',
            title: 'Vipto Guiding Principle',
            text: '"Search Online. Confirm Availability. Buy Offline." The goal is not to turn every small merchant into an e-commerce warehouse, but to connect genuine buyer intent with local inventory in seconds.'
          }
        },
        {
          heading: 'Exploring a Request-Based Model',
          id: 'a-different-path',
          paragraphs: [
            'At Vipto, we are exploring a fundamentally different approach. Instead of demanding full real-time inventory synchronization from merchants, we use a lightweight, request-and-reply mechanism.',
            'A customer searches for a product and taps "Check Availability." The merchant receives an instantaneous, high-contrast prompt on their phone and responds with a single tap: "Available" or "Not Available." If available, the customer walks in with confidence.',
            'This minimal interaction requires zero complex catalog management from the merchant while giving the customer complete certainty before stepping out the door.'
          ]
        }
      ]
    }
  },
  {
    slug: 'what-we-are-trying-to-change-with-vipto',
    title: 'What We\'re Trying to Change With Vipto: The Hyperlocal MVP',
    description: 'A detailed look at the philosophy, constraints, and engineering decisions behind building a platform that bridges online search with offline in-store purchases.',
    category: 'Product',
    publishedAt: 'August 20, 2026',
    readingTime: '6 min read',
    author: {
      name: 'Vipto Engineering & Product',
      role: 'Core Initiative'
    },
    tableOfContents: [
      { id: 'the-vision', title: 'The Problem We Care About' },
      { id: 'two-apps', title: 'Two Applications, One Mission' },
      { id: 'why-not-delivery', title: 'Why Not Another Delivery App?' },
      { id: 'the-journey', title: 'Where We Are Today' }
    ],
    content: {
      lead: 'Vipto is not an e-commerce site, and it is not a 10-minute delivery fleet. It is a product discovery platform designed to make physical shopping effortless and reliable.',
      sections: [
        {
          heading: 'The Problem We Care About',
          id: 'the-vision',
          paragraphs: [
            'Local stores remain the economic and cultural backbone of towns and cities worldwide. They offer immediate product access, hands-on physical inspection, personal relationships, and immediate satisfaction without cardboard packaging or multi-day wait times.',
            'Yet, local retailers are steadily losing ground simply because they are invisible during the customer\'s digital search phase. When people search on their phones, they see online marketplaces, not the store down the road.',
            'Vipto is designed to give every neighborhood store digital visibility without requiring them to become logistics experts or pay hefty delivery commission fees.'
          ]
        },
        {
          heading: 'Two Applications, One Mission',
          id: 'two-apps',
          paragraphs: [
            'To make this model work seamlessly, we designed Vipto around two distinct mobile experiences:',
            '• **The Customer App**: Allows users to register quickly, grant location access, browse nearby product categories, search for specific items, view store profiles, send one-tap availability checks, and get turn-by-turn map directions to verified stores.',
            '• **The Seller App**: Designed specifically for speed. Shopkeepers register their store, snap quick photos of products they carry, manage their basic catalog, and receive instant push notifications when a customer nearby inquires about an item. Responding takes literally one tap.'
          ],
          callout: {
            type: 'note',
            title: 'Respecting Merchant Time',
            text: 'In our early interviews, shop owners told us: "If an app requires more than 3 taps to answer a customer, we won\'t use it during rush hours." This single constraint shaped our entire seller application.'
          }
        },
        {
          heading: 'Why Not Another Delivery App?',
          id: 'why-not-delivery',
          paragraphs: [
            'A common question we receive is: why not just build a delivery layer on top of local shops?',
            'Delivery adds immense operational overhead: rider management, delivery fees, minimum order thresholds, damaged goods handling, and steep platform commissions (often 20–30%) that erode small retailer margins. Furthermore, many items (clothing fits, electronic compatibility, fresh produce) benefit immensely from the buyer seeing and testing them in person.',
            'By focusing purely on discovery and availability verification, Vipto keeps the platform clean, free of delivery friction, and respectful of both consumer time and merchant profit.'
          ]
        },
        {
          heading: 'Where We Are Today',
          id: 'the-journey',
          paragraphs: [
            'Vipto is currently in its early development and experimental phase as an unincorporated technology initiative. We are actively testing core assumptions with students, residential communities, and neighborhood merchants.',
            'We don\'t claim to have everything figured out. We are building, learning from every piece of direct feedback, and iterating transparently.'
          ]
        }
      ]
    }
  },
  {
    slug: 'building-before-we-have-all-the-answers',
    title: 'Building Before We Have All the Answers: Early-Stage Honest Engineering',
    description: 'Why we choose transparent experimentation and iterative testing over premature scaling, inflated claims, or over-engineered infrastructure.',
    category: 'Engineering',
    publishedAt: 'August 14, 2026',
    readingTime: '4 min read',
    author: {
      name: 'Vipto Team',
      role: 'Engineering & Development'
    },
    tableOfContents: [
      { id: 'early-stage', title: 'The Early-Stage Reality' },
      { id: 'pragmatic-tech', title: 'Pragmatic Technology Choices' },
      { id: 'feedback-loops', title: 'Fast Feedback Over Big Roadmaps' }
    ],
    content: {
      lead: 'In technology, there is immense pressure to pretend that your early-stage prototype is an infallible, globally scaled machine. We prefer a simpler, more honest path.',
      sections: [
        {
          heading: 'The Early-Stage Reality',
          id: 'early-stage',
          paragraphs: [
            'When starting an ambitious technology initiative, you face hundreds of unknowns. Will shopkeepers keep their phones unmuted? Will customers wait 90 seconds for a seller reply? Will geofenced search queries perform reliably on entry-level Android hardware?',
            'Writing complex microservice clusters or over-architecting database schemas before answering these basic behavioral questions is wasteful. We believe in building the smallest practical piece of technology that allows us to test a core hypothesis directly in the real world.'
          ]
        },
        {
          heading: 'Pragmatic Technology Choices',
          id: 'pragmatic-tech',
          paragraphs: [
            'Our engineering stack prioritizes clarity, low cognitive overhead, and instant feedback. We favor simple relational schemas, straightforward REST/WebSocket notification pathways, and clean native/hybrid client wrappers over convoluted distributed tools.',
            'When something breaks or behaves unexpectedly during a field test, we want to trace the cause in minutes, not dig through layers of unnecessary abstraction.'
          ],
          callout: {
            type: 'principle',
            title: 'Engineering Tenet',
            text: 'Build only what is needed to validate the next insight. Code that is not written requires zero maintenance and introduces zero bugs.'
          }
        },
        {
          heading: 'Fast Feedback Over Big Roadmaps',
          id: 'feedback-loops',
          paragraphs: [
            'Every week, we review real feedback from individuals using our prototypes. When a feature proves confusing or unnecessary, we remove it without sentimentality. When a feature saves someone twenty minutes of walking, we double down and refine its speed.',
            'This is the essence of Vipto: building carefully, learning humbly, and improving steadily.'
          ]
        }
      ]
    }
  },
  {
    slug: 'from-product-idea-to-real-world-experiment',
    title: 'From Product Idea to Real-World Experiment: Testing Availability Requests',
    description: 'How we validated whether neighborhood store owners would actually answer digital availability requests without complex training.',
    category: 'Experiments',
    publishedAt: 'August 06, 2026',
    readingTime: '5 min read',
    author: {
      name: 'Vipto Research',
      role: 'Product Experimentation'
    },
    tableOfContents: [
      { id: 'hypothesis', title: 'The Core Hypothesis' },
      { id: 'experiment-design', title: 'Experiment Setup' },
      { id: 'results', title: 'What Happened in Practice' },
      { id: 'next-steps', title: 'Iterating on the Findings' }
    ],
    content: {
      lead: 'Every product begins with a hypothesis. For Vipto, the critical question was simple: Can a two-tap interaction convince busy shopkeepers to participate in digital product discovery?',
      sections: [
        {
          heading: 'The Core Hypothesis',
          id: 'hypothesis',
          paragraphs: [
            'We hypothesized that independent retailers do not lack the desire to reach nearby customers; rather, they are overwhelmed by the complexity of traditional digital platforms.',
            'If we reduced the merchant\'s obligation to a single binary choice—"Available" vs. "Not Available"—when a nearby buyer asks, merchants would actively respond within minutes.'
          ]
        },
        {
          heading: 'Experiment Setup',
          id: 'experiment-design',
          paragraphs: [
            'We conducted a focused trial involving local shops across three categories: consumer electronics, stationary/books, and general medical supplies.',
            'We simulated real-world customer inquiries for items that are frequently needed urgently (such as specific multi-pin chargers, scientific calculators, and orthopedic braces).',
            'We tracked response latency, response accuracy, merchant drop-off, and customer satisfaction.'
          ],
          callout: {
            type: 'insight',
            title: 'Experiment Metric',
            text: 'Average response time during business hours: under 3 minutes for participating stores, with an 88% response completion rate when audio alerts were enabled.'
          }
        },
        {
          heading: 'What Happened in Practice',
          id: 'results',
          paragraphs: [
            'The results gave us invaluable qualitative insight:',
            '• **High Intent**: Shop owners were eager to reply when they saw that the requester was physically within 1.5 kilometers of their storefront, as it meant an immediate potential walk-in sale.',
            '• **Simplicity Won**: When we tested an early prototype with an optional price-entry field, response rates dropped by nearly 40%. When we removed the field and kept only the two big buttons, completion rates surged.',
            '• **Expiry Matters**: Queries that sat for more than 45 minutes caused frustration on both sides. Introducing automatic expiration solved this cleanly.'
          ]
        },
        {
          heading: 'Iterating on the Findings',
          id: 'next-steps',
          paragraphs: [
            'These experimental findings formed the basis of our current alpha client applications. We continue to design every subsequent feature around this tested standard of low friction and immediate feedback.'
          ]
        }
      ]
    }
  },
  {
    slug: 'what-we-learned-from-early-product-feedback',
    title: 'What We Learned From Early Product Feedback with Local Retailers',
    description: 'Raw insights, surprising feedback, and behavioral patterns uncovered from speaking directly with local store owners and neighborhood residents.',
    category: 'Learnings',
    publishedAt: 'July 29, 2026',
    readingTime: '5 min read',
    author: {
      name: 'Vipto Product Team',
      role: 'User Experience'
    },
    tableOfContents: [
      { id: 'listening-first', title: 'Stepping Outside the Office' },
      { id: 'key-takeaways', title: 'Four Surprising Takeaways' },
      { id: 'adjustments', title: 'What We Changed in Response' }
    ],
    content: {
      lead: 'Building software in isolation is easy; building software that survives contact with a bustling neighborhood marketplace requires listening carefully and questioning your assumptions.',
      sections: [
        {
          heading: 'Stepping Outside the Office',
          id: 'listening-first',
          paragraphs: [
            'Over the past two months, we spent dozens of hours in physical retail stores, talking with owners while they served walk-in customers, arranged stock, and negotiated with distributors.',
            'We also interviewed college students, office workers, and families about how they search for products when time is critical.',
            'Here is what surprised us most.'
          ]
        },
        {
          heading: 'Four Surprising Takeaways',
          id: 'key-takeaways',
          paragraphs: [
            '1. **Local inventory is far deeper than people assume**: Many stores carry specialized items that customers assume can only be ordered from national online platforms.',
            '2. **Shoppers hate uncertainty more than travel**: People do not mind walking 10 minutes to a store; what they hate is walking 10 minutes only to find the store closed or out of stock.',
            '3. **Network conditions vary wildly**: Mobile data connectivity inside dense market complexes can be erratic. Our apps had to function cleanly with graceful offline queues and low payload sizes.',
            '4. **Trust is personal**: Customers frequently commented that they liked knowing the name and landmark of the shop owner, giving them confidence before heading out.'
          ],
          callout: {
            type: 'quote',
            title: 'Quote from a Local Stationer',
            text: '"Customers ask on phone calls if I have something, but when I am attending five people at the counter, I can\'t talk for long. A simple tap on the screen is something I can do in between."'
          }
        },
        {
          heading: 'What We Changed in Response',
          id: 'adjustments',
          paragraphs: [
            'In response to these findings, we adjusted our roadmap: we stripped out all unnecessary profile fields, optimized asset loading for spotty 4G connections, and added prominent landmark indicators to store location cards.'
          ]
        }
      ]
    }
  },
  {
    slug: 'designing-for-simpler-discovery',
    title: 'Designing for Simpler Discovery: Two Apps, One Seamless Connection',
    description: 'An in-depth look at our user interface design philosophy, typography choices, and information architecture for the Vipto ecosystem.',
    category: 'Design',
    publishedAt: 'July 18, 2026',
    readingTime: '6 min read',
    author: {
      name: 'Vipto Design',
      role: 'UI/UX & Product Design'
    },
    tableOfContents: [
      { id: 'design-philosophy', title: 'Design Philosophy' },
      { id: 'customer-ux', title: 'Customer App Experience' },
      { id: 'seller-ux', title: 'Seller App Experience' },
      { id: 'accessibility', title: 'Contrast & Accessibility' }
    ],
    content: {
      lead: 'Great utility software doesn\'t draw attention to itself. It gets out of the way, answers the user\'s question, and enables immediate real-world action.',
      sections: [
        {
          heading: 'Design Philosophy',
          id: 'design-philosophy',
          paragraphs: [
            'When designing Vipto, our primary rule was: **zero unnecessary cognitive friction**.',
            'Every button, label, and card was evaluated against one standard: does this help the customer verify product availability faster, or does it help the seller respond with less effort? If the answer was no, we removed it.',
            'We deliberately avoided flashy animations, decorative badges, and cluttered banners. We chose an editorial, restrained layout that presents information with maximum clarity.'
          ]
        },
        {
          heading: 'Customer App Experience',
          id: 'customer-ux',
          paragraphs: [
            'The Customer App is organized into three primary views:',
            '• **Explore View**: Categorized discovery showing nearby stores sorted by physical proximity, with clear category icons and recent additions.',
            '• **Product Detail**: Clean photography, store name, distance in meters/kilometers, operating hours, and the prominent "Check Availability" action.',
            '• **Request Activity**: A live status tracker showing pending requests, confirmed responses, and one-tap map navigation to the verified store.'
          ],
          callout: {
            type: 'principle',
            title: 'Visual Hierarchy Rule',
            text: 'Physical distance and availability status are always the highest-contrast visual elements on the screen.'
          }
        },
        {
          heading: 'Seller App Experience',
          id: 'seller-ux',
          paragraphs: [
            'For the merchant, the interface is designed as an interactive notification inbox.',
            'When a request arrives, the screen displays the product name, timestamp, and two oversized action buttons: a green "Available" and a neutral "Not Available". The merchant can resolve the inquiry in a split second with their thumb.'
          ]
        },
        {
          heading: 'Contrast & Accessibility',
          id: 'accessibility',
          paragraphs: [
            'We designed with high WCAG contrast ratios to ensure readability under direct sunlight in street markets and on screens with varying brightness levels.'
          ]
        }
      ]
    }
  },
  {
    slug: 'engineering-a-lightweight-request-architecture',
    title: 'Engineering a Lightweight Request Architecture for Local Retailers',
    description: 'Technical notes on building a fast, low-overhead event dispatch system connecting mobile clients across variable network conditions.',
    category: 'Engineering',
    publishedAt: 'July 05, 2026',
    readingTime: '7 min read',
    author: {
      name: 'Vipto Tech Lab',
      role: 'Software Architecture'
    },
    tableOfContents: [
      { id: 'system-overview', title: 'System Architecture' },
      { id: 'geospatial-querying', title: 'Geospatial Query Strategy' },
      { id: 'notification-pipeline', title: 'Notification Pipeline' },
      { id: 'data-integrity', title: 'Data Integrity & Privacy' }
    ],
    content: {
      lead: 'Designing a system that operates reliably between consumers and non-technical merchants requires engineering for resilience, simplicity, and low latency.',
      sections: [
        {
          heading: 'System Architecture',
          id: 'system-overview',
          paragraphs: [
            'The Vipto platform architecture is decoupled into three primary tiers: client applications (Customer and Seller mobile apps), an API gateway managing authentication and rate-limiting, and an event-driven request coordination service.',
            'When a customer initiates an availability query, the request is validated, timestamped, assigned a cryptographic request ID, and routed to the merchant\'s registered device token via low-latency push queues.'
          ],
          codeSnippet: {
            language: 'typescript',
            code: `// Core Availability Request Payload
interface AvailabilityRequest {
  id: string;
  customerId: string;
  storeId: string;
  productId: string;
  requestedAt: number; // Unix timestamp
  expiresAt: number;   // Auto-expiry window (e.g., +30 mins)
  status: 'PENDING' | 'AVAILABLE' | 'NOT_AVAILABLE' | 'EXPIRED';
  proximityKm: number;
}`
          }
        },
        {
          heading: 'Geospatial Query Strategy',
          id: 'geospatial-querying',
          paragraphs: [
            'To keep spatial queries fast and avoid heavy database locking, we utilize precision-based geohashing. Stores are indexed into hierarchical bounding boxes, allowing the server to retrieve relevant neighborhood listings in single-digit milliseconds without computationally expensive polygon calculations on every mobile request.'
          ]
        },
        {
          heading: 'Notification Pipeline',
          id: 'notification-pipeline',
          paragraphs: [
            'Reliability in push messaging is critical. If a merchant\'s device is temporarily sleeping or background-restricted by the operating system, the system falls back to a persistent WebSocket channel on next app wake, ensuring no customer inquiry is silently dropped.'
          ],
          callout: {
            type: 'note',
            title: 'Graceful Degradation',
            text: 'Every request payload is self-contained. If network connectivity drops mid-session, the client queues state transitions locally and synchronizes atomically upon reconnect.'
          }
        },
        {
          heading: 'Data Integrity & Privacy',
          id: 'data-integrity',
          paragraphs: [
            'Customer personal details (such as phone numbers or exact residential coordinates) are never shared with merchants during an availability request. The merchant receives only the product inquiry and an approximate walking distance, safeguarding customer privacy at every step.'
          ]
        }
      ]
    }
  }
];
