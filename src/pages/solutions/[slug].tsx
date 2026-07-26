import React from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { solutions } from '@/data/solutions';
import NotFound from '../not-found';
import { ArrowRight, CheckCircle2, ChevronDown, Layers, Layout, Zap, Lock, Eye, MessageSquare, Database, Shield, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SolutionDetail() {
  const params = useParams();
  const solution = solutions.find(s => s.slug === params.slug);

  if (!solution) return <NotFound />;

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={solution.heroImage} 
            alt={solution.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-shadow-md text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Enterprise Solution</span>
            <h1 className="text-shadow-hero text-5xl md:text-7xl font-black text-sidebar-foreground mb-8 max-w-5xl leading-[1.1] tracking-tight">
              {solution.title}
            </h1>
            <p className="text-shadow-md text-xl md:text-2xl text-sidebar-foreground/90 mb-12 max-w-3xl leading-relaxed">
              {solution.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">
                Solution Overview
              </h2>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                <p>{solution.description}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <img 
                src={solution.heroImage} 
                alt="Overview" 
                className="w-full aspect-square object-cover border border-border"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Business Problems */}
      <section className="py-24 md:py-32 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-sidebar-foreground">Bottlenecks We Eliminate</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solution.challenges.map((challenge, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-sidebar-accent/50 border border-sidebar-border p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{challenge.title}</h3>
                <p className="text-sidebar-foreground/75 text-lg leading-relaxed">{challenge.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features (Zigzag) */}
      <section className="bg-muted/40 py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Solution Architecture</h2>
          </ScrollReveal>

          <div className="space-y-16">
            {solution.features.map((feat, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} className={cn("flex flex-col md:flex-row gap-12 items-center", !isEven && "md:flex-row-reverse")}>
                  <div className="w-full md:w-1/2 bg-card aspect-video flex items-center justify-center border border-border shadow-sm rounded-xl">
                    <Box className="w-24 h-24 text-muted-foreground/40" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-black text-foreground mb-4">{feat.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">{feat.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Benefits (stats) */}
      <section className="py-24 md:py-32 bg-background border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Impact & ROI</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            {solution.benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-6xl md:text-7xl font-black text-primary mb-4 tracking-tighter">{benefit.metric}</p>
                <h4 className="text-2xl font-bold text-foreground uppercase tracking-wide">{benefit.label}</h4>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Stack (inline) */}
      <section className="py-24 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black mb-12 text-sidebar-foreground">Powered By Modern Stack</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {solution.technologies.map((tech, i) => (
                <span key={i} className="text-2xl font-bold text-sidebar-foreground/75 hover:text-primary transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground">Solution FAQ</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {solution.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-card border border-border p-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xl text-foreground">
                    {faq.question}
                    <ChevronDown className="w-6 h-6 text-primary group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4 text-lg leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-8">Start the Transformation</h2>
            <Button asChild size="lg" className="bg-sidebar text-sidebar-foreground hover:bg-background hover:text-foreground h-16 px-10 text-lg">
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}