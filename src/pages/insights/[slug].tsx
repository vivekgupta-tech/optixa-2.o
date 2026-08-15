import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { Insight, insights } from '@/data/insights';
import { insightDetail } from '@/data';
import NotFound from '../not-found';
import { 
  ArrowLeft, 
  ArrowRight, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon, 
  Clock,
  Calendar,
  Eye,
  Bookmark,
  ChevronUp,
  MessageCircle,
  Zap,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Reading Progress Bar ─── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(scrollProgress, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-background/50 backdrop-blur-sm">
      <div 
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ─── Back to Top ─── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        "fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

/* ─── Share Button ─── */
function ShareButton({ icon: Icon, label, onClick }: { icon: any; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer shadow-sm"
      title={label}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}

/* ─── Table of Contents ─── */
function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState('');
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const h2s = Array.from(doc.querySelectorAll('h2'));
    const parsed = h2s.map(h => ({
      id: (h.textContent || '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      text: h.textContent || ''
    }));
    setHeadings(parsed);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h4 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
        <span className="w-6 h-[2px] bg-primary" />
        Contents
      </h4>
      <nav className="space-y-2">
        {headings.map((heading, i) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={() => setActiveId(heading.id)}
            className={cn(
              "block text-sm py-1.5 px-3 rounded-lg transition-all duration-200",
              activeId === heading.id 
                ? "bg-primary/10 text-primary font-bold" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <span className="text-muted-foreground/60 mr-2 text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

/* ─── Related Post Card ─── */
function RelatedCard({ post, index }: { post: Insight; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link href={`/insights/${post.slug}`} className="group block h-full">
        <div className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <div className="aspect-[16/10] overflow-hidden bg-muted">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
              {post.category}
            </span>
            <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug" style={{ fontFamily: 'var(--app-font-serif)' }}>
              {post.title}
            </h3>
            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground font-medium">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

/* ─── Author Card ─── */
function AuthorCard({ author, compact = false }: { author: Insight['author']; compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-4">
        <img 
          src={author.image} 
          alt={author.name} 
          className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30" 
        />
        <div>
          <p className="font-bold text-foreground">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.role}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={author.image} 
          alt={author.name} 
          className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30" 
        />
        <div>
          <p className="font-bold text-foreground text-lg">{author.name}</p>
          <p className="text-sm text-muted-foreground font-medium">{author.role}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Senior engineer with expertise in distributed systems and cloud architecture. 
        Passionate about building scalable solutions and sharing knowledge with the community.
      </p>
    </div>
  );
}

/* ─── Main Component ─── */
export default function InsightDetail() {
  const params = useParams();
  const post = insights.find(p => p.slug === params?.slug);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <NotFound />;

  const relatedPosts = insights.filter(p => p.slug !== post.slug).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    let shareUrl = '';

    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }

    if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground relative">
      <ReadingProgress />
      <BackToTop />

      {/* ═══════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-sidebar text-sidebar-foreground overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sidebar/80 via-sidebar/90 to-sidebar" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              {/* Back Link */}
              <Link 
                href="/insights" 
                className="inline-flex items-center gap-2 text-sidebar-foreground/70 hover:text-primary transition-colors font-bold text-sm uppercase tracking-wider mb-8 group"
              >
                <div className="w-8 h-8 rounded-lg bg-sidebar-accent/60 border border-sidebar-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                {insightDetail.backText}
              </Link>

              {/* Category */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Zap className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-sidebar-foreground/60 font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  2.4K views
                </span>
              </div>

              {/* Title */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight"
                style={{ fontFamily: 'var(--app-font-serif)' }}
              >
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-sidebar-foreground/70 font-semibold">
                <div className="flex items-center gap-3">
                  <img 
                    src={post.author.image} 
                    alt={post.author.name} 
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/40" 
                  />
                  <div>
                    <p className="font-bold text-white text-sm">{post.author.name}</p>
                    <p className="text-xs text-sidebar-foreground/60">{post.author.role}</p>
                  </div>
                </div>
                <span className="w-1 h-1 rounded-full bg-sidebar-border hidden sm:block" />
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. ARTICLE LAYOUT
          ═══════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* ─── Sidebar (Left) ─── */}
            <div className="lg:w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Table of Contents */}
                <TableOfContents content={post.content} />

                {/* Author */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-primary" />
                    {insightDetail.writtenBy}
                  </h4>
                  <AuthorCard author={post.author} />
                </div>

                {/* Share */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-primary" />
                    {insightDetail.shareArticle}
                  </h4>
                  <div className="flex gap-2">
                    <ShareButton 
                      icon={Twitter} 
                      label="Share on Twitter"
                      onClick={() => handleShare('twitter')}
                    />
                    <ShareButton 
                      icon={Linkedin} 
                      label="Share on LinkedIn"
                      onClick={() => handleShare('linkedin')}
                    />
                    <ShareButton 
                      icon={LinkIcon} 
                      label="Copy Link"
                      onClick={handleCopyLink}
                    />
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border shadow-sm",
                        isBookmarked 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-card border-border text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground"
                      )}
                      title="Bookmark"
                    >
                      <Bookmark className={cn("w-4 h-4", isBookmarked && "fill-current")} />
                    </button>
                  </div>
                </div>

                {/* Services Banner */}
                <div className="bg-muted/60 p-6 rounded-2xl border border-border hidden lg:block">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-lg text-foreground mb-2" style={{ fontFamily: 'var(--app-font-serif)' }}>{insightDetail.banner.title}</h4>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{insightDetail.banner.description}</p>
                  <Button 
                    asChild 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-11 font-bold transition-all hover:scale-[1.02]"
                  >
                    <Link href={insightDetail.banner.btn.link}>{insightDetail.banner.btn.text}</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* ─── Main Content ─── */}
            <div className="lg:flex-1 max-w-3xl">
              <ScrollReveal>
                <article 
                  className="prose prose-lg md:prose-xl max-w-none 
                  prose-headings:font-extrabold prose-headings:text-foreground prose-headings:tracking-tight
                  prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:text-foreground
                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-8 prose-p:text-lg
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:font-medium prose-blockquote:text-foreground prose-blockquote:italic prose-blockquote:bg-muted/40 prose-blockquote:rounded-r-xl
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:text-muted-foreground prose-li:mb-3 prose-li:text-lg
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
                  prose-strong:text-foreground prose-strong:font-bold
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
                  prose-pre:bg-sidebar prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:p-6
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                  prose-img:rounded-2xl prose-img:border prose-img:border-border"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </ScrollReveal>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {['Architecture', 'Engineering', 'Best Practices', 'Tutorial'].map(tag => (
                    <span 
                      key={tag}
                      className="px-3.5 py-1.5 bg-muted text-muted-foreground text-xs font-semibold rounded-lg border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Author */}
              <div className="mt-12 pt-8 border-t border-border lg:hidden">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-4">
                  {insightDetail.writtenBy}
                </h4>
                <AuthorCard author={post.author} compact />
              </div>

              {/* Mobile Share */}
              <div className="mt-8 lg:hidden">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-4">
                  {insightDetail.shareArticle}
                </h4>
                <div className="flex gap-2">
                  <ShareButton icon={Twitter} label="Twitter" onClick={() => handleShare('twitter')} />
                  <ShareButton icon={Linkedin} label="LinkedIn" onClick={() => handleShare('linkedin')} />
                  <ShareButton icon={LinkIcon} label="Copy" onClick={handleCopyLink} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. RELATED POSTS
          ═══════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Continue Learning</span>
            </div>
            <h2 className="text-3xl font-extrabold text-foreground" style={{ fontFamily: 'var(--app-font-serif)' }}>{insightDetail.relatedTitle}</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost, i) => (
              <RelatedCard key={rPost.slug} post={rPost} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. CTA STRIP
          ═══════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-sidebar text-sidebar-foreground overflow-hidden border-t border-border">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--app-font-serif)' }}>
                {insightDetail.cta.title}
              </h2>
              <p className="text-lg text-sidebar-foreground/70 mb-10 max-w-xl mx-auto leading-relaxed">
                Our senior engineering team is ready to help you architect, build, and scale your next big idea.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link href={insightDetail.cta.btn.link} className="flex items-center gap-2">
                  {insightDetail.cta.btn.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-card border border-primary/30 text-card-foreground px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold">Link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}