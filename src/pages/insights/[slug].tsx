import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { insights } from '@/data/insights';
import { insightDetail } from '@/data';
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
    <div className="w-full bg-white">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-56 md:pb-48 bg-[#111] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="max-w-4xl">
            <Link href="/insights" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-wider mb-8">
              <ArrowLeft className="w-4 h-4" /> {insightDetail.backText}
            </Link>
            <br />
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-400 font-bold uppercase tracking-wide">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2 & 3. Article Layout (Sidebar + Content) */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar (Left) */}
            <div className="lg:w-1/4 shrink-0">
              <div className="sticky top-32 space-y-12">
                
                {/* Author */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{insightDetail.writtenBy}</h4>
                  <div className="flex items-center gap-4">
                    <img src={post.author.image} alt={post.author.name} className="w-14 h-14 rounded-full object-cover grayscale" />
                    <div>
                      <p className="font-bold text-black">{post.author.name}</p>
                      <p className="text-sm text-gray-500">{post.author.role}</p>
                    </div>
                  </div>
                </div>

                {/* Share */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{insightDetail.shareArticle}</h4>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors">
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Services Banner */}
                <div className="bg-gray-50 p-6 border border-gray-200 hidden lg:block">
                  <h4 className="font-black text-xl text-black mb-2">{insightDetail.banner.title}</h4>
                  <p className="text-sm text-gray-600 mb-6">{insightDetail.banner.description}</p>
                  <Button asChild className="w-full">
                    <Link href={insightDetail.banner.btn.link}>{insightDetail.banner.btn.text}</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 max-w-3xl">
              <ScrollReveal>
                <div 
                  className="prose prose-lg md:prose-xl max-w-none 
                  prose-headings:font-black prose-headings:text-black prose-headings:tracking-tight
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-8
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:font-medium prose-blockquote:text-black prose-blockquote:italic
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:text-gray-700 prose-li:mb-2
                  prose-strong:text-black"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </ScrollReveal>

              {/* Author block bottom (mobile) */}
              <div className="mt-16 pt-8 border-t border-gray-200 lg:hidden">
                <div className="flex items-center gap-4">
                  <img src={post.author.image} alt={post.author.name} className="w-16 h-16 rounded-full object-cover grayscale" />
                  <div>
                    <p className="font-bold text-black">{post.author.name}</p>
                    <p className="text-gray-500">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Related Posts row */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-3xl font-black text-black">{insightDetail.relatedTitle}</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((rPost, i) => (
              <ScrollReveal key={rPost.slug} delay={i * 0.1}>
                <Link href={`/insights/${rPost.slug}`} className="group block bg-white h-full shadow-sm hover:shadow-xl transition-all border border-gray-100">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{rPost.category}</span>
                    <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors line-clamp-2">{rPost.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA strip */}
      <section className="py-20 bg-[#111] text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">{insightDetail.cta.title}</h2>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-white hover:text-black h-16 px-10 text-lg">
              <Link href={insightDetail.cta.btn.link}>{insightDetail.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}