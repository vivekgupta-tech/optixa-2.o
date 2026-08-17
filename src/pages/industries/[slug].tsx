import React, { useState } from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { industries } from '@/data/industries';
import { industryDetail } from '@/data';
import NotFound from '../not-found';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Activity,
  Link as LinkIcon,
  Lock,
  Database,
  Eye,
  Smartphone,
  Globe,
  Building,
  ShoppingCart,
  Package,
  CreditCard,
  Factory,
  BarChart3,
  PieChart,
  BookOpen,
  BrainCircuit,
  Rocket,
  Layers,
  Users,
  Box,
  HelpCircle,
  TrendingUp,
  Cpu,
  CheckCircle,
  Server,
  Workflow,
  Zap,
  Sparkles,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Static description texts mapping metrics to detailed descriptions
const statDescriptions: Record<string, string[]> = {
  finance: [
    'Our architectures maintain a flawless 99.999% uptime SLA using multi-region active-active database clustering.',
    'Sub-millisecond API execution times ensure algorithmic trading systems sync without race conditions.',
    'Fully compliant with PCI-DSS Level 1 specifications, utilizing isolated cardholder data environments (CDE).',
    'Dynamic encryption keys are rotated automatically via hardware security modules (HSM).'
  ],
  healthcare: [
    '100% compliant with HIPAA privacy and security rules, backed by Business Associate Agreements (BAA).',
    'Native FHIR R4 mapping modules enable out-of-the-box data sharing with hospital EMR systems.',
    'Rigorous access logs and encryption in use ensure zero PHI data breaches in production.',
    'End-to-end encrypted (E2EE) WebRTC streams connect doctors and patients securely.'
  ],
  retail: [
    'Sub-second Largest Contentful Paint (LCP) speed keeps bounce rates extremely low and conversion rates high.',
    'Auto-scaling edge nodes successfully handle surges of 50x normal traffic during Black Friday drops.',
    'Direct checkout integrations consistently deliver a +42% conversion lift and reduce cart abandonment.',
    'Headless inventory sync processes events in real time to prevent overselling across channels.'
  ],
  manufacturing: [
    'AI anomaly models monitor equipment vibration and temperature, reducing production downtime by 30%.',
    'Real-time OEE dashboards boost production efficiency by 40% through bottleneck visibility.',
    'Industrial monitoring gateways maintain a 99.9% uptime SLA to avoid line stoppages.',
    'Pipelined event ingestion allows 24/7 telemetry monitoring of thousands of factory floor machines.'
  ],
  'real-estate': [
    'Real-time synchronization gives leasing agents 100% visibility across entire property portfolios.',
    'Saved bank accounts and auto-reconciliation enable automated, contactless rent payments.',
    'Live RETS/WebAPI integrations fetch property updates directly from local MLS databases.',
    'A central tenant portal is active 24/7 for maintenance submissions, messaging, and booking.'
  ],
  education: [
    'Adaptive streaming units support high-fidelity 4K video playback with low latency.',
    'Personalized AI tutoring paths boost course completion rates by 45% on average.',
    'Our infrastructure supports 100k+ concurrent users with auto-scaling compute groups.',
    'Full support for SCORM 1.2/2004 and xAPI formats ensures compatibility with authoring tools.'
  ],
  startups: [
    'Our embedded development sprints deliver functional, high-fidelity MVPs in just 6-10 weeks.',
    'Clean, modular architectures ensure that the core code scales from MVP to Series A without rewrites.',
    'All code is delivered with clean git histories and 100% IP ownership transferred to you.',
    'Build and design standards are fully prepared for venture capital technical due diligence.'
  ],
  travel: [
    'Optimized search logic processes itinerary lookups in under 1.5 seconds on average.',
    'Fare pipelines sync pricing in real time, preventing transaction failures due to stale rates.',
    'Secure payment vaults are PCI Level 1 certified, safeguarding cardholder data.',
    'Service worker caching enables travelers to access ticket barcodes and routes offline.'
  ]
};

