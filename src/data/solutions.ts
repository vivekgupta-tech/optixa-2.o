export interface Solution {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  challenges: { title: string; description: string }[];
  features: { icon: string; title: string; description: string }[];
  benefits: { metric: string; label: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export const solutions: Solution[] = [
  {
    slug: 'ai-automation-solutions',
    title: 'AI & Automation Systems',
    shortDescription: 'Enterprise-grade artificial intelligence to automate complex workflows.',
    description: 'We deploy cutting-edge artificial intelligence to transform your business operations. Our AI solutions analyze massive datasets, automate repetitive cognitive tasks, and provide predictive insights that give you a definitive market advantage.',
    heroImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80',
    challenges: [
      { title: 'Data Overload', description: 'Inability to process and derive meaning from the massive amounts of data your company generates.' },
      { title: 'Manual Bottlenecks', description: 'Highly-paid employees spending hours on repetitive data entry and routing tasks.' }
    ],
    features: [
      { icon: 'Brain', title: 'Machine Learning Models', description: 'Custom models trained specifically on your proprietary business data.' },
      { icon: 'MessageSquare', title: 'Natural Language Processing', description: 'Automated analysis of documents, emails, and customer feedback.' },
      { icon: 'Zap', title: 'Robotic Process Automation', description: 'Software bots that interact with legacy UI to automate data transfer.' }
    ],
    benefits: [
      { metric: '80%', label: 'Reduction in processing time' },
      { metric: '99.9%', label: 'Accuracy in data extraction' },
      { metric: '3x', label: 'Increase in team capacity' }
    ],
    technologies: ['Python', 'PyTorch', 'OpenAI', 'AWS SageMaker', 'LangChain'],
    faqs: [
      { question: 'How is this different from ChatGPT?', answer: 'We build isolated, proprietary models using your data. Your information never leaves your secure environment or trains public models.' },
      { question: 'What is the ROI timeline?', answer: 'Most enterprise AI automation projects achieve positive ROI within 6-9 months through direct operational cost savings.' }
    ]
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    shortDescription: 'Complete modernization of legacy business processes and systems.',
    description: 'We guide legacy enterprises into the modern digital era. We replace paper-based workflows, modernize aging software architectures, and build unified digital ecosystems that drive efficiency and enable new revenue streams.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
    challenges: [
      { title: 'Technical Debt', description: 'Aging systems that are expensive to maintain and impossible to integrate with modern tools.' },
      { title: 'Siloed Departments', description: 'Departments using different software that cannot communicate, leading to data fragmentation.' }
    ],
    features: [
      { icon: 'RefreshCw', title: 'Legacy Modernization', description: 'Strangler-pattern migration from monolithic mainframes to microservices.' },
      { icon: 'Database', title: 'Data Unification', description: 'Creating a single source of truth across the entire organization.' },
      { icon: 'Smartphone', title: 'Digital Touchpoints', description: 'Creating modern web and mobile interfaces for existing services.' }
    ],
    benefits: [
      { metric: '100%', label: 'Process Visibility' },
      { metric: '40%', label: 'Lower Maintenance Costs' },
      { metric: '10x', label: 'Faster Feature Releases' }
    ],
    technologies: ['Node.js', 'React', 'Kubernetes', 'PostgreSQL', 'GraphQL'],
    faqs: [
      { question: 'Will digital transformation disrupt our operations?', answer: 'We use incremental migration strategies. By slowly strangling the legacy system and routing traffic to new microservices, we ensure zero operational downtime.' },
      { question: 'Do you help with employee training?', answer: 'Yes, change management and intuitive UX design are core to our transformation strategy, ensuring high adoption rates.' }
    ]
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    shortDescription: 'Resilient, auto-scaling cloud architectures for enterprise applications.',
    description: 'We design and implement secure, highly available cloud environments. Whether migrating to the cloud or optimizing a current AWS/GCP setup, we implement Infrastructure as Code to ensure your platform scales effortlessly.',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80',
    challenges: [
      { title: 'System Outages', description: 'Servers crashing during peak traffic events, resulting in lost revenue.' },
      { title: 'Unpredictable Costs', description: 'Cloud bills that spiral out of control due to unoptimized resources.' }
    ],
    features: [
      { icon: 'Server', title: 'Auto-Scaling Architecture', description: 'Systems that dynamically add resources during spikes and reduce them when quiet.' },
      { icon: 'Shield', title: 'High Availability', description: 'Multi-region deployments ensuring 99.99% uptime.' },
      { icon: 'Code', title: 'Infrastructure as Code', description: 'Managing servers via Terraform for perfect reproducibility.' }
    ],
    benefits: [
      { metric: '99.99%', label: 'Uptime Guarantee' },
      { metric: '30%', label: 'Average Cost Reduction' },
      { metric: 'Instant', label: 'Disaster Recovery' }
    ],
    technologies: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes'],
    faqs: [
      { question: 'Which cloud provider is best?', answer: 'We are vendor-agnostic. We evaluate your specific needs and usually recommend AWS or GCP based on their robust feature sets and reliability.' },
      { question: 'How do you handle security?', answer: 'We implement strict IAM policies, VPC peering, and encryption at rest/transit to ensure enterprise-grade security.' }
    ]
  },
  {
    slug: 'data-intelligence',
    title: 'Data Intelligence',
    shortDescription: 'Transform raw data into actionable business insights.',
    description: 'We build the pipelines, warehouses, and dashboards that turn chaotic data into clear strategic direction. We help you establish a data-driven culture with real-time visibility into your most important metrics.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    challenges: [
      { title: 'Data Chaos', description: 'Valuable business data trapped in dozens of disconnected SaaS applications.' },
      { title: 'Reporting Lag', description: 'Waiting weeks for the analytics team to generate historical reports.' }
    ],
    features: [
      { icon: 'Database', title: 'Data Warehousing', description: 'Centralized, clean storage using Snowflake or BigQuery.' },
      { icon: 'GitMerge', title: 'ETL Pipelines', description: 'Automated extraction, transformation, and loading of data.' },
      { icon: 'PieChart', title: 'Real-Time Dashboards', description: 'Interactive visualization of KPIs for executive decision making.' }
    ],
    benefits: [
      { metric: 'Real-time', label: 'Reporting Speed' },
      { metric: 'Single', label: 'Source of Truth' },
      { metric: '100%', label: 'Data Governance' }
    ],
    technologies: ['Python', 'Snowflake', 'dbt', 'Tableau', 'Looker'],
    faqs: [
      { question: 'Can you pull data from our custom legacy software?', answer: 'Yes, we specialize in building custom API connectors and web scrapers to extract data from difficult legacy systems.' },
      { question: 'What visualization tools do you use?', answer: 'We build custom React dashboards for embedded analytics, or implement enterprise tools like Tableau and Looker.' }
    ]
  },
  {
    slug: 'enterprise-modernization',
    title: 'Enterprise Modernization',
    shortDescription: 'Revitalize aging corporate systems for the modern era.',
    description: 'We dissect and rebuild massive, monolithic corporate software systems. We untangle decades of code, establishing modern CI/CD practices, robust test coverage, and a microservices architecture.',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80',
    challenges: [
      { title: 'Developer Friction', description: 'Onboarding new developers takes months because the legacy codebase is a mess.' },
      { title: 'Deployment Fear', description: 'Teams are terrified to deploy updates because everything breaks.' }
    ],
    features: [
      { icon: 'Box', title: 'Microservices Extraction', description: 'Breaking monoliths into manageable, independent services.' },
      { icon: 'RefreshCw', title: 'Automated CI/CD', description: 'Pipelines that automatically test and deploy code.' },
      { icon: 'CheckCircle', title: 'Test Automation', description: 'Comprehensive unit and end-to-end testing frameworks.' }
    ],
    benefits: [
      { metric: '10x', label: 'Deployment Frequency' },
      { metric: 'Zero', label: 'Downtime Deployments' },
      { metric: '-60%', label: 'Bug Rates' }
    ],
    technologies: ['Java/Spring', 'Go', 'Docker', 'Jenkins', 'GitHub Actions'],
    faqs: [
      { question: 'Do we have to rewrite everything from scratch?', answer: 'Rarely. We prefer the Strangler Fig pattern—slowly replacing functionality piece by piece until the legacy system is retired.' },
      { question: 'How do you ensure data integrity during modernization?', answer: 'We run the new and old systems in parallel, verifying that both produce the exact same outputs before cutting over.' }
    ]
  },
  {
    slug: 'security-compliance',
    title: 'Security & Compliance',
    shortDescription: 'Bank-grade security architectures and compliance audits.',
    description: 'We engineer software with security as the foundational layer, not an afterthought. We implement zero-trust architectures, conduct penetration testing, and ensure strict compliance with global data regulations.',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
    challenges: [
      { title: 'Cyber Threats', description: 'Increasingly sophisticated attacks targeting customer data.' },
      { title: 'Regulatory Fines', description: 'Massive penalties for failing to comply with GDPR, HIPAA, or SOC2.' }
    ],
    features: [
      { icon: 'Shield', title: 'Zero-Trust Security', description: 'Strict identity verification for every internal and external request.' },
      { icon: 'FileText', title: 'Compliance Automation', description: 'Systems built to automatically log data access for auditors.' },
      { icon: 'Key', title: 'Advanced Cryptography', description: 'AES-256 encryption at rest and TLS 1.3 in transit.' }
    ],
    benefits: [
      { metric: '100%', label: 'Audit Readiness' },
      { metric: 'Zero', label: 'Unverified Access' },
      { metric: 'E2E', label: 'Data Encryption' }
    ],
    technologies: ['Vault', 'Auth0', 'Cloudflare WAF', 'AWS Shield', 'Snyk'],
    faqs: [
      { question: 'Can you help us get SOC2 certified?', answer: 'Yes. We build the technical infrastructure and logging required to pass a SOC2 Type II audit.' },
      { question: 'What is Zero-Trust?', answer: 'Zero-Trust means no user or system is trusted by default, even if they are already inside the corporate network.' }
    ]
  },
  {
    slug: 'devops-excellence',
    title: 'DevOps Excellence',
    shortDescription: 'Streamlined development pipelines and reliable infrastructure.',
    description: 'We bridge the gap between development and operations. We build automated pipelines that compile code, run thousands of tests, and deploy to production multiple times a day with zero downtime.',
    heroImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1400&q=80',
    challenges: [
      { title: 'Manual Deployments', description: 'Error-prone, weekend deployments that require the whole team.' },
      { title: 'Environment Drift', description: 'Code works on a developer\'s machine but crashes in production.' }
    ],
    features: [
      { icon: 'GitBranch', title: 'Continuous Integration', description: 'Automated building and testing of every code commit.' },
      { icon: 'Box', title: 'Containerization', description: 'Using Docker to ensure absolute consistency across all environments.' },
      { icon: 'Eye', title: 'Observability', description: 'Deep monitoring of application health and performance metrics.' }
    ],
    benefits: [
      { metric: 'Minutes', label: 'Time to Recover' },
      { metric: 'Multiple', label: 'Daily Deployments' },
      { metric: '100%', label: 'Environment Parity' }
    ],
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Datadog', 'Prometheus'],
    faqs: [
      { question: 'What is CI/CD?', answer: 'Continuous Integration and Continuous Deployment. It is the automation of testing and releasing software.' },
      { question: 'Do we need Kubernetes?', answer: 'Not always. We match the tool to the scale. Sometimes simple containerized deployments are better; we use Kubernetes when massive orchestration is required.' }
    ]
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    shortDescription: 'Custom portals to monitor, analyze, and direct your business.',
    description: 'We build bespoke BI portals that aggregate your disparate data sources into a single pane of glass. Stop managing your enterprise via spreadsheets and start making decisions based on real-time data.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    challenges: [
      { title: 'Blind Management', description: 'Making critical business decisions based on gut feeling or outdated data.' },
      { title: 'Spreadsheet Hell', description: 'Complex, fragile Excel files that only one person in the company understands.' }
    ],
    features: [
      { icon: 'Layout', title: 'Custom Dashboards', description: 'Web portals built specifically for your KPIs.' },
      { icon: 'Zap', title: 'Real-Time Sync', description: 'Data that updates instantly as transactions occur.' },
      { icon: 'Download', title: 'Automated Reporting', description: 'PDF and email reports generated and sent automatically.' }
    ],
    benefits: [
      { metric: 'Real-Time', label: 'Decision Making' },
      { metric: '100%', label: 'Data Accuracy' },
      { metric: 'Zero', label: 'Manual Reporting' }
    ],
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
    faqs: [
      { question: 'How is this different from buying Tableau?', answer: 'We build custom, proprietary portals. This allows for infinite customization, embedding directly into your workflows, and avoiding expensive per-user licensing fees.' },
      { question: 'Can the dashboard be accessed on mobile?', answer: 'Yes, we build fully responsive web applications or dedicated mobile apps so executives can check KPIs anywhere.' }
    ]
  }
];