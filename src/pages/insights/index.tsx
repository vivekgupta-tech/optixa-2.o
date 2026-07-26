import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { insights } from '@/data/insights';
import { insightsPage } from '@/data';
import { ArrowRight, Mail } from 'lucide-react';

export default function Insights() {
  const featuredPost = insights[0];
  const gridPosts = insights.slice(1);
  const categories = insightsPage.categories;

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight">
              {insightsPage.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {insightsPage.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Topics Filter Row */}
      <section className="pb-12 border-b border-border bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {categories.map((cat, i) => (
              <span 
                key={i} 
                className={`px-4 py-2 text-sm font-bold rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Article */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Link href={`/insights/${featuredPost.slug}`} className="group block bg-card border border-border shadow-2xl overflow-hidden grid lg:grid-cols-2 items-center">
              <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              <div className="p-8 md:p-16">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  {featuredPost.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 group-hover:text-primary transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground font-bold mb-8 uppercase tracking-wide">
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="text-white font-bold flex items-center gap-2 text-lg">
                  {insightsPage.readArticleText} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Article Grid — 2 Columns */}
      <section className="py-24 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {gridPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/insights/${post.slug}`} className="group block bg-card h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-3xl font-black text-foreground mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-3">
                      {post.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-border pt-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal className="mt-16 text-center">
            <Button variant="outline" size="lg" className="border-2 border-black text-foreground hover:bg-foreground hover:text-primary-foreground h-14 px-8 text-base">
              {insightsPage.loadMoreText}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Newsletter CTA */}
      <section className="py-24 bg-sidebar text-sidebar-foreground text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <ScrollReveal>
            <div className="w-16 h-16 bg-sidebar-accent/50 border border-sidebar-border rounded-full flex items-center justify-center mx-auto mb-8 text-sidebar-foreground">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{insightsPage.newsletter.title}</h2>
            <p className="text-xl text-muted-foreground mb-10">
              {insightsPage.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={insightsPage.newsletter.placeholder} 
                className="flex-1 bg-background/10 border border-white/20 text-white px-6 py-4 outline-none focus:border-primary transition-colors placeholder:text-muted-foreground text-lg"
                required
              />
              <Button type="submit" size="lg" className="h-auto py-4 px-8 text-lg bg-primary hover:bg-background hover:text-foreground">
                {insightsPage.newsletter.submitText}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}