// Technology descriptions mapping key tech stacks to specific industry roles
const techDetails: Record<string, Record<string, string>> = {
  finance: {
    'Go': 'Chosen for high-concurrency event routing and sub-millisecond API response latency.',
    'Rust': 'Leveraged for memory safety and zero-cost abstractions in core transaction processing.',
    'PostgreSQL': 'Enterprise relational database with Row-Level Security and ACID transaction guarantees.',
    'Kafka': 'Event-streaming backbone processing hundreds of thousands of transactions per second.',
    'AWS': 'Secure cloud hosting within isolated Virtual Private Clouds (VPCs).',
    'Kubernetes': 'Automated orchestrator ensuring zero-downtime rolling updates and high availability.',
    'Vault': 'Military-grade secrets management and dynamic encryption key rotation.'
  },
  healthcare: {
    'Python': 'Used for data cleaning, NLP ingestion of patient records, and clinical analysis.',
    'React Native': 'Powers HIPAA-compliant, secure, and cross-platform patient telehealth applications.',
    'AWS Healthcare': 'Provides fully-compliant BAA protected hosting, FHIR stores, and audit logs.',
    'PostgreSQL': 'Stores medical files securely with strict row-level separation policies.',
    'WebRTC': 'Powers end-to-end encrypted video consults with sub-150ms connection latency.',
    'FHIR': 'Industry standard interoperability format for data sharing with hospital EMR systems.'
  },
  retail: {
    'Next.js': 'Delivers headless storefront architectures with sub-second LCP speeds.',
    'Shopify Plus': 'Enterprise commerce engine managing catalogs, checkouts, and customer databases.',
    'Stripe': 'Payment API gateway supporting digital wallets, BNPL, and local checkout options.',
    'Redis': 'High-performance cache layer ensuring instantaneous inventory synchronization.',
    'Vercel': 'Global edge network serving content globally at lightning-fast speed.',
    'GraphQL': 'Single endpoint API layer aggregating inventory, products, and user carts.'
  },
  manufacturing: {
    'React': 'Renders real-time telemetry dashboards and smart factory controls.',
    'Node.js': 'Handles high-throughput data processing from connected factory floor sensors.',
    'Python': 'Powers anomaly detection models that predict equipment failures before they happen.',
    'IoT': 'Connects PLC systems and hardware devices directly to our cloud gateways.',
    'MongoDB': 'Stores high-frequency sensor readings in flexible time-series document structures.',
    'AWS': 'Auto-scaling infrastructure managing petabytes of industrial operations data.'
  },
  'real-estate': {
    'React': 'Powers interactive map overlays, filters, and property search dashboards.',
    'Node.js': 'Bridges CRM APIs, payment platforms, and document generation modules.',
    'PostgreSQL': 'Relational DB backing complex queries for comps and automated valuations.',
    'Mapbox': 'Provides smooth maps for localized comps and neighborhood details.',
    'Stripe': 'Powers tenant super-app payments supporting credit cards, ACH, and digital wallets.',
    'TensorFlow': 'Machine learning engine powering our Automated Valuation Models (AVMs).'
  },
  education: {
    'Next.js': 'Powers fast, SEO-friendly marketing pages and responsive student dashboards.',
    'WebRTC': 'Powers interactive live classrooms with dynamic breakout rooms.',
    'Node.js': 'Handles session handshakes, quiz scoring, and content delivery pipelines.',
    'MongoDB': 'Flexible database structure accommodating dynamic course maps and curriculums.',
    'AWS': 'Global CDN edge nodes streaming course material to thousands of students.',
    'OpenAI': 'Powers personal AI tutors that answer questions based on course PDFs.'
  },
  startups: {
    'React': 'Enables fast development of responsive, interactive frontend MVPs.',
    'Node.js': 'Powers modular backend microservices that adapt to shifting user demands.',
    'Supabase': 'Provides authentication, database triggers, and storage out-of-the-box.',
    'Tailwind': 'Enables rapid, clean UI building with custom, uniform designs.',
    'Vercel': 'Deploys updates instantly with automatic preview URLs for stakeholders.',
    'PostgreSQL': 'Scalable database backing the core business logic from MVP to Series A.'
  },
  travel: {
    'React Native': 'Powers offline-first travel companion mobile apps with local caching.',
    'Go': 'High-performance parsing engine translating legacy GDS/NDC API data formats.',
    'Redis': 'Caches flight fares and room availabilities to prevent expensive GDS API calls.',
    'PostgreSQL': 'Maintains booking records, transactions, and user profiles securely.',
    'AWS': 'Reliable, global cloud scaling that keeps booking engines online 24/7.',
    'Elasticsearch': 'Delivers rapid, faceted search for destinations, itineraries, and rates.'
  }
};

