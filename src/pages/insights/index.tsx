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
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tight">
              {insightsPage.hero.title}
            </h1>
            <p className="text-xl text-gray-600">
              {insightsPage.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Topics Filter Row */}
      <section className="pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {categories.map((cat, i) => (
              <span 
                key={i} 
                className={`px-4 py-2 text-sm font-bold rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Article */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Link href={`/insights/${featuredPost.slug}`} className="group block relative overflow-hidden bg-[#111] min-h-[60vh] flex items-end shadow-2xl">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="relative z-10 p-8 md:p-16 max-w-4xl">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider mb-6">
                  {featuredPost.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400 font-bold mb-8 uppercase tracking-wide">
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
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {gridPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/insights/${post.slug}`} className="group block bg-white h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-3xl font-black text-black mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-3">
                      {post.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal className="mt-16 text-center">
            <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white h-14 px-8 text-base">
              {insightsPage.loadMoreText}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Newsletter CTA */}
      <section className="py-24 bg-[#111] text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <ScrollReveal>
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{insightsPage.newsletter.title}</h2>
            <p className="text-xl text-gray-400 mb-10">
              {insightsPage.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={insightsPage.newsletter.placeholder} 
                className="flex-1 bg-white/10 border border-white/20 text-white px-6 py-4 outline-none focus:border-primary transition-colors placeholder:text-gray-500 text-lg"
                required
              />
              <Button type="submit" size="lg" className="h-auto py-4 px-8 text-lg bg-primary hover:bg-white hover:text-black">
                {insightsPage.newsletter.submitText}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}