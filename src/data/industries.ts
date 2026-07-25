export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  overview: string;
  challenges: { title: string; description: string }[];
  solutions: { icon: string; title: string; description: string }[];
  technologies: string[];
  stats: { metric: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'finance',
    title: 'Financial Services & FinTech',
    shortDescription: 'Secure, compliant, and high-performance financial software.',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80',
    overview: 'The financial sector demands zero-compromise engineering. We build secure, compliant, and ultra-low latency platforms for banks, trading firms, and FinTech startups. From algorithmic trading dashboards to secure payment gateways, we engineer systems that handle complex financial logic with mathematical precision.',
    challenges: [
      { title: 'Regulatory Compliance', description: 'Navigating complex global financial regulations (PCI-DSS, GDPR, SEC).' },
      { title: 'Legacy Systems', description: 'Aging mainframe infrastructure that cannot integrate with modern APIs.' },
      { title: 'Security Threats', description: 'Constant sophisticated cyber attacks targeting financial data.' }
    ],
    solutions: [
      { icon: 'ShieldCheck', title: 'Zero-Trust Architecture', description: 'Implementing military-grade encryption and access controls.' },
      { icon: 'Activity', title: 'High-Frequency Processing', description: 'Systems capable of processing thousands of transactions per second.' },
      { icon: 'Link', title: 'Legacy Modernization', description: 'Building secure API layers over legacy mainframe systems.' }
    ],
    technologies: ['Go', 'Rust', 'PostgreSQL', 'Kafka', 'AWS', 'Kubernetes'],
    stats: [
      { metric: '99.999%', label: 'Uptime Reliability' },
      { metric: '<10ms', label: 'Transaction Latency' },
      { metric: '100%', label: 'PCI-DSS Compliant' },
      { metric: 'AES-256', label: 'Data Encryption' }
    ],
    faqs: [
      { question: 'How do you handle PCI compliance?', answer: 'We build systems utilizing tokenization and secure enclaves so sensitive cardholder data never touches your primary servers, simplifying your compliance scope.' },
      { question: 'Can you integrate with Plaid/Stripe?', answer: 'Yes, we have deep expertise integrating with modern FinTech APIs including Stripe, Plaid, and Dwolla.' }
    ]
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & MedTech',
    shortDescription: 'HIPAA-compliant platforms for modern patient care.',
    heroImage: 'https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&w=1400&q=80',
    overview: 'Technology is transforming patient outcomes. We engineer HIPAA-compliant telehealth platforms, electronic health record (EHR) integrations, and AI-driven diagnostic tools. We build the secure infrastructure that allows healthcare providers to deliver better care, faster.',
    challenges: [
      { title: 'Data Privacy', description: 'Strict requirements for HIPAA compliance and PHI security.' },
      { title: 'Interoperability', description: 'Siloed data across different hospital systems and EHR providers.' },
      { title: 'User Experience', description: 'Clunky medical software that leads to physician burnout.' }
    ],
    solutions: [
      { icon: 'Lock', title: 'HIPAA-Compliant Infrastructure', description: 'Secure environments designed specifically for PHI.' },
      { icon: 'Database', title: 'EHR Integrations', description: 'Seamless connections with Epic, Cerner, and other systems via HL7/FHIR.' },
      { icon: 'Video', title: 'Telehealth Platforms', description: 'Secure, high-quality video consultation applications.' }
    ],
    technologies: ['Python', 'React Native', 'AWS Healthcare', 'PostgreSQL', 'WebRTC'],
    stats: [
      { metric: '100%', label: 'HIPAA Compliant' },
      { metric: 'HL7/FHIR', label: 'Standards Ready' },
      { metric: 'Zero', label: 'Data Breaches' },
      { metric: 'E2E', label: 'Encryption' }
    ],
    faqs: [
      { question: 'Are your solutions HIPAA compliant?', answer: 'Yes. We architect solutions with BAA-covered AWS services, strict audit logging, and PHI encryption at rest and in transit.' },
      { question: 'Do you have experience with FHIR?', answer: 'Yes, we utilize FHIR standards to build interoperable applications that can communicate with major EHR systems.' }
    ]
  },
  {
    slug: 'retail',
    title: 'Retail & E-commerce',
    shortDescription: 'High-conversion platforms for global commerce.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80',
    overview: 'Retail is moving at light speed. We build headless e-commerce platforms, inventory management systems, and omnichannel retail experiences that scale massively during peak events like Black Friday. We focus on conversion rates, load speed, and seamless checkout flows.',
    challenges: [
      { title: 'Traffic Spikes', description: 'Website crashes during high-traffic sales events.' },
      { title: 'Inventory Sync', description: 'Disconnect between online stores and physical warehouse inventory.' },
      { title: 'Cart Abandonment', description: 'Slow, complicated checkout processes losing sales.' }
    ],
    solutions: [
      { icon: 'ShoppingCart', title: 'Headless E-commerce', description: 'Decoupled frontends (Next.js) for lightning-fast shopping.' },
      { icon: 'Package', title: 'Real-time Inventory', description: 'Event-driven architecture syncing stock across all channels.' },
      { icon: 'CreditCard', title: 'Frictionless Checkout', description: 'Optimized payment flows with one-click purchasing.' }
    ],
    technologies: ['Next.js', 'Shopify Plus', 'Stripe', 'Redis', 'Vercel'],
    stats: [
      { metric: '<1s', label: 'Page Load Time' },
      { metric: '99.99%', label: 'Uptime During Peaks' },
      { metric: '+35%', label: 'Conversion Lift' },
      { metric: 'Omni', label: 'Channel Sync' }
    ],
    faqs: [
      { question: 'What is headless commerce?', answer: 'Headless commerce separates the frontend storefront from the backend e-commerce engine (like Shopify), allowing for drastically faster page loads and custom user experiences.' },
      { question: 'Can you handle Black Friday traffic?', answer: 'Yes. Our architectures utilize edge caching and auto-scaling to effortlessly handle massive, sudden spikes in concurrent users.' }
    ]
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing & Industry 4.0',
    shortDescription: 'Smart factory solutions and supply chain tracking.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80',
    overview: 'The factory floor is going digital. We build Industrial IoT (IIoT) dashboards, predictive maintenance algorithms, and supply chain visibility platforms. We bridge the gap between physical machinery and cloud analytics.',
    challenges: [
      { title: 'Machine Downtime', description: 'Unexpected equipment failures halting production.' },
      { title: 'Data Silos', description: 'Factory machines generating data that is never analyzed.' },
      { title: 'Supply Chain Blind Spots', description: 'Lack of visibility into material transit and delays.' }
    ],
    solutions: [
      { icon: 'Activity', title: 'Predictive Maintenance', description: 'AI models that predict failures before they happen.' },
      { icon: 'Cpu', title: 'IIoT Dashboards', description: 'Real-time visualization of factory floor metrics.' },
      { icon: 'Map', title: 'Supply Chain Tracking', description: 'End-to-end visibility of materials via GPS and RFID integration.' }
    ],
    technologies: ['Python', 'AWS IoT', 'Time-series DB', 'React', 'Kafka'],
    stats: [
      { metric: '-40%', label: 'Unplanned Downtime' },
      { metric: 'Real-time', label: 'Machine Analytics' },
      { metric: '100%', label: 'Supply Visibility' },
      { metric: '+15%', label: 'OEE Improvement' }
    ],
    faqs: [
      { question: 'Can you integrate with older machinery?', answer: 'Yes, through edge computing gateways and retrofit sensors, we can bring legacy machines into the modern IIoT ecosystem.' },
      { question: 'What is OEE?', answer: 'Overall Equipment Effectiveness. Our dashboards automatically calculate this crucial metric in real-time based on availability, performance, and quality data.' }
    ]
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & PropTech',
    shortDescription: 'Digital platforms for property management and sales.',
    heroImage: 'https://images.unsplash.com/photo-1560518836-315eb20ce0a8?auto=format&fit=crop&w=1400&q=80',
    overview: 'Modernizing the property lifecycle. We build comprehensive PropTech solutions including property management portals, automated valuation models (AVMs), and virtual tour platforms for brokerages and REITS.',
    challenges: [
      { title: 'Fragmented Operations', description: 'Managing properties, tenants, and maintenance through spreadsheets.' },
      { title: 'Data Accuracy', description: 'Outdated property valuations and market data.' },
      { title: 'Tenant Experience', description: 'Poor communication and payment friction for renters.' }
    ],
    solutions: [
      { icon: 'Building', title: 'Property Management Systems', description: 'Unified platforms for leases, maintenance, and accounting.' },
      { icon: 'PieChart', title: 'Data Analytics', description: 'Integrating MLS data for automated property valuation.' },
      { icon: 'Smartphone', title: 'Tenant Portals', description: 'Mobile apps for easy rent payments and maintenance requests.' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Mapbox', 'Stripe'],
    stats: [
      { metric: '100%', label: 'Portfolio Visibility' },
      { metric: 'Automated', label: 'Rent Collection' },
      { metric: 'MLS', label: 'Data Integration' },
      { metric: '24/7', label: 'Tenant Access' }
    ],
    faqs: [
      { question: 'Can you integrate with MLS databases?', answer: 'Yes, we build robust data pipelines compliant with RETS and WebAPI standards to ingest real-time listing data.' },
      { question: 'Do your platforms handle payments?', answer: 'We integrate secure payment gateways allowing for automated ACH and credit card rent collection with ledger reconciliation.' }
    ]
  },
  {
    slug: 'education',
    title: 'Education & EdTech',
    shortDescription: 'Engaging learning management systems and virtual classrooms.',
    heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
    overview: 'Transforming how the world learns. We develop custom Learning Management Systems (LMS), interactive virtual classrooms, and student analytics platforms that increase engagement and improve educational outcomes.',
    challenges: [
      { title: 'Student Engagement', description: 'Boring, static content leading to high course dropout rates.' },
      { title: 'Scalability', description: 'Platforms crashing when thousands of students log in simultaneously.' },
      { title: 'Outcome Tracking', description: 'Inability to identify struggling students before they fail.' }
    ],
    solutions: [
      { icon: 'BookOpen', title: 'Custom LMS', description: 'Tailored learning platforms superior to generic Moodle/Canvas setups.' },
      { icon: 'Video', title: 'Virtual Classrooms', description: 'Low-latency video streaming with interactive whiteboards.' },
      { icon: 'BrainCircuit', title: 'Learning Analytics', description: 'AI-driven insights to track student progress and predict outcomes.' }
    ],
    technologies: ['Next.js', 'WebRTC', 'Node.js', 'MongoDB', 'AWS'],
    stats: [
      { metric: '4K', label: 'Video Quality' },
      { metric: '+40%', label: 'Completion Rates' },
      { metric: '100k+', label: 'Concurrent Users' },
      { metric: 'SCORM', label: 'Compliant' }
    ],
    faqs: [
      { question: 'Are your platforms SCORM compliant?', answer: 'Yes, we can build platforms that fully support SCORM and xAPI standards for easy content import/export.' },
      { question: 'Can you handle live video streaming?', answer: 'We build custom WebRTC architectures that support high-quality, low-latency interactive video for thousands of concurrent students.' }
    ]
  },
  {
    slug: 'startups',
    title: 'High-Growth Startups',
    shortDescription: 'Rapid MVP development and scalable architectures.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    overview: 'We are the technical co-founder for visionary startups. We build rapid, high-quality Minimum Viable Products (MVPs) to help you secure funding, then engineer the scalable v2 architectures required for hyper-growth.',
    challenges: [
      { title: 'Time to Market', description: 'Need to launch quickly to validate assumptions and secure funding.' },
      { title: 'Technical Debt', description: 'Hacked-together MVPs that must be completely rewritten to scale.' },
      { title: 'Resource Constraints', description: 'Lack of budget to hire a full in-house engineering team.' }
    ],
    solutions: [
      { icon: 'Rocket', title: 'Rapid MVP Development', description: 'Launching core features in 8-12 weeks.' },
      { icon: 'Layers', title: 'Scalable Architecture', description: 'Building the MVP on a foundation that will support millions of users.' },
      { icon: 'Users', title: 'Dedicated Squads', description: 'Providing an instant, cohesive engineering team.' }
    ],
    technologies: ['React', 'Node.js', 'Supabase', 'Tailwind', 'Vercel'],
    stats: [
      { metric: '8 wks', label: 'Average MVP Launch' },
      { metric: 'Zero', label: 'Technical Debt' },
      { metric: '100%', label: 'IP Ownership' },
      { metric: 'Series A', label: 'Ready Code' }
    ],
    faqs: [
      { question: 'Do you take equity?', answer: 'We typically operate on a standard fee-for-service model, ensuring you retain 100% of your equity and intellectual property.' },
      { question: 'Can your team transition out when we hire internally?', answer: 'Yes. We build with clean, documented code and standard frameworks specifically to ensure a smooth handoff to your future internal team.' }
    ]
  },
  {
    slug: 'travel',
    title: 'Travel & Hospitality',
    shortDescription: 'Booking engines and property management platforms.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80',
    overview: 'Building the digital infrastructure of modern travel. We engineer complex booking engines, dynamic pricing algorithms, and seamless mobile experiences for airlines, hotel chains, and travel startups.',
    challenges: [
      { title: 'Complex Integrations', description: 'Connecting with legacy GDS (Global Distribution Systems).' },
      { title: 'Dynamic Pricing', description: 'Updating prices in real-time based on demand and availability.' },
      { title: 'Mobile Experience', description: 'Travelers needing reliable access to itineraries while offline or on poor connections.' }
    ],
    solutions: [
      { icon: 'Globe', title: 'Booking Engines', description: 'High-performance search and booking workflows.' },
      { icon: 'Database', title: 'GDS Integration', description: 'Robust connections to Amadeus, Sabre, and local APIs.' },
      { icon: 'Smartphone', title: 'Companion Apps', description: 'Offline-first mobile applications for travelers on the go.' }
    ],
    technologies: ['React Native', 'Go', 'Redis', 'PostgreSQL', 'AWS'],
    stats: [
      { metric: 'Real-time', label: 'Inventory Sync' },
      { metric: '<2s', label: 'Search Speed' },
      { metric: 'PCI', label: 'Secure Payments' },
      { metric: 'Offline', label: 'Mobile Access' }
    ],
    faqs: [
      { question: 'Do you have experience with Amadeus/Sabre?', answer: 'Yes, we have integrated complex legacy GDS systems into modern, fast, and user-friendly frontends.' },
      { question: 'Can you build dynamic pricing models?', answer: 'We implement custom algorithms that adjust pricing based on inventory, seasonality, and competitor data.' }
    ]
  }
];