export default function IndustryDetail() {
  const params = useParams();
  const industry = industries.find(s => s.slug === params.slug);

  if (!industry) return <NotFound />;

  // Interactive UI states
  const [activeMetricIdx, setActiveMetricIdx] = useState<number>(0);
  const [hoveredChallengeIdx, setHoveredChallengeIdx] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Dynamic colors and themes depending on the industry slug
  const getThemeConfig = (slug: string) => {
    switch (slug) {
      case 'finance':
        return {
          themeName: 'finance',
          bgHero: 'bg-gradient-to-br from-[#0b0c10] via-[#111116] to-[#07070a]',
          glowBlob1: 'bg-amber-500/10',
          glowBlob2: 'bg-yellow-500/5',
          accentBorder: 'border-amber-500/20 group-hover:border-amber-400/40',
          accentText: 'text-amber-400',
          accentTextHover: 'group-hover:text-amber-400',
          accentBg: 'bg-amber-400',
          badgeBg: 'bg-amber-500/10 border-amber-500/20',
          buttonClass: 'bg-amber-500 text-black hover:bg-white hover:text-black shadow-amber-500/15',
          iconWrapper: 'bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500',
          titleGradient: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 40%, #e8c97a 80%, #f5c842 100%)',
          specialLabel: 'FINANCIAL SECURE PROTOCOL INTEGRITY',
        };
      case 'healthcare':
        return {
          themeName: 'healthcare',
          bgHero: 'bg-gradient-to-br from-[#061214] via-[#0a1e22] to-[#04090b]',
          glowBlob1: 'bg-teal-500/10',
          glowBlob2: 'bg-sky-500/5',
          accentBorder: 'border-teal-500/20 group-hover:border-teal-400/40',
          accentText: 'text-teal-400',
          accentTextHover: 'group-hover:text-teal-400',
          accentBg: 'bg-teal-400',
          badgeBg: 'bg-teal-500/10 border-teal-500/20',
          buttonClass: 'bg-teal-500 text-teal-950 hover:bg-white hover:text-black shadow-teal-500/15',
          iconWrapper: 'bg-teal-500/10 border border-teal-500/20 text-teal-400 group-hover:bg-teal-500 group-hover:text-teal-950 group-hover:border-teal-500',
          titleGradient: 'linear-gradient(135deg, #ffffff 0%, #d8f3dc 40%, #52b788 85%, #1b4332 100%)',
          specialLabel: 'HIPAA INTEROPERABLE RECORDS FLOW',
        };
      case 'retail':
        return {
          themeName: 'retail',
          bgHero: 'bg-gradient-to-br from-[#0f0b1a] via-[#160f2c] to-[#090610]',
          glowBlob1: 'bg-purple-500/10',
          glowBlob2: 'bg-indigo-500/5',
          accentBorder: 'border-purple-500/20 group-hover:border-purple-400/40',
          accentText: 'text-purple-400',
          accentTextHover: 'group-hover:text-purple-400',
          accentBg: 'bg-purple-400',
          badgeBg: 'bg-purple-500/10 border-purple-500/20',
          buttonClass: 'bg-purple-500 text-white hover:bg-white hover:text-black shadow-purple-500/15',
          iconWrapper: 'bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500',
          titleGradient: 'linear-gradient(135deg, #ffffff 0%, #f3e8ff 45%, #c084fc 80%, #a855f7 100%)',
          specialLabel: 'HEADLESS HIGH CONVERSION SPEED TIMELINE',
        };
      case 'startups':
        return {
          themeName: 'startups',
          bgHero: 'bg-gradient-to-br from-[#051108] via-[#092211] to-[#030905]',
          glowBlob1: 'bg-green-500/10',
          glowBlob2: 'bg-emerald-500/5',
          accentBorder: 'border-green-500/20 group-hover:border-green-400/40',
          accentText: 'text-green-400',
          accentTextHover: 'group-hover:text-green-400',
          accentBg: 'bg-green-400',
          badgeBg: 'bg-green-500/10 border-green-500/20',
          buttonClass: 'bg-green-500 text-green-950 hover:bg-white hover:text-black shadow-green-500/15',
          iconWrapper: 'bg-green-500/10 border border-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-green-950 group-hover:border-green-500',
          titleGradient: 'linear-gradient(135deg, #ffffff 0%, #dcfce7 40%, #4ade80 80%, #22c55e 100%)',
          specialLabel: '6-10 WEEK FULL DELIVERY SPRINT MAP',
        };
      default:
        return {
          themeName: 'default',
          bgHero: 'bg-gradient-to-br from-[#0a0a0c] via-[#101015] to-[#050508]',
          glowBlob1: 'bg-primary/10',
          glowBlob2: 'bg-primary/5',
          accentBorder: 'border-primary/20 group-hover:border-primary/45',
          accentText: 'text-primary',
          accentTextHover: 'group-hover:text-primary',
          accentBg: 'bg-primary',
          badgeBg: 'bg-primary/10 border-primary/20',
          buttonClass: 'bg-primary text-primary-foreground hover:bg-white hover:text-black shadow-primary/15',
          iconWrapper: 'bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary',
          titleGradient: 'linear-gradient(135deg, #ffffff 0%, #f4f4f5 40%, hsl(var(--primary)) 100%)',
          specialLabel: 'NEXT-GENERATION ENTERPRISE ARCHITECTURE',
        };
    }
  };

  const theme = getThemeConfig(industry.slug);

  // Precise icon resolver based on key industry requirements
  const getIcon = (name: string, className = "w-6 h-6") => {
    const props = { className };
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Link': return <LinkIcon {...props} />;
      case 'Lock': return <Lock {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Video': return <Eye {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Building': return <Building {...props} />;
      case 'ShoppingCart': return <ShoppingCart {...props} />;
      case 'Package': return <Package {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'Factory': return <Factory {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'PieChart': return <PieChart {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'BrainCircuit': return <BrainCircuit {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Users': return <Users {...props} />;
      default: return <Box {...props} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground relative overflow-hidden">

      {/* ═══════════════════════════════════════
          1. HERO SECTION — Asymmetric Canvas
          ═══════════════════════════════════════ */}
      <section className={`relative pt-44 pb-32 md:pt-52 md:pb-40 ${theme.bgHero} overflow-hidden min-h-[85vh] flex items-center border-b border-white/5`}>

        {/* Glow Blob Elements */}
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full ${theme.glowBlob1} blur-[140px] pointer-events-none -translate-y-1/2 -translate-x-1/2`} />
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full ${theme.glowBlob2} blur-[120px] pointer-events-none translate-y-1/3`} />

        {/* Subtle dynamic technical background grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <ScrollReveal>

                {/* Back to industries list nav */}
                <div className="mb-6">
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors duration-300 font-semibold text-xs uppercase tracking-widest group"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    Back to Industries
                  </Link>
                </div>

                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${theme.badgeBg} border backdrop-blur-md text-xs font-bold ${theme.accentText} uppercase tracking-widest mb-2 shadow-sm`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  {industryDetail.hero.subtitle}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight"
                  style={{
                    fontFamily: 'var(--app-font-serif, serif)',
                    background: theme.titleGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {industry.title}
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl pt-2 font-light">
                  {industry.shortDescription}
                </p>

                <div className="flex flex-wrap gap-4 pt-6">
                  <Button asChild size="lg" className={`h-14 px-8 text-base font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg ${theme.buttonClass}`}>
                    <Link href={industryDetail.hero.btnLink}>
                      {industryDetail.hero.btnPrefix} {industryDetail.hero.btnSuffix}
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Asset Column */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={0.25}>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/30 p-3 backdrop-blur-md shadow-2xl group transition-all duration-500 hover:border-primary/20"
                  style={{ boxShadow: '0 32px 70px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.06)' }}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                    <img
                      src={industry.heroImage}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Glowing ring accent */}
                <div className="absolute -inset-1 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. OVERVIEW — Elegant Editorial Showcase ─── */}
      <section className="py-24 bg-background relative border-b border-border">
        <div className="container mx-auto px-4 md:px-10 max-w-7xl">
          <ScrollReveal className="space-y-6">
            <div className="flex justify-center w-full mb-4">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.badgeBg} border backdrop-blur-md text-xs font-bold ${theme.accentText} uppercase tracking-widest shadow-sm`}>
                {industryDetail.overview.title}
              </div>
            </div>
            <div className="space-y-4 text-left">
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal w-full max-w-none">
                {industry.overview}
              </p>
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal w-full max-w-none">
                {industry.slug === 'finance'
                  ? 'By implementing a multi-region active-active architecture, we ensure complete transactional redundancy. Our event-driven ledger designs separate query paths from processing blocks, delivering zero-compromise speed and structural reliability under high-load conditions.'
                  : industry.slug === 'healthcare'
                    ? 'Our HIPAA-compliant system integrations bridges the gap between EHR stores and patient consultation layers. By implementing secure WebRTC pipelines with sub-150ms connection speeds, we empower medical providers to deliver clinical diagnoses with absolute privacy and confidence.'
                    : industry.slug === 'retail'
                      ? 'Optimized headless storefronts are connected directly to dynamic Redis cache layers. By reducing server response time to 35ms, we prevent cart abandonment and scale checkout pipelines automatically to support peak traffic events without bottleneck latency.'
                      : industry.slug === 'startups'
                        ? 'We operate as an embedded technology pod, executing rapid launch roadmaps in 6-10 weeks. Our architectures are modeled on clean programming principles to transition directly to your internal engineering team, fully prepared for VC technical due diligence.'
                        : 'We design and deploy modern software systems tailored specifically to eliminate legacy infrastructure limitations. Our principal engineers collaborate closely with your teams to identify operational bottlenecks and integrate robust web technologies.'
                }
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 3. INTERACTIVE STATS DASHBOARD — Interactive Metrics ─── */}
      <section className="py-24 bg-muted/10 border-b border-border relative">
        <div className="container mx-auto px-4 md:px-10 max-w-7xl">
          <ScrollReveal className="text-center mb-16 space-y-3">
            <span className={`text-xs font-bold ${theme.accentText} uppercase tracking-widest`}>Operational Capabilities</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground" style={{ fontFamily: 'var(--app-font-serif, serif)' }}>Interactive Performance Metrics</h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-10 items-center w-full">
            {/* Left side: Metrics list buttons */}
            <div className="md:col-span-5 space-y-3">
              {industry.stats.map((stat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMetricIdx(idx)}
                  className={cn(
                    "w-full p-5 text-left rounded-xl border transition-all duration-300 flex items-center justify-between group",
                    activeMetricIdx === idx
                      ? "bg-card border-primary shadow-md"
                      : "bg-card/40 border-border hover:bg-card/70 hover:border-primary/30"
                  )}
                >
                  <div>
                    <p className={cn("text-2xl font-black transition-colors", activeMetricIdx === idx ? theme.accentText : "text-foreground")}>{stat.metric}</p>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{stat.label}</p>
                  </div>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeMetricIdx === idx ? "rotate-90 text-primary" : "text-muted-foreground")} />
                </button>
              ))}
            </div>

            {/* Right side: Detailed card */}
            <div className="md:col-span-7 h-full flex items-stretch">
              <div className="bg-card border border-border p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden w-full">
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Info className="w-5 h-5" />
                    <span className="text-xs uppercase font-extrabold tracking-widest">How we achieve this</span>
                  </div>
                  <p className="text-foreground text-lg leading-relaxed font-light">
                    {statDescriptions[industry.slug]?.[activeMetricIdx] || 'Our systems are backed by automated SLA monitors, auto-scaling microservices, and dedicated testing structures.'}
                  </p>
                </div>

                <div className="pt-6 border-t border-border mt-8 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Metric verification: Active</span>
                  <span className="flex items-center gap-1.5 font-bold text-green-500">
                    <CheckCircle className="w-3.5 h-3.5" /> Checked
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. INTERACTIVE CHALLENGES & SOLUTIONS split layout ─── */}
      <section className="py-24 md:py-32 bg-background border-b border-border relative">
        <div className="container mx-auto px-4 md:px-10">
          <ScrollReveal className="mb-20 text-center space-y-3">
            <span className={`text-xs font-bold ${theme.accentText} uppercase tracking-widest`}>Problems & Solutions</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground" style={{ fontFamily: 'var(--app-font-serif, serif)' }}>Interactive Solutions Framework</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto font-light">Hover over a challenge on the left to see exactly how our architected solutions address it.</p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Side: Challenges */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
              {industry.challenges.map((challenge, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredChallengeIdx(i)}
                  onMouseLeave={() => setHoveredChallengeIdx(null)}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative group",
                    (hoveredChallengeIdx === i || hoveredChallengeIdx === null)
                      ? "bg-card border-primary/20 shadow-md"
                      : "bg-card/20 border-border opacity-50"
                  )}
                >
                  {/* Glowing border indicator on hover */}
                  {hoveredChallengeIdx === i && (
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${theme.accentBg} rounded-l-2xl`} />
                  )}

                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors",
                      hoveredChallengeIdx === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}>
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className={cn("font-bold text-base mb-1 transition-colors", hoveredChallengeIdx === i ? "text-primary" : "text-foreground")}>{challenge.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed font-light">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle: SVG connection line (visible on large screen) */}
            <div className="hidden lg:col-span-2 lg:flex flex-col items-center justify-center relative">
              <div className="w-[1px] h-full bg-gradient-to-b from-border via-primary/30 to-border absolute top-0 bottom-0" />
              {hoveredChallengeIdx !== null && (
                <div
                  className="w-4 h-4 rounded-full bg-primary animate-ping absolute transition-all duration-300"
                  style={{
                    top: `${16 + (hoveredChallengeIdx * 34)}%`
                  }}
                />
              )}
            </div>

            {/* Right Side: Solutions */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
              {industry.solutions.map((sol, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-500 text-left relative overflow-hidden flex items-start gap-4",
                    (hoveredChallengeIdx === i || hoveredChallengeIdx === null)
                      ? "bg-card border-primary/20 shadow-md translate-x-0 opacity-100"
                      : "bg-card/10 border-border/50 scale-[0.98] opacity-30"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                    hoveredChallengeIdx === i ? "bg-primary text-primary-foreground" : "bg-muted text-primary"
                  )}>
                    {getIcon(sol.icon, "w-5 h-5")}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">{sol.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed font-light">{sol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. TECHNOLOGY PLAYGROUND — Interactive Badges with custom code tooltips ─── */}
      <section className="py-24 bg-[#09090b] border-b border-white/5 relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-10 max-w-5xl text-center space-y-8">
          <ScrollReveal>
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--app-font-serif, serif)' }}>
              {industryDetail.technologies.title}
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">Select any tool from our verified tech stack below to see exactly how and why we deploy it.</p>

            <div className="flex flex-wrap justify-center gap-3 pt-6">
              {industry.technologies.map((tech, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={cn(
                    "px-5 py-2.5 bg-zinc-900 border transition-all duration-300 font-semibold text-sm rounded-xl shadow-sm flex items-center gap-2",
                    selectedTech === tech
                      ? "border-primary text-white bg-primary/10"
                      : "border-zinc-800 text-zinc-300 hover:border-primary/50 hover:text-white"
                  )}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Injected technology explanation box */}
            {selectedTech && (
              <div className="mt-8 p-6 bg-zinc-900/60 border border-primary/20 rounded-2xl max-w-2xl mx-auto text-left relative animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{selectedTech} Deployment Role</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      {techDetails[industry.slug]?.[selectedTech] || 'Leveraged to support dynamic, low-latency API routes, robust database structures, and high availability hosting.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 6. VISUAL DATA FLOW PIPELINE — Custom diagrams per slug ─── */}
      <section className="py-24 bg-background border-b border-border relative">
        <div className="container mx-auto px-4 md:px-10 max-w-5xl">
          <ScrollReveal className="space-y-12">
            <div className="text-center space-y-3">
              <span className={`text-xs font-bold ${theme.accentText} uppercase tracking-widest`}>{theme.specialLabel}</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground" style={{ fontFamily: 'var(--app-font-serif, serif)' }}>Data Architecture Pipeline</h3>
            </div>

            {/* Custom SVG Data Pathway diagram */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                {industry.slug === 'finance' && [
                  { label: 'Client API Handshake', desc: 'Secure payload signature verification & token injection', icon: <Server className="w-5 h-5" /> },
                  { label: 'Shield Sandbox', desc: 'Threat isolation, sanitization & policy routing', icon: <Lock className="w-5 h-5" /> },
                  { label: 'ACID Transaction Ledger', desc: 'Immutable database state commits via PostgreSQL', icon: <Database className="w-5 h-5" /> }
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="text-center flex-1 max-w-xs space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
                        {step.icon}
                      </div>
                      <h4 className="font-bold text-foreground text-sm">{step.label}</h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-amber-500/30 to-amber-500/10" />
                    )}
                  </React.Fragment>
                ))}

                {industry.slug === 'healthcare' && [
                  { label: 'Clinical Intake', desc: 'Secure medical questionnaire records submission', icon: <Smartphone className="w-5 h-5" /> },
                  { label: 'FHIR Translator', desc: 'Data parsing & schema formatting to FHIR standards', icon: <Workflow className="w-5 h-5" /> },
                  { label: 'BAA Guarded Vault', desc: 'Protected health logs storage under HIPAA policies', icon: <Database className="w-5 h-5" /> }
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="text-center flex-1 max-w-xs space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto text-teal-400">
                        {step.icon}
                      </div>
                      <h4 className="font-bold text-foreground text-sm">{step.label}</h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-teal-500/30 to-teal-500/10" />
                    )}
                  </React.Fragment>
                ))}

                {industry.slug === 'retail' && [
                  { label: 'Static CDN CDN Request', desc: 'Instant file loading via Vercel edge nodes', icon: <Globe className="w-5 h-5" /> },
                  { label: 'GraphQL API Sync', desc: 'Aggregated product queries to Shopify databases', icon: <Workflow className="w-5 h-5" /> },
                  { label: 'One-Tap Wallet Dispatch', desc: 'Secure payment settlement via Stripe checkout', icon: <CreditCard className="w-5 h-5" /> }
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="text-center flex-1 max-w-xs space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto text-purple-400">
                        {step.icon}
                      </div>
                      <h4 className="font-bold text-foreground text-sm">{step.label}</h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-purple-500/30 to-purple-500/10" />
                    )}
                  </React.Fragment>
                ))}

                {!['finance', 'healthcare', 'retail'].includes(industry.slug) && [
                  { label: 'Input Request', desc: 'Secure client interface API handshake', icon: <Server className="w-5 h-5" /> },
                  { label: 'Orchestrated Sync', desc: 'Low-latency backend microservice processing', icon: <Workflow className="w-5 h-5" /> },
                  { label: 'Verified Database Store', desc: 'PostgreSQL relational schema storage', icon: <Database className="w-5 h-5" /> }
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="text-center flex-1 max-w-xs space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary">
                        {step.icon}
                      </div>
                      <h4 className="font-bold text-foreground text-sm">{step.label}</h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-primary/30 to-primary/10" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 7. FAQ ACCORDIONS ─── */}
      <section className="py-24 md:py-32 bg-muted/20 relative">
        <div className="container mx-auto px-4 md:px-10 max-w-4xl">
          <ScrollReveal className="text-center mb-16 space-y-3">
            <span className={`text-xs font-bold ${theme.accentText} uppercase tracking-widest flex items-center justify-center gap-1.5`}>
              <HelpCircle className="w-4.5 h-4.5" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">{industryDetail.faq.title}</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-card hover:bg-accent/5 border border-border p-6 rounded-2xl transition-all duration-300">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">

                    <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg text-foreground focus:outline-none select-none font-sans">
                      <span>{faq.question}</span>

                      <span className={`p-2 rounded-lg bg-muted text-muted-foreground group-open:bg-primary group-open:text-primary-foreground transition-colors duration-300 ml-4 shrink-0`}>
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-300" />
                      </span>
                    </summary>

                    <p className="text-muted-foreground mt-4 text-base leading-relaxed border-t border-border pt-4 font-light">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CTA SECTION ─── */}
      <section className="py-24 bg-[#0a0a0a] text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-10 relative z-10 max-w-4xl">
          <ScrollReveal className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" style={{ fontFamily: 'var(--app-font-serif, serif)' }}>
              {industryDetail.cta.title}
            </h2>

            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Connect with our principal engineering architects to review your pipeline requirements.
            </p>

            <Button asChild size="lg" className={`h-16 px-10 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl ${theme.buttonClass}`}>
              <Link href={industryDetail.cta.btn.link}>{industryDetail.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}