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

/* ─── Category Badge ─── */
function CategoryBadge({ cat, active, onClick, index }: { cat: string; active: boolean; onClick: () => void; index: number }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-5 py-2.5 text-sm font-semibold rounded-full cursor-pointer transition-all duration-300 ease-out border",
        active
          ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
          : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border-border"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <span className="relative flex items-center gap-1.5">
        {active && <Sparkles className="w-3.5 h-3.5" />}
        {cat}
      </span>
    </button>
  );
}

/* ─── Featured Article Card ─── */
function FeaturedCard({ post }: { post: Insight }) {
  return (
    <ScrollReveal>
      <Link href={`/insights/${post.slug}`} className="group block relative">
        <div className="relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image Side */}
            <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-muted">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-card/30 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Zap className="w-3 h-3" />
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center bg-card">
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium uppercase tracking-wider mb-5">
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

              <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-5 group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight" style={{ fontFamily: 'var(--app-font-serif)' }}>
                {post.title}
              </h2>

              <p className="text-muted-foreground text-base leading-relaxed mb-8 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
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

/* ─── Article Grid Card ─── */
function ArticleCard({ post, index }: { post: Insight; index: number }) {
  return (
    <ScrollReveal delay={index * 0.12}>
      <Link href={`/insights/${post.slug}`} className="group block h-full">
        <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
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
          <div className="p-6 flex flex-col justify-between flex-grow bg-card">
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2" style={{ fontFamily: 'var(--app-font-serif)' }}>
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
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
    </ScrollReveal>
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
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const featuredPost = insights[0];
  const categories = insightsPage.categories;

  const filteredPosts = activeCategory === 'All' 
    ? insights.slice(1) 
    : insights.slice(1).filter(p => p.category === activeCategory);

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
          2. CATEGORY FILTER
          ═══════════════════════════════════════ */}
      <section className="relative py-8 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, i) => (
              <CategoryBadge 
                key={cat} 
                cat={cat} 
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. FEATURED ARTICLE
          ═══════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Featured</span>
            </div>
            <h2 className="text-3xl font-extrabold text-foreground" style={{ fontFamily: 'var(--app-font-serif)' }}>Editor&apos;s Pick</h2>
          </ScrollReveal>

          <FeaturedCard post={featuredPost} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. ARTICLE GRID
          ═══════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <ScrollReveal className="mb-12 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Latest</span>
              </div>
              <h2 className="text-3xl font-extrabold text-foreground" style={{ fontFamily: 'var(--app-font-serif)' }}>All Articles</h2>
            </div>
            <span className="text-sm text-muted-foreground font-semibold">
              {filteredPosts.length} articles
            </span>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <ArticleCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {/* Load More */}
          <ScrollReveal className="mt-16 text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 text-base font-bold rounded-full border-2 transition-all hover:scale-105"
            >
              {insightsPage.loadMoreText}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. NEWSLETTER CTA
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