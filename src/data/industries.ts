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
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    overview: 'The financial sector demands zero-compromise engineering. We architect secure, compliant, and ultra-low latency platforms for investment banks, trading firms, neo-banks, and FinTech disruptors. From real-time risk analytics to blockchain settlement layers, we engineer systems that process billions in transaction volume with mathematical precision.',
    challenges: [
      { title: 'Regulatory Compliance', description: 'Navigating evolving global frameworks — PCI-DSS, GDPR, MiFID II, SEC, and Basel III requirements.' },
      { title: 'Legacy Monoliths', description: 'Decades-old mainframe infrastructure that chokes innovation and blocks modern API adoption.' },
      { title: 'Cyber Threat Landscape', description: 'Nation-state level attacks, zero-day exploits, and insider threats targeting financial data.' }
    ],
    solutions: [
      { icon: 'ShieldCheck', title: 'Zero-Trust Architecture', description: 'Military-grade encryption, HSM-backed key management, and granular RBAC across every microservice.' },
      { icon: 'Activity', title: 'High-Frequency Processing', description: 'Sub-millisecond latency systems capable of processing 100k+ transactions per second with event sourcing.' },
      { icon: 'Link', title: 'Legacy Modernization', description: 'Strangler Fig patterns and secure API gateways that breathe new life into COBOL mainframes.' }
    ],
    technologies: ['Go', 'Rust', 'PostgreSQL', 'Kafka', 'AWS', 'Kubernetes', 'Vault'],
    stats: [
      { metric: '99.999%', label: 'Uptime SLA' },
      { metric: '<5ms', label: 'P99 Latency' },
      { metric: '100%', label: 'PCI-DSS L1' },
      { metric: 'AES-256', label: 'Encryption' }
    ],
    faqs: [
      { question: 'How do you ensure PCI-DSS Level 1 compliance?', answer: 'We implement tokenization vaults, network segmentation with isolated CDEs, and quarterly ASV scans. Sensitive CHD never touches your application servers — we route it through certified payment gateways with point-to-point encryption.' },
      { question: 'Can you integrate with core banking systems?', answer: 'Absolutely. We have deep experience with modern FinTech APIs (Stripe, Plaid, Dwolla) as well as legacy core banking protocols like ISO 20022, SOAP bridges, and MQSeries integrations.' }
    ]
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & MedTech',
    shortDescription: 'HIPAA-compliant platforms for modern patient care.',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    overview: 'Healthcare is at an inflection point. We build HIPAA-compliant telehealth platforms, EHR interoperability layers, and AI-driven clinical decision support systems. Our infrastructure empowers providers to deliver precision medicine while safeguarding Protected Health Information with defense-in-depth security.',
    challenges: [
      { title: 'Data Privacy & HIPAA', description: 'Stringent requirements for PHI encryption, audit trails, and Business Associate Agreements.' },
      { title: 'Interoperability Crisis', description: 'Siloed data across Epic, Cerner, Allscripts, and custom hospital systems refusing to talk.' },
      { title: 'Clinician Burnout', description: 'Poor UX in medical software leading to documentation fatigue and reduced patient face-time.' }
    ],
    solutions: [
      { icon: 'Lock', title: 'HIPAA-Compliant Infrastructure', description: 'BAA-covered cloud environments with PHI encryption at rest, in transit, and in use via confidential computing.' },
      { icon: 'Database', title: 'EHR Integrations', description: 'Seamless HL7 v2, FHIR R4, and SMART on FHIR connectivity with Epic, Cerner, and Meditech.' },
      { icon: 'Video', title: 'Telehealth Platforms', description: 'HIPAA-compliant WebRTC stacks with end-to-end encryption, waiting rooms, and EMR-embedded video.' }
    ],
    technologies: ['Python', 'React Native', 'AWS Healthcare', 'PostgreSQL', 'WebRTC', 'FHIR'],
    stats: [
      { metric: '100%', label: 'HIPAA Compliant' },
      { metric: 'FHIR R4', label: 'Standard Ready' },
      { metric: 'Zero', label: 'PHI Breaches' },
      { metric: 'E2EE', label: 'Video Calls' }
    ],
    faqs: [
      { question: 'Are your cloud deployments HIPAA compliant by default?', answer: 'Yes. We architect exclusively on BAA-covered services (AWS HIPAA-eligible, Azure HITRUST) with mandatory encryption, comprehensive audit logging, and automated PHI access monitoring.' },
      { question: 'Do you support FHIR for EHR interoperability?', answer: 'We are FHIR-native. Our platforms use FHIR R4 resources to read/write clinical data, enabling seamless integration with Epic MyChart, Cerner PowerChart, and other major EHR ecosystems.' }
    ]
  },
  {
    slug: 'retail',
    title: 'Retail & E-commerce',
    shortDescription: 'High-conversion platforms for global commerce.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80',
    overview: 'Commerce moves at the speed of attention. We engineer headless e-commerce architectures, omnichannel inventory systems, and conversion-optimized storefronts that scale elastically during peak events. Every millisecond of latency costs revenue — we optimize for sub-second page loads and frictionless checkout.',
    challenges: [
      { title: 'Peak Traffic Avalanches', description: 'Infrastructure collapse during Black Friday, flash sales, and viral product drops.' },
      { title: 'Inventory Fragmentation', description: 'Disjointed stock visibility across warehouses, POS, dropshippers, and marketplaces.' },
      { title: 'Checkout Abandonment', description: 'Complex, slow payment flows killing 70% of carts before completion.' }
    ],
    solutions: [
      { icon: 'ShoppingCart', title: 'Headless Commerce', description: 'Decoupled Next.js frontends with GraphQL federation for lightning-fast, bespoke shopping experiences.' },
      { icon: 'Package', title: 'Unified Inventory', description: 'Event-driven stock synchronization across all channels with real-time reservation and oversell protection.' },
      { icon: 'CreditCard', title: 'One-Click Checkout', description: 'Optimized payment flows with digital wallets, BNPL, and saved payment methods reducing friction by 60%.' }
    ],
    technologies: ['Next.js', 'Shopify Plus', 'Stripe', 'Redis', 'Vercel', 'GraphQL'],
    stats: [
      { metric: '<0.8s', label: 'LCP Score' },
      { metric: '99.99%', label: 'Peak Uptime' },
      { metric: '+42%', label: 'Conversion Lift' },
      { metric: 'Omni', label: 'Channel Sync' }
    ],
    faqs: [
      { question: 'What advantages does headless commerce offer?', answer: 'Headless decouples your frontend from the commerce engine, enabling sub-second page loads, complete design freedom, and the ability to sell through any channel — web, mobile, IoT, or social — from a single backend.' },
      { question: 'How do you handle massive traffic spikes?', answer: 'We deploy edge-cached static pages via CDN, auto-scaling Kubernetes clusters, and database read replicas. Our architectures have handled 50x traffic surges without degradation.' }
    ]
  },
{
  slug: 'manufacturing',
  title: 'Manufacturing & Industry',
  shortDescription:
    'Smart manufacturing platforms, connected operations, and Industry 4.0 solutions.',
  heroImage:
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80',

  overview:
    'Modern manufacturing requires connected, intelligent, and resilient operations. We build Industry 4.0 platforms that connect machines, people, and processes through real-time data, predictive intelligence, and automated workflows.',

  challenges: [
    {
      title: 'Production Downtime',
      description:
        'Unexpected machine failures and maintenance issues causing production delays and revenue loss.',
    },
    {
      title: 'Disconnected Operations',
      description:
        'Legacy systems and isolated machines making it difficult to get a unified view of production performance.',
    },
    {
      title: 'Quality Control',
      description:
        'Manual inspection processes leading to inconsistent quality, defects, and delayed issue detection.',
    },
  ],

  solutions: [
    {
      icon: 'Factory',
      title: 'Smart Factory',
      description:
        'Connected manufacturing platforms that integrate machines, sensors, operators, and enterprise systems in real time.',
    },
    {
      icon: 'Activity',
      title: 'Predictive Maintenance',
      description:
        'AI-powered monitoring that detects equipment anomalies early and predicts potential machine failures.',
    },
    {
      icon: 'BarChart3',
      title: 'Production Analytics',
      description:
        'Real-time dashboards for production output, quality metrics, downtime, and operational performance.',
    },
  ],

  technologies: [
    'React',
    'Node.js',
    'Python',
    'IoT',
    'MongoDB',
    'AWS',
  ],

  stats: [
    {
      metric: '30%',
      label: 'Less Downtime',
    },
    {
      metric: '+40%',
      label: 'Production Efficiency',
    },
    {
      metric: '99.9%',
      label: 'System Uptime',
    },
    {
      metric: '24/7',
      label: 'Real-Time Monitoring',
    },
  ],

  faqs: [
    {
      question: 'Can you integrate with existing manufacturing systems?',
      answer:
        'Yes. We can integrate with existing ERP, MES, SCADA, PLC, IoT, and machine-monitoring systems through APIs and custom integration layers.',
    },
    {
      question: 'Can your platform monitor machines in real time?',
      answer:
        'Yes. Our IoT-enabled architecture can collect real-time machine data, monitor operational parameters, identify anomalies, and provide live production dashboards.',
    },
  ],
},
  {
    slug: 'real-estate',
    title: 'Real Estate & PropTech',
    shortDescription: 'Digital platforms for property management and sales.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    overview: 'Property technology is reshaping how assets are managed, valued, and transacted. We build comprehensive PropTech platforms including automated valuation models (AVMs), tenant experience apps, and IoT-enabled building management systems that maximize NOI and tenant satisfaction.',
    challenges: [
      { title: 'Operational Fragmentation', description: 'Leasing, maintenance, and accounting managed across spreadsheets and siloed legacy tools.' },
      { title: 'Valuation Lag', description: 'Property valuations based on stale comps and manual appraisal cycles.' },
      { title: 'Tenant Churn', description: 'Poor digital experience driving high turnover and vacancy rates.' }
    ],
    solutions: [
      { icon: 'Building', title: 'Unified Property OS', description: 'All-in-one platform for leasing, work orders, accounting, and tenant communications.' },
      { icon: 'PieChart', title: 'AVM & Analytics', description: 'Machine learning models ingesting MLS, tax, and macroeconomic data for instant property valuation.' },
      { icon: 'Smartphone', title: 'Tenant Super-App', description: 'White-label mobile apps for rent payments, maintenance requests, and community amenities.' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Mapbox', 'Stripe', 'TensorFlow'],
    stats: [
      { metric: '100%', label: 'Portfolio Visibility' },
      { metric: 'Automated', label: 'Rent Collection' },
      { metric: 'MLS', label: 'Live Data Feed' },
      { metric: '24/7', label: 'Tenant Portal' }
    ],
    faqs: [
      { question: 'Do you integrate with MLS and county records?', answer: 'Yes. We maintain RETS and WebAPI integrations with 600+ MLSs nationwide, plus direct county assessor and recorder data feeds for comprehensive property intelligence.' },
      { question: 'Can tenants pay rent and submit maintenance via the app?', answer: 'Absolutely. Our tenant app supports ACH, credit card, and digital wallet rent payments with automatic ledger reconciliation, plus photo-based maintenance requests with vendor dispatch.' }
    ]
  },
{
  slug: 'education',
  title: 'Education & EdTech',
  shortDescription:
    'Engaging learning management systems and virtual classrooms.',
  heroImage:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',

  overview:
    'Learning is no longer confined to classrooms. We develop adaptive LMS platforms, interactive virtual campuses, and AI-powered tutoring systems that personalize education at scale. Our infrastructure supports 100,000+ concurrent learners with sub-second content delivery.',

  challenges: [
    {
      title: 'Engagement Drop-off',
      description:
        'Static content and poor UX leading to 80% course abandonment rates.',
    },
    {
      title: 'Scale Anxiety',
      description:
        'Platforms crashing when enrollment spikes during semester starts or viral course launches.',
    },
    {
      title: 'Learning Blindspots',
      description:
        'Inability to identify at-risk students before they fail or drop out.',
    },
  ],

  solutions: [
    {
      icon: 'BookOpen',
      title: 'Adaptive LMS',
      description:
        'AI-driven learning paths that adjust difficulty and content format based on real-time student performance.',
    },
    {
      icon: 'Video',
      title: 'Virtual Campus',
      description:
        'Low-latency WebRTC classrooms with breakout rooms, interactive whiteboards, and live polling.',
    },
    {
      icon: 'BrainCircuit',
      title: 'Predictive Analytics',
      description:
        'Early warning systems that flag at-risk students based on engagement patterns and assessment trajectories.',
    },
  ],

  technologies: [
    'Next.js',
    'WebRTC',
    'Node.js',
    'MongoDB',
    'AWS',
    'OpenAI',
  ],

  stats: [
    {
      metric: '4K',
      label: 'Video Quality',
    },
    {
      metric: '+45%',
      label: 'Completion Rate',
    },
    {
      metric: '100k+',
      label: 'Concurrent Users',
    },
    {
      metric: 'SCORM',
      label: 'xAPI Compliant',
    },
  ],

  faqs: [
    {
      question: 'Is your LMS SCORM and xAPI compliant?',
      answer:
        'Yes. Our platform fully supports SCORM 1.2/2004 and xAPI (Tin Can) for seamless content interoperability with authoring tools like Articulate, Captivate, and Lectora.',
    },
    {
      question: 'Can you support live interactive video at scale?',
      answer:
        'We deploy selective forwarding units (SFUs) with adaptive bitrate streaming, supporting thousands of concurrent students with <150ms latency and 99.9% connection stability.',
    },
  ],
},
  {
    slug: 'startups',
    title: 'High-Growth Startups',
    shortDescription: 'Rapid MVP development and scalable architectures.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    overview: 'Speed is survival. We act as your technical co-founder, shipping high-quality MVPs in 6-10 weeks to validate hypotheses and secure funding. Then we architect the v2 platform on cloud-native foundations designed to scale from 100 to 10 million users without a rewrite.',
    challenges: [
      { title: 'Time-to-Market Pressure', description: 'Investors and competitors forcing rushed launches with half-baked products.' },
      { title: 'Technical Debt Trap', description: 'No-code and hacky MVPs that must be completely rebuilt to support product-market fit.' },
      { title: 'Hiring Bottleneck', description: 'Months-long recruiting cycles delaying roadmap execution.' }
    ],
    solutions: [
      { icon: 'Rocket', title: 'Rapid MVP Sprint', description: 'Battle-tested sprint methodology delivering core features in 6-10 weeks with weekly stakeholder demos.' },
      { icon: 'Layers', title: 'Scale-Ready Architecture', description: 'Serverless and containerized foundations that autoscale with demand from day one.' },
      { icon: 'Users', title: 'Embedded Teams', description: 'Dedicated pods of senior engineers, designers, and PMs that operate as your remote tech department.' }
    ],
    technologies: ['React', 'Node.js', 'Supabase', 'Tailwind', 'Vercel', 'PostgreSQL'],
    stats: [
      { metric: '8 wks', label: 'Avg. MVP Launch' },
      { metric: 'Zero', label: 'Rewrite Needed' },
      { metric: '100%', label: 'IP Ownership' },
      { metric: 'Series A', label: 'Investor Ready' }
    ],
    faqs: [
      { question: 'Do you take equity in startups?', answer: 'No. We operate on a transparent fee-for-service model. You retain 100% equity, full IP ownership, and complete control over your product roadmap and cap table.' },
      { question: 'How smooth is the transition to an internal team?', answer: 'We build with clean architecture, comprehensive documentation, and standard frameworks specifically to ensure a frictionless handoff. Most clients transition within 2-4 weeks.' }
    ]
  },
  {
    slug: 'travel',
    title: 'Travel & Hospitality',
    shortDescription: 'Booking engines and property management platforms.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80',
    overview: 'Travel is an experience economy. We engineer high-performance booking engines, revenue management systems with dynamic pricing, and offline-first mobile experiences for airlines, hotel chains, and OTAs. Our platforms handle complex multi-leg itineraries with real-time inventory and fare logic.',
    challenges: [
      { title: 'GDS Complexity', description: 'Integrating with legacy Amadeus, Sabre, and Travelport systems built on 1980s protocols.' },
      { title: 'Revenue Optimization', description: 'Static pricing leaving money on the table during demand fluctuations.' },
      { title: 'Connectivity Gaps', description: 'Travelers losing access to itineraries in flight mode or roaming dead zones.' }
    ],
    solutions: [
      { icon: 'Globe', title: 'Next-Gen Booking Engine', description: 'High-performance search with intelligent caching, faceted filters, and one-tap rebooking.' },
      { icon: 'Database', title: 'GDS Modernization', description: 'RESTful abstraction layers over Amadeus, Sabre, and local NDC APIs with unified response normalization.' },
      { icon: 'Smartphone', title: 'Offline-First Mobile', description: 'PWA companion apps with cached itineraries, boarding passes, and real-time sync when connectivity returns.' }
    ],
    technologies: ['React Native', 'Go', 'Redis', 'PostgreSQL', 'AWS', 'Elasticsearch'],
    stats: [
      { metric: '<1.5s', label: 'Search Response' },
      { metric: 'Real-time', label: 'Fare Sync' },
      { metric: 'PCI', label: 'L1 Payments' },
      { metric: 'Offline', label: 'Itinerary Access' }
    ],
    faqs: [
      { question: 'Have you integrated with Amadeus and Sabre?', answer: 'Yes. We have production experience with Amadeus Self-Service, Sabre SOAP APIs, and IATA NDC standards, building modern abstraction layers that shield your frontend from GDS complexity.' },
      { question: 'Can you build dynamic pricing algorithms?', answer: 'We implement machine learning pricing engines that factor in demand forecasting, competitor rates, seasonality, and customer segments to maximize RevPAR and load factors.' }
    ]
  }
];