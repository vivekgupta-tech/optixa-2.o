import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { Insight, insights } from '@/data/insights';
import { insightsPage } from '@/data';
import {
  ArrowRight,
  Mail,
  Zap,
  Clock,
  Calendar,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Hash
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Animated Counter Hook ─── */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

/* ─── Gold Gradient Text ─── */
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

/* ─── Ambient Background Glow ─── */
function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 animate-pulse"
        style={{ backgroundColor: 'hsl(var(--primary))' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 animate-pulse"
        style={{ backgroundColor: 'hsl(var(--primary))', animationDelay: '1.5s' }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
}

/* ─── Featured Article Card ─── */
function FeaturedCard({ post }: { post: Insight }) {
  return (
    <ScrollReveal>
      <Link href={`/insights/${post.slug}`} className="group block relative w-full">
        <div className="relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image Side - Full Width & Height Increased */}
            <div className="lg:col-span-3 relative h-[370px] sm:h-[370px] lg:h-[470px] overflow-hidden bg-muted">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-card/30 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Zap className="w-3 h-3" />
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content Side - Centered Title & Subtitle */}
            <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-card">
              <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground font-medium uppercase tracking-wider mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-snug tracking-tight text-center" style={{ fontFamily: 'var(--app-font-serif)' }}>
                {post.title}
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 text-center max-w-lg">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-center gap-2 text-primary font-bold text-xs sm:text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                {insightsPage.readArticleText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

/* ─── Carousel Article Card Component ─── */
function ArticleCarouselCard({ post }: { post: Insight }) {
  return (
    <Link href={`/insights/${post.slug}`} className="group block h-full select-none">
      <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
        <div>
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-card/90 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-border shadow-sm">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2" style={{ fontFamily: 'var(--app-font-serif)' }}>
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-6 pt-0 border-t border-border/40 mt-auto">
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{post.readTime}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Stat Card ─── */
function StatCard({ icon: Icon, value, label, suffix = '' }: { icon: any; value: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center p-6">
      <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
      <div className="text-3xl font-extrabold text-foreground mb-1" style={{ fontFamily: 'var(--app-font-serif)' }}>
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{label}</div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Insights() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredPost = insights[0];
  const carouselPosts = insights.slice(1);

  // Check scroll position for navigation buttons and dots
  const checkScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const cardWidth = 380;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, carouselPosts.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollState, { passive: true });
      checkScrollState();
    }
    return () => el?.removeEventListener('scroll', checkScrollState);
  }, []);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 400;
      scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground relative overflow-hidden">
      <AmbientBackground />

      {/* ═══════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal>
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
                style={{
                  backgroundColor: 'hsl(var(--primary) / 0.1)',
                  border: '1px solid hsl(var(--primary) / 0.2)',
                  color: 'hsl(var(--primary))'
                }}
              >
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  Engineering Insights
                </span>
              </div>

              {/* Title with Gold Gradient */}
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[0.95]"
                style={{ fontFamily: 'var(--app-font-serif)' }}
              >
                Engineering <br />
                <GoldText>Insights & Perspectives</GoldText>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-sidebar-foreground/70 max-w-2xl mx-auto leading-relaxed mb-12">
                {insightsPage.hero.description}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto bg-card border border-border rounded-2xl shadow-xl">
                <StatCard icon={Hash} value={insights.length} label="Articles" />
                <StatCard icon={Zap} value={12} label="Authors" />
                <StatCard icon={TrendingUp} value={10} label="K Readers" suffix="K+" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. FEATURED ARTICLE
          ═══════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <ScrollReveal className="mb-10 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Featured</span>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl font-extrabold text-foreground" style={{ fontFamily: 'var(--app-font-serif)' }}>Editor&apos;s Pick</h2>
          </ScrollReveal>

          <FeaturedCard post={featuredPost} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. LEFT TO RIGHT CAROUSEL CARDS SECTION
          (Chips completely removed & cards in left-to-right carousel slider)
          ═══════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-muted/40 border-t border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">

          {/* Centered Carousel Header */}
          <ScrollReveal className="mb-10 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Explore Insights</span>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground" style={{ fontFamily: 'var(--app-font-serif)' }}>
              Latest Engineering Articles
            </h2>
          </ScrollReveal>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar -mx-4 px-4 md:-mx-8 md:px-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {carouselPosts.map((post) => (
                <div
                  key={post.slug}
                  className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[400px]"
                >
                  <ArticleCarouselCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer Control Bar: Dots in Center/Left, Arrows in Bottom Right */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4">
            <div className="hidden sm:block w-32" /> {/* spacer for alignment on desktop */}

            {/* Carousel Pagination Dots (Centered) */}
            <div className="flex items-center justify-center gap-2">
              {carouselPosts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                    activeIndex === idx
                      ? "w-8 bg-primary shadow-sm"
                      : "w-2.5 bg-border hover:bg-muted-foreground/40"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left / Right Navigation Buttons (Bottom Right) */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={handleScrollLeft}
                disabled={!canScrollLeft}
                className={cn(
                  "w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground transition-all duration-300 shadow-sm cursor-pointer hover:border-primary hover:text-primary active:scale-95",
                  !canScrollLeft && "opacity-40 cursor-not-allowed hover:border-border hover:text-foreground"
                )}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleScrollRight}
                disabled={!canScrollRight}
                className={cn(
                  "w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground transition-all duration-300 shadow-sm cursor-pointer hover:border-primary hover:text-primary active:scale-95",
                  !canScrollRight && "opacity-40 cursor-not-allowed hover:border-border hover:text-foreground"
                )}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. NEWSLETTER CTA
          ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-sidebar text-sidebar-foreground overflow-hidden border-t border-border">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              {/* Icon */}
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Mail className="w-10 h-10" />
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" style={{ fontFamily: 'var(--app-font-serif)' }}>
                {insightsPage.newsletter.title}
              </h2>
              <p className="text-lg text-sidebar-foreground/70 mb-10 max-w-xl mx-auto leading-relaxed">
                {insightsPage.newsletter.description}
              </p>

              <form
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                onSubmit={handleSubscribe}
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={insightsPage.newsletter.placeholder}
                    className="w-full bg-sidebar-accent/50 border border-sidebar-border text-sidebar-foreground px-6 py-4 rounded-xl outline-none focus:border-primary transition-all duration-300 placeholder:text-sidebar-foreground/50 text-base"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-auto py-4 px-8 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
                >
                  {isSubscribed ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Subscribed!
                    </span>
                  ) : (
                    insightsPage.newsletter.submitText
                  )}
                </Button>
              </form>

              <p className="text-xs text-sidebar-foreground/50 mt-4">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}