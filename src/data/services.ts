export interface Service {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  overview: string;
  challenges: { title: string; description: string }[];
  features: { icon: string; title: string; description: string }[];
  steps: { title: string; description: string }[];
  benefits: { metric: string; label: string; description: string }[];
  technologies: string[];
  industries: string[];
  category?: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    icon: 'Bot',
    shortDescription: 'Streamline operations with intelligent, automated workflows.',
    description: 'We build custom AI solutions that automate repetitive tasks, reduce human error, and accelerate business processes. Our automated workflows integrate seamlessly with your existing infrastructure.',
    heroImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80',
    overview: 'In an era where speed and precision define market leaders, AI automation is no longer optional—it is a foundational requirement. We engineer bespoke automation systems that learn your organizational patterns, eliminating bottlenecks and empowering your workforce to focus on high-value strategic initiatives.',
    challenges: [
      { title: 'Operational Inefficiency', description: 'Manual data entry and repetitive administrative tasks consume thousands of hours annually, draining valuable human capital.' },
      { title: 'High Error Rates', description: 'Human fatigue in data processing leads to costly errors, compliance risks, and degraded customer experiences.' },
      { title: 'Scaling Bottlenecks', description: 'Traditional processes break down when transaction volumes spike, preventing rapid organizational growth.' }
    ],
    features: [
      { icon: 'Zap', title: 'Intelligent Workflows', description: 'Self-optimizing pipelines that adapt to changing data structures.' },
      { icon: 'Eye', title: 'Computer Vision', description: 'Automated document processing and visual quality inspection.' },
      { icon: 'MessageSquare', title: 'NLP Processing', description: 'Automated sentiment analysis, routing, and response generation.' },
      { icon: 'Database', title: 'Legacy Integration', description: 'Seamlessly connecting modern AI with existing on-premise systems.' },
      { icon: 'Shield', title: 'Secure Execution', description: 'Enterprise-grade security for all automated transactions.' }
    ],
    steps: [
      { title: 'Process Mining', description: 'Identifying automation opportunities with the highest ROI.' },
      { title: 'AI Model Selection', description: 'Choosing the right machine learning models for the specific task.' },
      { title: 'Workflow Design', description: 'Architecting the automated pipeline and fallback mechanisms.' },
      { title: 'Integration', description: 'Connecting the AI engine to your existing software ecosystem.' },
      { title: 'Testing & Validation', description: 'Rigorous parallel testing against human baselines.' },
      { title: 'Deployment & Monitoring', description: 'Rolling out the solution with continuous performance tracking.' }
    ],
    benefits: [
      { metric: '85%', label: 'Reduction in Manual Tasks', description: 'Freeing up your team for strategic work.' },
      { metric: '99.9%', label: 'Process Accuracy', description: 'Virtually eliminating costly human errors.' },
      { metric: '3x', label: 'Faster Processing Time', description: 'Accelerating end-to-end workflow cycles.' },
      { metric: '24/7', label: 'Continuous Operation', description: 'Uninterrupted business processes without downtime.' }
    ],
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'PyTorch', 'AWS', 'LangChain'],
    industries: ['Finance', 'Healthcare', 'Manufacturing', 'Logistics', 'Retail'],
    faqs: [
      { question: 'Will AI replace our current workforce?', answer: 'Our AI automation solutions are designed to augment your workforce, not replace it. By automating repetitive tasks, your employees can focus on complex problem-solving and relationship building.' },
      { question: 'How long does an automation project typically take?', answer: 'A standard automation pilot takes 4-6 weeks to deploy, with enterprise-wide implementations typically spanning 3-6 months depending on complexity.' },
      { question: 'Is our data secure when using AI models?', answer: 'Absolutely. We deploy private, isolated instances of AI models ensuring your proprietary data never leaves your secure environment or trains public models.' },
      { question: 'How do you handle exceptions in automated workflows?', answer: 'Every automated system we build includes a "human-in-the-loop" fallback mechanism. When confidence scores drop below a threshold, the task is automatically routed to a human operator.' },
      { question: 'What is the typical ROI on these projects?', answer: 'Most of our clients see positive ROI within 6-8 months of deployment through combined cost savings and increased throughput.' },
      { question: 'Can this integrate with our legacy ERP systems?', answer: 'Yes. We specialize in building custom API layers and RPA bots that bridge the gap between modern AI tools and legacy enterprise systems.' }
    ]
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    icon: 'Code2',
    shortDescription: 'Tailored applications designed for your unique business needs.',
    description: 'Stop compromising with off-the-shelf software. We engineer scalable, secure, and intuitive custom software solutions tailored precisely to your operational requirements and strategic goals.',
    heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80',
    overview: 'Generic software forces your business to adapt to its limitations. Custom software adapts to your business. We architect and build proprietary platforms that perfectly map to your operational workflows, giving you complete ownership of your intellectual property and a definitive competitive advantage.',
    challenges: [
      { title: 'Workflow Fragmentation', description: 'Employees jumping between multiple disconnected tools to complete single tasks.' },
      { title: 'License Bloat', description: 'Paying exorbitant monthly fees for enterprise software where you only use 10% of the features.' },
      { title: 'Stunted Growth', description: 'Inability to scale operations because off-the-shelf software cannot handle increased complexity.' }
    ],
    features: [
      { icon: 'Layers', title: 'Microservices Architecture', description: 'Scalable, independent modules that can grow with demand.' },
      { icon: 'Lock', title: 'Enterprise Security', description: 'Built-in RBAC, encryption, and compliance controls.' },
      { icon: 'Zap', title: 'High-Performance APIs', description: 'Lightning-fast data retrieval and third-party integrations.' },
      { icon: 'Layout', title: 'Intuitive Interfaces', description: 'Consumer-grade UX applied to complex enterprise tools.' },
      { icon: 'Cloud', title: 'Cloud-Native Deployment', description: 'Designed for AWS, Azure, or GCP from day one.' }
    ],
    steps: [
      { title: 'Requirements Engineering', description: 'Deep-dive mapping of business needs and user journeys.' },
      { title: 'System Architecture', description: 'Designing the database schema and technical foundation.' },
      { title: 'UI/UX Prototyping', description: 'Creating high-fidelity, clickable models of the interface.' },
      { title: 'Agile Development', description: 'Iterative coding with continuous client feedback loops.' },
      { title: 'QA & Security Auditing', description: 'Rigorous testing against functional and security criteria.' },
      { title: 'Deployment & Training', description: 'Smooth rollout with comprehensive user onboarding.' }
    ],
    benefits: [
      { metric: '100%', label: 'IP Ownership', description: 'You own the code, the data, and the competitive advantage.' },
      { metric: '0', label: 'Per-User License Fees', description: 'Scale your team without scaling your software costs.' },
      { metric: '40%', label: 'Efficiency Gain', description: 'Average productivity increase from perfectly mapped workflows.' },
      { metric: '10x', label: 'Scalability Factor', description: 'Architecture built to handle massive organizational growth.' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'TypeScript', 'Go'],
    industries: ['Enterprise', 'Healthcare', 'Logistics', 'Real Estate', 'Education'],
    faqs: [
      { question: 'Why build custom instead of buying off-the-shelf?', answer: 'Custom software eliminates licensing fees, provides exactly the features you need without bloat, ensures you own your IP, and creates a platform that conforms to your processes rather than forcing you to change them.' },
      { question: 'Do we own the source code?', answer: 'Yes. Upon project completion and final payment, you retain 100% ownership of the intellectual property and source code.' },
      { question: 'How do you ensure the software scales as we grow?', answer: 'We use cloud-native, microservices-based architectures that allow individual components of your application to scale independently based on demand.' },
      { question: 'What happens after the software is launched?', answer: 'We offer comprehensive SLA-based support, maintenance, and continuous improvement retainers to ensure your software evolves with your business.' },
      { question: 'How do you handle data migration from our old systems?', answer: 'Data migration is a core part of our development process. We build custom ETL (Extract, Transform, Load) pipelines to securely transition your historical data.' },
      { question: 'What is the typical timeline for a custom software project?', answer: 'While it varies by complexity, most enterprise-grade custom applications take 4-8 months from discovery to initial launch.' }
    ]
  },
  {
    slug: 'web-applications',
    title: 'Web Application Development',
    icon: 'Layout',
    shortDescription: 'High-performance, responsive web platforms for modern enterprises.',
    description: 'We craft robust web applications that deliver native-like experiences in the browser. From complex enterprise portals to fast-loading consumer apps, we ensure speed, accessibility, and security.',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80',
    overview: 'The web has evolved. Today’s web applications must offer the speed and fluidity of native desktop software. We engineer Single Page Applications (SPAs) and Progressive Web Apps (PWAs) that deliver uncompromising performance, flawless responsiveness across all devices, and intuitive user experiences.',
    challenges: [
      { title: 'Poor Performance', description: 'Slow load times causing high bounce rates and frustrated users.' },
      { title: 'Device Fragmentation', description: 'Applications that break or become unusable on mobile devices or tablets.' },
      { title: 'Security Vulnerabilities', description: 'Web platforms exposed to XSS, CSRF, and data injection attacks.' }
    ],
    features: [
      { icon: 'Zap', title: 'Server-Side Rendering', description: 'Lightning-fast initial page loads and excellent SEO.' },
      { icon: 'Smartphone', title: 'Progressive Web Apps', description: 'Offline capabilities and installability on mobile devices.' },
      { icon: 'Shield', title: 'OWASP Compliance', description: 'Built-in protection against the top web security vulnerabilities.' },
      { icon: 'RefreshCw', title: 'Real-time Data', description: 'WebSockets for live updates without page refreshes.' },
      { icon: 'Accessibility', title: 'WCAG 2.1 AA', description: 'Fully accessible interfaces for all users.' }
    ],
    steps: [
      { title: 'Architecture Planning', description: 'Selecting the right rendering strategy (CSR, SSR, SSG).' },
      { title: 'API Contract Design', description: 'Defining how the frontend will communicate with the backend.' },
      { title: 'Component Driven Dev', description: 'Building reusable, accessible UI components.' },
      { title: 'State Management', description: 'Implementing robust data flow and caching strategies.' },
      { title: 'Performance Auditing', description: 'Optimizing Core Web Vitals and load times.' },
      { title: 'CI/CD Pipeline Setup', description: 'Automated testing and zero-downtime deployments.' }
    ],
    benefits: [
      { metric: '<1s', label: 'Load Times', description: 'Optimized delivery for maximum user retention.' },
      { metric: '100%', label: 'Responsive', description: 'Flawless execution across desktop, tablet, and mobile.' },
      { metric: 'A+', label: 'Accessibility Score', description: 'Ensuring your platform is usable by everyone.' },
      { metric: 'SEO', label: 'Optimized', description: 'Built to rank highly in search engine results.' }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'GraphQL'],
    industries: ['SaaS', 'E-commerce', 'Media', 'Finance', 'Education'],
    faqs: [
      { question: 'Do you build Single Page Applications (SPAs)?', answer: 'Yes, we specialize in SPAs using React and Next.js, providing fluid, app-like experiences without page reloads.' },
      { question: 'How do you ensure fast load times?', answer: 'We utilize Server-Side Rendering (SSR), Static Site Generation (SSG), edge caching, image optimization, and code splitting.' },
      { question: 'Can web apps work offline?', answer: 'Yes, by building Progressive Web Apps (PWAs) with service workers, we can enable offline functionality and caching.' },
      { question: 'Are your web apps secure?', answer: 'Security is foundational. We implement strict Content Security Policies, secure cookie handling, and protection against OWASP Top 10 vulnerabilities.' },
      { question: 'Will my web app rank on Google?', answer: 'Absolutely. For public-facing apps, we use Next.js to ensure search engines can perfectly crawl and index your content.' },
      { question: 'Do you use UI templates?', answer: 'No. While we may use component libraries like Radix for accessibility primitives, the design and implementation are entirely bespoke.' }
    ]
  },
  {
    slug: 'cloud-engineering',
    title: 'Cloud Engineering',
    icon: 'Cloud',
    shortDescription: 'Secure, scalable, and resilient cloud architectures.',
    description: 'Modernize your infrastructure with cloud-native solutions. We migrate legacy systems, optimize cloud spending, and build resilient architectures that scale dynamically with your user base.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
    overview: 'The cloud is the backbone of the modern enterprise. We design, deploy, and manage scalable cloud infrastructures that guarantee high availability, robust security, and cost efficiency. Whether you are migrating from on-premise servers or optimizing an existing cloud setup, we build foundations that power rapid growth.',
    challenges: [
      { title: 'Runaway Costs', description: 'Unoptimized cloud architectures leading to massive, unpredictable monthly bills.' },
      { title: 'System Downtime', description: 'Single points of failure causing catastrophic outages during peak traffic.' },
      { title: 'Security Posture', description: 'Misconfigured cloud permissions exposing sensitive corporate and user data.' }
    ],
    features: [
      { icon: 'Layers', title: 'Infrastructure as Code', description: 'Managing infrastructure through trackable, version-controlled code.' },
      { icon: 'Activity', title: 'Auto-Scaling', description: 'Systems that automatically expand resources during high traffic.' },
      { icon: 'Shield', title: 'Zero-Trust Security', description: 'Strict identity verification for every user and device.' },
      { icon: 'RefreshCw', title: 'Disaster Recovery', description: 'Automated backups and multi-region failover strategies.' },
      { icon: 'PieChart', title: 'Cost Optimization', description: 'Continuous monitoring to eliminate wasted resources.' }
    ],
    steps: [
      { title: 'Infrastructure Audit', description: 'Comprehensive review of current setup and bottlenecks.' },
      { title: 'Architecture Design', description: 'Creating the blueprint for the new cloud-native environment.' },
      { title: 'Security Implementation', description: 'Establishing VPCs, IAM roles, and encryption protocols.' },
      { title: 'Data Migration', description: 'Securely transferring data with minimal downtime.' },
      { title: 'Pipeline Creation', description: 'Setting up automated deployment (CI/CD) pipelines.' },
      { title: 'Monitoring & Alerting', description: 'Implementing proactive system health tracking.' }
    ],
    benefits: [
      { metric: '99.99%', label: 'Uptime SLA', description: 'Enterprise-grade reliability for mission-critical systems.' },
      { metric: '40%', label: 'Cost Reduction', description: 'Average savings through architectural optimization.' },
      { metric: 'Instant', label: 'Scalability', description: 'Ability to handle sudden 10x traffic spikes.' },
      { metric: 'Zero', label: 'Data Loss', description: 'Robust backup and recovery implementations.' }
    ],
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GCP', 'Azure'],
    industries: ['Enterprise', 'FinTech', 'HealthTech', 'E-commerce', 'Media'],
    faqs: [
      { question: 'Which cloud provider do you recommend?', answer: 'We are cloud-agnostic. We recommend AWS, GCP, or Azure based on your specific technical requirements, existing partnerships, and budget constraints.' },
      { question: 'How do you handle cloud migrations without downtime?', answer: 'We use blue/green deployment strategies and gradual traffic shifting to ensure your services remain available during the migration process.' },
      { question: 'What is Infrastructure as Code (IaC)?', answer: 'IaC involves managing and provisioning computing infrastructure through machine-readable definition files (like Terraform), ensuring consistency and rapid disaster recovery.' },
      { question: 'Can you help reduce our current AWS bill?', answer: 'Yes. Cloud cost optimization is a core service. We audit your usage, right-size instances, implement auto-scaling, and leverage spot/reserved instances.' },
      { question: 'How secure is the public cloud?', answer: 'When configured correctly, the public cloud is more secure than most on-premise data centers. We implement Zero-Trust architectures and strict IAM policies.' },
      { question: 'Do you provide 24/7 monitoring?', answer: 'Yes, we set up automated monitoring, logging, and alerting systems, and offer managed service SLAs for round-the-clock incident response.' }
    ]
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    icon: 'Smartphone',
    shortDescription: 'Native and cross-platform mobile experiences that users love.',
    description: 'Engage your users on the go with high-performance mobile applications. We build for iOS and Android using modern frameworks to ensure a flawless native feel and fast iterations.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80',
    overview: 'Mobile is the primary touchpoint for modern consumers and workforces. We engineer premium iOS and Android applications that deliver fluid animations, intuitive navigation, and robust offline capabilities. Whether native or cross-platform, we build apps that dominate app store rankings.',
    challenges: [
      { title: 'Poor User Experience', description: 'Clunky interfaces and sluggish animations that lead to immediate uninstalls.' },
      { title: 'Codebase Duplication', description: 'Maintaining completely separate iOS and Android teams, doubling development costs.' },
      { title: 'Offline Failure', description: 'Applications that crash or lose data when network connectivity drops.' }
    ],
    features: [
      { icon: 'Smartphone', title: 'Cross-Platform Excellence', description: 'Single codebase solutions that feel 100% native.' },
      { icon: 'WifiOff', title: 'Offline-First Architecture', description: 'Local data persistence and background syncing.' },
      { icon: 'Bell', title: 'Smart Push Notifications', description: 'Targeted, personalized user re-engagement.' },
      { icon: 'Cpu', title: 'Hardware Integration', description: 'Seamless use of camera, GPS, biometrics, and Bluetooth.' },
      { icon: 'ShieldCheck', title: 'App Store Compliance', description: 'Strict adherence to Apple and Google design/security guidelines.' }
    ],
    steps: [
      { title: 'Mobile Strategy', description: 'Defining the mobile value proposition and platform choice.' },
      { title: 'UX/UI Design', description: 'Creating platform-specific (Human Interface/Material) designs.' },
      { title: 'API Development', description: 'Building the secure backend that powers the mobile app.' },
      { title: 'App Development', description: 'Writing the frontend application code.' },
      { title: 'Beta Testing', description: 'Distributing via TestFlight and Google Play Console.' },
      { title: 'App Store Launch', description: 'Managing the submission and review process.' }
    ],
    benefits: [
      { metric: '4.8+', label: 'Average App Rating', description: 'Consistently delivering highly-rated user experiences.' },
      { metric: '50%', label: 'Cost Savings', description: 'Using cross-platform frameworks to reduce dev time.' },
      { metric: '60fps', label: 'Performance', description: 'Silky smooth animations and transitions.' },
      { metric: '100%', label: 'Store Approval', description: 'Guaranteed compliance with app store guidelines.' }
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    industries: ['Retail', 'Healthcare', 'Logistics', 'Finance', 'Consumer Tech'],
    faqs: [
      { question: 'Native vs. Cross-Platform: What do you recommend?', answer: 'For 80% of enterprise applications, we recommend React Native. It provides near-native performance while cutting development time in half. We reserve pure native (Swift/Kotlin) for highly complex graphics or heavy hardware-dependent apps.' },
      { question: 'Do you handle the App Store submission process?', answer: 'Yes, we handle the entire process, including provisioning profiles, certificates, store listings, and the Apple/Google review processes.' },
      { question: 'Can the app work without internet?', answer: 'Yes. We employ "Offline-First" architectures using local databases (like SQLite or WatermelonDB) that sync automatically when connectivity is restored.' },
      { question: 'How do you ensure the app is secure?', answer: 'We implement secure enclave storage, certificate pinning, biometric authentication, and strict API payload encryption.' },
      { question: 'Do you build the backend as well?', answer: 'Yes, we provide end-to-end development, building the scalable cloud APIs that your mobile application will consume.' },
      { question: 'How do we test the app during development?', answer: 'We distribute weekly builds to your team via Apple TestFlight and Google Play Internal Testing.' }
    ]
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'PenTool',
    shortDescription: 'Data-driven, accessible, and stunning digital interfaces.',
    description: 'Design is how it works. We create intuitive, accessible, and beautiful interfaces that reduce cognitive load and guide users effortlessly toward their goals.',
    heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80',
    overview: 'Great software requires great design. We treat UI/UX not as a coat of paint, but as the fundamental architecture of the user experience. Our design engineering approach bridges the gap between aesthetic beauty, cognitive psychology, and technical feasibility to create interfaces that users intuitively understand and genuinely enjoy.',
    challenges: [
      { title: 'High Churn Rates', description: 'Users abandoning platforms because they cannot figure out how to accomplish their goals.' },
      { title: 'Inconsistent Branding', description: 'Frankenstein interfaces built over years without a cohesive design system.' },
      { title: 'Development Friction', description: 'Designs that look good in Figma but are impossible or overly expensive to build in code.' }
    ],
    features: [
      { icon: 'Layers', title: 'Design Systems', description: 'Comprehensive component libraries for consistent branding.' },
      { icon: 'Users', title: 'User Research', description: 'Data-driven insights from actual user testing and behavior.' },
      { icon: 'Layout', title: 'Wireframing', description: 'Rapid low-fidelity layouts to validate structural concepts.' },
      { icon: 'Eye', title: 'Accessibility', description: 'Strict adherence to WCAG standards for inclusive design.' },
      { icon: 'Move', title: 'Interaction Design', description: 'Thoughtful micro-animations that provide system feedback.' }
    ],
    steps: [
      { title: 'Discovery & Research', description: 'Understanding the user personas and business objectives.' },
      { title: 'Information Architecture', description: 'Mapping the navigation and content structure.' },
      { title: 'Wireframing', description: 'Establishing layout and hierarchy without visual styling.' },
      { title: 'Visual Design', description: 'Applying color, typography, and brand aesthetics.' },
      { title: 'Prototyping', description: 'Creating clickable, interactive models for testing.' },
      { title: 'Developer Handoff', description: 'Providing exact specifications, tokens, and assets.' }
    ],
    benefits: [
      { metric: '300%', label: 'Engagement Increase', description: 'Typical improvement in user retention metrics.' },
      { metric: 'Zero', label: 'Dev Friction', description: 'Designs built with an understanding of code capabilities.' },
      { metric: '100%', label: 'Consistency', description: 'Unified visual language across all digital touchpoints.' },
      { metric: 'AA', label: 'Accessibility', description: 'Compliant with strict legal accessibility standards.' }
    ],
    technologies: ['Figma', 'Framer', 'Protopie', 'Storybook', 'Tailwind', 'Radix'],
    industries: ['SaaS', 'E-commerce', 'FinTech', 'Healthcare', 'Enterprise'],
    faqs: [
      { question: 'What is a Design System?', answer: 'A Design System is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It ensures brand consistency and speeds up development.' },
      { question: 'Do you do user testing?', answer: 'Yes. We validate our prototypes with actual target users to ensure our assumptions are correct before writing a single line of code.' },
      { question: 'How do designers and developers collaborate?', answer: 'Our designers are "technical designers." They understand CSS box models, component states, and responsive behavior, ensuring seamless handoff via Figma to our engineering team.' },
      { question: 'Do you design for accessibility?', answer: 'Absolutely. We design for WCAG 2.1 AA compliance, ensuring proper color contrast, focus states, and screen reader compatibility.' },
      { question: 'Can you redesign our existing app?', answer: 'Yes. We offer UI/UX audits and comprehensive redesigns of legacy software to modernize the experience and improve usability.' },
      { question: 'What tools do you use?', answer: 'We primarily use Figma for interface design and prototyping, supported by tools like Framer for advanced interaction design.' }
    ]
  }
];