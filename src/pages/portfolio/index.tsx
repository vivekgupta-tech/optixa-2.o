import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { portfolio } from '@/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Portfolio() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src={portfolio.hero.image} 
            alt={portfolio.hero.imageAlt} 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">{portfolio.hero.subtitle}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              {portfolio.hero.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Intro section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">{portfolio.intro.title}</h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                {portfolio.intro.paragraphs[0]}
              </p>
              <p>
                {portfolio.intro.paragraphs[1]}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Capability Showcases (4 sections) */}
      <div className="flex flex-col">
        {portfolio.showcases.map((showcase, i) => (
          <section key={i} className="relative min-h-[80vh] flex items-center py-24 overflow-hidden border-b border-white/10 last:border-0 group">
            <div className="absolute inset-0">
              <img 
                src={showcase.img} 
                alt={showcase.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            </div>
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <ScrollReveal className="max-w-3xl">
                <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold tracking-widest uppercase mb-6">
                  {showcase.tag}
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">{showcase.title}</h2>
                <p className="text-xl text-sidebar-foreground/70 mb-10 leading-relaxed">{showcase.desc}</p>
                
                <div className="space-y-4 mb-12">
                  {showcase.bullets.map((bullet, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-lg font-medium text-white">{bullet}</span>
                    </div>
                    
                    <Button asChild size="lg" className="h-14 px-8 text-base">
                      <Link href="/contact">Discuss Your Project</Link>
                    </Button>
                  </ScrollReveal>

                </div>
                
                <Button asChild size="lg" className="h-14 px-8 text-base bg-background text-foreground hover:bg-primary hover:text-primary-foreground border-0">
                  <Link href={portfolio.showcaseBtn.link}>{portfolio.showcaseBtn.text}</Link>
                </Button>
              </ScrollReveal>
            </div>
          </section>
        ))}
      </div>

      {/* 4. Development Process Preview */}
      <section className="py-24 bg-muted/40 border-y border-border text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-3xl font-black text-foreground">{portfolio.process.title}</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {portfolio.process.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary font-black text-xl flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-lg text-foreground">{step}</h4>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.4} className="mt-12">
            <Link href={portfolio.process.viewFullLink.link} className="text-primary font-bold text-lg flex items-center justify-center gap-2 hover:gap-4 transition-all">
              {portfolio.process.viewFullLink.text} <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Why Work With Us Now — Split layout */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="relative">
              <img 
                src={portfolio.advantage.image} 
                alt={portfolio.advantage.imageAlt} 
                className="w-full aspect-[4/3] object-cover shadow-xl"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">{portfolio.advantage.subtitle}</span>
              <h2 className="text-4xl font-black text-foreground mb-8">{portfolio.advantage.title}</h2>
              <p className="text-xl text-muted-foreground mb-10">
                {portfolio.advantage.description}
              </p>
              
              <div className="space-y-6">
                {portfolio.advantage.items.map((adv, i) => (
                  <div key={i} className="flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground">{adv.title}</h4>
                      <p className="text-muted-foreground mt-1">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-sidebar text-sidebar-foreground text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{portfolio.cta.title}</h2>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-background hover:text-foreground h-16 px-10 text-lg">
              <Link href={portfolio.cta.btn.link}>{portfolio.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}