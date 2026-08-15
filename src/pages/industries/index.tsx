import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { Industry, industries } from '@/data/industries';
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Layers,
  Shield,
  Play
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Custom hook: Intersection Observer ──
function useInView(options = {}): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// ── Animated Counter ──
function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref as any}>{count}{suffix}</span>;
}

// ── Gold Gradient Text ──
function GoldText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn(
      "bg-gradient-to-r from-[hsl(29,36%,56%)] via-[hsl(35,50%,65%)] to-[hsl(29,36%,56%)] bg-clip-text text-transparent",
      className
    )}>
      {children}
    </span>
  );
}

// ── Magnetic Button Effect ──
function MagneticButton({ children, className, onClick, ariaLabel, style }: { children?: React.ReactNode; className?: string; onClick?: () => void; ariaLabel?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  }, []);

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      style={style}
      className={cn("transition-transform duration-200 ease-out", className)}
    >
      {children}
    </button>
  );
}

// ── Featured Industry Card ──
function FeaturedCard({ industry, index }: { industry: Industry; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex-shrink-0 w-[85vw] md:w-[560px] h-[460px] md:h-[540px] rounded-2xl overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <img 
          src={industry.heroImage} 
          alt={industry.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Multi-layer Overlay for depth */}
        <div className="absolute inset-0 bg-[hsl(var(--sidebar))]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--sidebar))] via-[hsl(var(--sidebar))/0.7] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))/0.1] to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
        <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md"
              style={{ 
                backgroundColor: 'hsl(var(--primary) / 0.2)', 
                color: 'hsl(var(--primary))',
                border: '1px solid hsl(var(--primary) / 0.3)'
              }}
            >
              0{index + 1}
            </span>
            <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
              Core Sector
            </span>
          </div>

          <h3 
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--app-font-serif)' }}
          >
            {industry.title}
          </h3>

          <p className="text-white/60 text-base md:text-lg mb-6 line-clamp-2 max-w-md leading-relaxed">
            {industry.overview}
          </p>

          {/* Solutions on Hover */}
          <div className={cn(
            "space-y-2.5 mb-8 transition-all duration-500 overflow-hidden",
            isHovered ? "max-h-36 opacity-100" : "max-h-0 opacity-0"
          )}>
            {industry.solutions.slice(0, 2).map((sol: any, i: number) => (
              <div key={i} className="flex items-center gap-2.5 text-white/80">
                <CheckCircle2 
                  className="w-4 h-4 shrink-0" 
                  style={{ color: 'hsl(var(--primary))' }} 
                />
                <span className="text-sm font-medium">{sol.title}</span>
              </div>
            ))}
          </div>

          <Link href={`/industries/${industry.slug}`}>
            <span 
              className="inline-flex items-center gap-2 font-bold text-base group/link transition-colors"
              style={{ color: 'hsl(var(--primary))' }}
            >
              Explore Solutions
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Corner Accent */}
      <div 
        className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md"
        style={{ 
          backgroundColor: 'hsl(var(--primary) / 0.15)', 
          border: '1px solid hsl(var(--primary) / 0.3)' 
        }}
      >
        <ArrowUpRight 
          className="w-5 h-5" 
          style={{ color: 'hsl(var(--primary))' }} 
        />
      </div>
    </div>
  );
}

