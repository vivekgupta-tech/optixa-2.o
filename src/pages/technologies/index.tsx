import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { technologiesPage } from '@/data';
import { ArrowRight, Box, RefreshCw, GitMerge } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Technologies() {
  const categories = technologiesPage.categories;

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src={technologiesPage.hero.image} 
            alt={technologiesPage.hero.imageAlt} 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">{technologiesPage.hero.subtitle}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              {technologiesPage.hero.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Intro paragraph */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-black mb-6">{technologiesPage.intro.title}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {technologiesPage.intro.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Technology Categories */}
      <div className="bg-gray-50">
        {categories.map((cat, i) => (
          <section key={i} className={cn("py-24 md:py-32", i % 2 === 0 ? "bg-white" : "bg-gray-50")}>
            <div className="container mx-auto px-4 md:px-8">
              <ScrollReveal className="mb-16">
                <div className="w-16 h-1 bg-primary mb-6" />
                <h2 className="text-4xl md:text-5xl font-black text-black mb-6">{cat.name}</h2>
                <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">{cat.desc}</p>
              </ScrollReveal>

              <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6">
                {cat.techs.map((tech, j) => (
                  <ScrollReveal key={j} delay={j * 0.05} className="flex items-start gap-6 p-6 border border-gray-200 bg-white hover:border-black transition-colors group">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.icon}`} 
                        alt={tech.name}
                        className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-black">{tech.name}</h4>
                        <span className={cn(
                          "text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider",
                          tech.tag === 'Core' ? "bg-red-100 text-primary" : "bg-gray-100 text-gray-600"
                        )}>
                          {tech.tag}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{tech.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. Architecture Patterns */}
      <section className="py-24 md:py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{technologiesPage.architecturePatterns.title}</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">{technologiesPage.architecturePatterns.description}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {technologiesPage.architecturePatterns.items.map((pattern, i) => {
              const getPatternIcon = (iconName: string) => {
                const props = { className: "w-10 h-10" };
                if (iconName === 'Box') return <Box {...props} />;
                if (iconName === 'RefreshCw') return <RefreshCw {...props} />;
                return <GitMerge {...props} />;
              };
              return (
                <ScrollReveal key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-10">
                  <div className="text-primary mb-6">{getPatternIcon(pattern.icon)}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{pattern.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{pattern.desc}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Tech Selection Philosophy */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-black mb-8">{technologiesPage.cta.title}</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {technologiesPage.cta.description}
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-black h-16 px-10 text-lg">
              <Link href={technologiesPage.cta.btn.link}>{technologiesPage.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}