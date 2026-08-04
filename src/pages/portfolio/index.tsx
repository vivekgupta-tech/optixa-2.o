import React, { useState } from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { portfolio } from '@/data';
import { PortfolioItem } from '@/data/types';
import { ArrowRight, ExternalLink, Sparkles, X, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  // Filter items based on selected category chip
  const filteredItems = selectedCategory === 'All'
    ? portfolio.items
    : portfolio.items.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 1. Hero Banner matching reference screenshot with clean background image and dark overlay */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-black text-white">
        {/* Full-bleed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${portfolio.hero.backgroundImage})` }}
        />
        
        {/* Dark Overlay over the image matching reference screenshot */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Main Content Area */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl text-left pl-2 md:pl-6">
            {/* Main Title: Heavy Bold White Typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 uppercase drop-shadow-md">
              {portfolio.hero.title}
            </h1>

            {/* Breadcrumb Navigation: HOME / PAGES / PORTFOLIO */}
            <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold tracking-widest uppercase text-white/80">
              <Link href="/" className="hover:text-primary transition-colors text-white/90">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white/90">Pages</span>
              <span className="text-white/40">/</span>
              <span className="text-primary font-extrabold">{portfolio.hero.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Chips Section */}
      <section className="py-10 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 overflow-x-auto pb-3 pt-1 no-scrollbar">
            {portfolio.categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-5 py-2.5 rounded-md text-sm font-semibold whitespace-nowrap transition-all duration-300 transform active:scale-95 cursor-pointer',
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 border border-primary'
                      : 'bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Portfolio Items Grid (3 items per row layout) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No projects found in "{selectedCategory}" category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredItems.map((item, i) => (
                <ScrollReveal key={item.id} delay={(i % 3) * 0.1}>
                  <div
                    onClick={() => setActiveModalProject(item)}
                    className="group bg-card rounded-xl border border-border/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-1.5"
                  >
                    {/* Card Mockup / Screenshot Image Container */}
                    <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Top Overlay Badge */}
                      {item.badge && (
                        <div className="absolute top-3 right-3 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                          {item.badge}
                        </div>
                      )}

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-sidebar/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-sidebar font-bold text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          View Details <ArrowRight className="w-4 h-4 text-primary" />
                        </span>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="p-6 flex flex-col flex-grow justify-between bg-card">
                      <div>
                        {/* Title matching screenshot layout */}
                        <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                          {item.title}
                        </h3>

                        {/* Subtitle Category Label (All Caps) */}
                        <div className="font-mono text-xs tracking-wider text-primary uppercase font-bold mt-1 mb-3">
                          {item.category}
                        </div>

                        {/* Brief Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                          {item.description}
                        </p>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-muted text-foreground/80 text-[11px] font-medium px-2.5 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Interactive Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-card border border-border rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-sidebar/80 text-white flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Image */}
            <div className="relative aspect-[16/9] w-full bg-muted">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sidebar via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-primary text-white text-xs font-mono tracking-widest px-3 py-1 rounded-md uppercase font-bold">
                  {activeModalProject.category}
                </span>
                <h2 className="text-3xl font-black text-white mt-2">{activeModalProject.title}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
                  Project Overview
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary border border-primary/20 font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-primary" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 gap-2"
                >
                  <Link href="/contact">
                    Request Similar Solution <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setActiveModalProject(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Call to Action Banner */}
      <section className="relative py-20 bg-sidebar text-white text-center overflow-hidden border-t border-border/20">
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary block mb-3">
              // LET'S BUILD TOGETHER
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              {portfolio.cta.title}
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              {portfolio.cta.subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-white hover:text-sidebar h-14 px-8 text-base font-bold shadow-lg shadow-primary/20"
            >
              <Link href={portfolio.cta.btnLink}>{portfolio.cta.btnText}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}