// ── Uniform Grid Card ──
function GridCard({ industry, index }: { industry: Industry; index: number }) {
  const [ref, isInView] = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      ref={ref as any}
      className="group relative rounded-xl overflow-hidden border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-[hsl(var(--primary)/0.3)]"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/industries/${industry.slug}`} className="block h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden h-52">
          <img 
            src={industry.heroImage} 
            alt={industry.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[hsl(var(--overlay)/0.3)] group-hover:bg-[hsl(var(--overlay)/0.1)] transition-colors duration-500" />

          {/* Hover Overlay Icon */}
          <div className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md"
              style={{ backgroundColor: 'hsl(var(--primary) / 0.2)', border: '1px solid hsl(var(--primary) / 0.4)' }}
            >
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between mb-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
            >
              <Building2 
                className="w-5 h-5 transition-colors" 
                style={{ color: 'hsl(var(--primary))' }} 
              />
            </div>
            <ArrowUpRight 
              className="w-5 h-5 transition-all duration-300 group-hover:text-[hsl(var(--primary))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              style={{ color: 'hsl(var(--muted-foreground))' }}
            />
          </div>

          <h3 
            className="text-lg font-extrabold text-foreground mb-2 transition-colors group-hover:text-[hsl(var(--primary))]"
            style={{ fontFamily: 'var(--app-font-serif)' }}
          >
            {industry.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
            {industry.shortDescription}
          </p>

          {/* Tags */}
          {industry.solutions && (
            <div className="flex flex-wrap gap-2">
              {industry.solutions.slice(0, 3).map((sol: any, i: number) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'hsl(var(--muted))', 
                    color: 'hsl(var(--muted-foreground))' 
                  }}
                >
                  {sol.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

// ── Animated Background Gradient ──
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 animate-pulse"
        style={{ backgroundColor: 'hsl(var(--primary))' }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 animate-pulse"
        style={{ backgroundColor: 'hsl(var(--primary))', animationDelay: '2s' }}
      />
    </div>
  );
}

export default function Industries() {
  const featuredIndustries = industries.slice(0, 4);
  const gridIndustries = industries.slice(4);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -620 : 620,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { icon: Building2, value: 50, suffix: "+", label: "Industries Served" },
    { icon: Globe, value: 120, suffix: "+", label: "Countries Reached" },
    { icon: Zap, value: 500, suffix: "+", label: "Solutions Delivered" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Client Retention" },
  ];

  const whyChooseItems = [
    { title: "Deep Industry Knowledge", desc: "Specialized teams with decades of domain-specific expertise and battle-tested playbooks." },
    { title: "Cloud-Native Architecture", desc: "Kubernetes-first, serverless-ready foundations designed for elastic scale and resilience." },
    { icon: Shield, title: "Security-First Design", desc: "SOC 2 Type II, ISO 27001, and GDPR compliance baked into every layer of the stack." },
    { title: "24/7 Global Support", desc: "Follow-the-sun engineering coverage with guaranteed SLAs and dedicated success managers." },
  ];

  return (
    <div className="w-full" style={{ backgroundColor: 'hsl(var(--background))' }}>

      {/* ═══════════════════════════════════════
          1. HERO SECTION
         ═══════════════════════════════════════ */}
      <section 
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: 'hsl(var(--sidebar))' }}
      >
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--sidebar-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--sidebar-foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 backdrop-blur-md"
                style={{ 
                  backgroundColor: 'hsl(var(--primary) / 0.1)', 
                  border: '1px solid hsl(var(--primary) / 0.2)',
                  color: 'hsl(var(--primary))'
                }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Industry-Leading Solutions</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-8 tracking-tight leading-[1.05]"
                style={{ fontFamily: 'var(--app-font-serif)' }}
              >
                Engineering <br />
                <GoldText>Industry Excellence</GoldText>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p 
                className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                style={{ color: 'hsl(var(--sidebar-foreground) / 0.55)' }}
              >
                We partner with ambitious organizations across eight core sectors — from Wall Street trading floors to hospital operating rooms — delivering software that moves markets, saves lives, and transforms industries.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="h-14 px-8 text-base rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg"
                  style={{ 
                    backgroundColor: 'hsl(var(--primary))', 
                    color: 'hsl(var(--primary-foreground))',
                    boxShadow: '0 10px 40px -10px hsl(var(--primary) / 0.5)'
                  }}
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 text-base rounded-full font-bold border-2 bg-transparent text-white hover:bg-white/10 hover:text-white transition-all"
                  style={{ borderColor: 'hsl(var(--sidebar-foreground) / 0.2)' }}
                >
                  <Link href="#industries-grid">Explore Sectors</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/30 font-medium">Scroll</span>
            <div 
              className="w-6 h-10 rounded-full flex items-start justify-center p-2"
              style={{ border: '2px solid hsl(var(--sidebar-foreground) / 0.2)' }}
            >
              <div 
                className="w-1 h-2 rounded-full animate-bounce"
                style={{ backgroundColor: 'hsl(var(--primary))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. STATS BAR
         ═══════════════════════════════════════ */}
      <section 
        className="py-16 md:py-20 border-y relative"
        style={{ 
          borderColor: 'hsl(var(--border))', 
          backgroundColor: 'hsl(var(--muted))' 
        }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center group relative">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'hsl(var(--primary) / 0.1)',
                      boxShadow: '0 0 0 0 hsl(var(--primary) / 0.3)'
                    }}
                  >
                    <stat.icon 
                      className="w-7 h-7" 
                      style={{ color: 'hsl(var(--primary))' }} 
                    />
                  </div>
                  <div 
                    className="text-4xl md:text-5xl font-extrabold mb-2"
                    style={{ 
                      fontFamily: 'var(--app-font-serif)', 
                      color: 'hsl(var(--foreground))' 
                    }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. FEATURED INDUSTRIES — Horizontal Scroll
         ═══════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: 'hsl(var(--background))' }}
      >
        {/* Section Header */}
        <div className="container mx-auto px-4 md:px-8 mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <ScrollReveal>
              <div>
                <span
                  className="font-bold text-xs uppercase tracking-[0.2em] mb-3 block"
                  style={{ color: 'hsl(var(--primary))' }}
                >
                  Core Sectors
                </span>
                <h2
                  className="text-4xl md:text-5xl font-extrabold tracking-tight"
                  style={{
                    fontFamily: 'var(--app-font-serif)',
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  Featured <GoldText>Industries</GoldText>
                </h2>
              </div>
            </ScrollReveal>

            {/* Navigation Buttons — Desktop Only */}
            <ScrollReveal delay={0.1}>
              <div className="hidden md:flex items-center gap-3">
                <MagneticButton
                  onClick={() => scroll('left')}
                  className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                    canScrollLeft 
                      ? "opacity-100 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]" 
                      : "opacity-30 cursor-not-allowed"
                  )}
                  style={{
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--foreground))',
                    backgroundColor: 'hsl(var(--background))',
                  }}
                  ariaLabel="Previous industry"
                >
                  <ChevronLeft className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton
                  onClick={() => scroll('right')}
                  className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                    canScrollRight 
                      ? "opacity-100 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]" 
                      : "opacity-30 cursor-not-allowed"
                  )}
                  style={{
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--foreground))',
                    backgroundColor: 'hsl(var(--background))',
                  }}
                  ariaLabel="Next industry"
                >
                  <ChevronRight className="w-5 h-5" />
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Industry Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto px-4 md:px-8 pb-8 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {featuredIndustries.map((industry, index) => (
            <div key={industry.slug} className="snap-center">
              <FeaturedCard industry={industry} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={() => scroll('left')}
            className={cn(
              "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
              canScrollLeft ? "opacity-100" : "opacity-30"
            )}
            style={{
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsl(var(--background))',
            }}
            aria-label="Previous industry"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={cn(
              "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
              canScrollRight ? "opacity-100" : "opacity-30"
            )}
            style={{
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsl(var(--background))',
            }}
            aria-label="Next industry"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. ALL INDUSTRIES — Uniform Grid
         ═══════════════════════════════════════ */}
<section
  id="industries-grid"
  className="py-24 md:py-32 relative"
  style={{ backgroundColor: 'hsl(var(--muted))' }}
>
  <div className="container mx-auto px-4 md:px-8">
    <ScrollReveal className="text-center mb-16">
      <span
        className="font-bold text-xs uppercase tracking-[0.2em] mb-3 block"
        style={{ color: 'hsl(var(--primary))' }}
      >
        Explore More
      </span>

      <h2
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5"
        style={{
          fontFamily: 'var(--app-font-serif)',
          color: 'hsl(var(--foreground))',
        }}
      >
        All <GoldText>Sectors</GoldText>
      </h2>

      <p
        className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        Discover tailored solutions across diverse industries designed to
        accelerate growth, reduce risk, and future-proof your technology
        investments.
      </p>
    </ScrollReveal>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {gridIndustries.map((industry, index) => (
        <GridCard
          key={industry.slug}
          industry={industry}
          index={index}
        />
      ))}
    </div>
  </div>
</section>

      {/* ═══════════════════════════════════════
          5. WHY CHOOSE US — Split Layout
         ═══════════════════════════════════════ */}
      <section 
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'hsl(var(--background))' }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative group">
                <div 
                  className="absolute -inset-4 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ backgroundColor: 'hsl(var(--primary))' }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" 
                    alt="Modern engineering workspace"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--sidebar))/0.4] to-transparent" />
                </div>

                {/* Floating Badge */}
                <div 
                  className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-xl max-w-xs hidden md:block border backdrop-blur-md"
                  style={{ 
                    backgroundColor: 'hsl(var(--card) / 0.95)', 
                    borderColor: 'hsl(var(--border))',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'hsl(var(--primary) / 0.15)' }}
                    >
                      <Shield 
                        className="w-5 h-5" 
                        style={{ color: 'hsl(var(--primary))' }} 
                      />
                    </div>
                    <span 
                      className="font-extrabold"
                      style={{ 
                        fontFamily: 'var(--app-font-serif)', 
                        color: 'hsl(var(--foreground))' 
                      }}
                    >
                      Enterprise Grade
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Trusted by Fortune 500 companies and high-growth startups alike
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <span 
                  className="font-bold text-xs uppercase tracking-[0.2em] mb-3 block"
                  style={{ color: 'hsl(var(--primary))' }}
                >
                  Why Choose Us
                </span>
                <h2 
                  className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
                  style={{ 
                    fontFamily: 'var(--app-font-serif)', 
                    color: 'hsl(var(--foreground))' 
                  }}
                >
                  Expertise That <GoldText>Delivers Results</GoldText>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p 
                  className="text-lg leading-relaxed mb-10"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  With decades of combined experience across regulated industries, we do not just write code — we architect competitive advantages. Our battle-tested methodologies ensure every deployment drives measurable business outcomes.
                </p>
              </ScrollReveal>

              <div className="space-y-3">
                {whyChooseItems.map((item, i) => (
                  <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                    <div 
                      className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[hsl(var(--muted))] group cursor-default"
                    >
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                      >
                        <CheckCircle2 
                          className="w-5 h-5" 
                          style={{ color: 'hsl(var(--primary))' }} 
                        />
                      </div>
                      <div>
                        <h4 
                          className="font-extrabold text-base mb-1"
                          style={{ 
                            fontFamily: 'var(--app-font-serif)', 
                            color: 'hsl(var(--foreground))' 
                          }}
                        >
                          {item.title}
                        </h4>
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. CTA — Navy Background + Gold Accent
         ═══════════════════════════════════════ */}
      <section 
        className="py-28 md:py-36 relative overflow-hidden"
        style={{ backgroundColor: 'hsl(var(--sidebar))' }}
      >
        {/* Animated Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[200px] opacity-10"
          style={{ backgroundColor: 'hsl(var(--primary))' }}
        />

        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--sidebar-foreground)) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
                style={{ backgroundColor: 'hsl(var(--primary) / 0.15)' }}
              >
                <Layers 
                  className="w-8 h-8" 
                  style={{ color: 'hsl(var(--primary))' }} 
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 
                className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--app-font-serif)' }}
              >
                Ready to Transform <br />
                <GoldText>Your Industry?</GoldText>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p 
                className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{ color: 'hsl(var(--sidebar-foreground) / 0.55)' }}
              >
                Whether you are modernizing legacy infrastructure or launching a disruptive new platform, our engineering teams are ready to architect your next competitive advantage.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="h-16 px-12 text-lg rounded-full font-extrabold transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: 'hsl(var(--primary))', 
                    color: 'hsl(var(--primary-foreground))',
                    boxShadow: '0 20px 50px -12px hsl(var(--primary) / 0.5)'
                  }}
                >
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="h-16 px-10 text-lg rounded-full font-bold border-2 bg-transparent text-white hover:bg-white/10 hover:text-white transition-all"
                  style={{ borderColor: 'hsl(var(--sidebar-foreground) / 0.25)' }}
                >
                  <Link href="/case-studies">
                    <Play className="w-4 h-4 mr-2 fill-current" />
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}