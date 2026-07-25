import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { insights } from '@/data/insights';
import NotFound from '../not-found';
import { ArrowLeft, ArrowRight, Twitter, Linkedin, Link as LinkIcon, ChevronDown } from 'lucide-react';

export default function InsightDetail() {
  const params = useParams();
  const post = insights.find(p => p.slug === params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <NotFound />;

  // Get 3 random related posts (excluding current)
  const relatedPosts = insights.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="w-full bg-background">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-56 md:pb-48 bg-sidebar text-sidebar-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="max-w-4xl">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sidebar-foreground/85 hover:text-sidebar-foreground transition-colors font-bold text-sm uppercase tracking-wider mb-8" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
            <br />
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-6" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-sidebar-foreground mb-8 leading-[1.1] tracking-tight" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)' }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-sidebar-foreground/80 font-bold uppercase tracking-wide" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.9)' }}>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2 & 3. Article Layout (Sidebar + Content) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar (Left) */}
            <div className="lg:w-1/4 shrink-0">
              <div className="sticky top-32 space-y-12">
                
                {/* Author */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Written By</h4>
                  <div className="flex items-center gap-4">
                    <img src={post.author.image} alt={post.author.name} className="w-14 h-14 rounded-full object-cover grayscale" />
                    <div>
                      <p className="font-bold text-foreground">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                </div>

                {/* Share */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Share Article</h4>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Services Banner */}
                <div className="bg-muted/40 p-6 border border-border hidden lg:block">
                  <h4 className="font-black text-xl text-foreground mb-2">Need to scale your architecture?</h4>
                  <p className="text-sm text-muted-foreground mb-6">Our senior engineers can help audit your current systems.</p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 max-w-3xl">
              <ScrollReveal>
                <div 
                  className="prose prose-lg md:prose-xl max-w-none 
                  prose-headings:font-black prose-headings:text-foreground prose-headings:tracking-tight
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-8
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:font-medium prose-blockquote:text-foreground prose-blockquote:italic
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:text-muted-foreground prose-li:mb-2
                  prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </ScrollReveal>

              {/* Author block bottom (mobile) */}
              <div className="mt-16 pt-8 border-t border-border lg:hidden">
                <div className="flex items-center gap-4">
                  <img src={post.author.image} alt={post.author.name} className="w-16 h-16 rounded-full object-cover grayscale" />
                  <div>
                    <p className="font-bold text-foreground">{post.author.name}</p>
                    <p className="text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Related Posts row */}
      <section className="py-24 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-3xl font-black text-foreground">Keep Reading</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((rPost, i) => (
              <ScrollReveal key={rPost.slug} delay={i * 0.1}>
                <Link href={`/insights/${rPost.slug}`} className="group block bg-card h-full shadow-sm hover:shadow-xl transition-all border border-border">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{rPost.category}</span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{rPost.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA strip */}
      <section className="py-20 bg-sidebar text-sidebar-foreground text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-sidebar-foreground mb-8">Discuss Your Architecture with Us</h2>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-background hover:text-foreground h-16 px-10 text-lg">
              <Link href="/contact">Schedule a Technical Call</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}