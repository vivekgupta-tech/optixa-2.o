import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { solutions } from '@/data/solutions';
import { ArrowRight, CheckCircle2, ChevronRight, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Solutions() {
  const mainSolutions = solutions.slice(0, 4);
  const additionalSolutions = solutions.slice(4);

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=80" 
            alt="Enterprise Solutions" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-sidebar-foreground mb-8 tracking-tight" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)' }}>
              Enterprise Solutions Engineered for Scale
            </h1>
            <p className="text-xl md:text-2xl text-sidebar-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>
              Comprehensive technical systems designed to solve foundational business bottlenecks and accelerate digital transformation.
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <Link href="/contact">Request a Capability Brief</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Solving Macro Problems</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              While our services define what we do, our solutions define the complex problems we solve. We assemble cross-functional engineering teams to dismantle legacy infrastructure, automate labor-intensive workflows, and extract actionable intelligence from siloed data.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Solutions Zigzag */}
      <section className="bg-muted/40">
        {mainSolutions.map((solution, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={solution.slug} className="border-b border-border last:border-0 overflow-hidden">
              <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
                <div className={cn("grid lg:grid-cols-2 gap-16 items-center", !isEven && "lg:grid-flow-col-dense")}>
                  
                  {/* Image Side */}
                  <ScrollReveal className={cn("relative group", isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    <img 
                      src={solution.heroImage} 
                      alt={solution.title} 
                      className="w-full aspect-[4/3] object-cover shadow-2xl border border-border"
                    />
                  </ScrollReveal>
                  
                  {/* Content Side */}
                  <ScrollReveal delay={0.2} className={cn(isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                      Integrated Solution
                    </span>
                    <h3 className="text-4xl font-black text-foreground mb-6">{solution.title}</h3>
                    
                    <div className="space-y-4 text-lg text-muted-foreground mb-10">
                      <p>{solution.description}</p>
                    </div>

                    <div className="mb-10">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {solution.features.slice(0, 4).map((feat, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <p className="font-semibold text-foreground">{feat.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild variant="outline" size="lg" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
                      <Link href={`/solutions/${solution.slug}`}>
                        Explore Solution <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </ScrollReveal>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. Additional solutions list */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground">More Enterprise Solutions</h2>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-6">
            {additionalSolutions.map((solution, i) => (
              <ScrollReveal key={solution.slug} delay={i * 0.1}>
                <Link href={`/solutions/${solution.slug}`} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 border border-border hover:border-primary hover:shadow-lg transition-all group bg-card hover:bg-background">
                  <div className="w-16 h-16 bg-muted border border-border rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors text-foreground">
                    <Box className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{solution.title}</h3>
                    <p className="text-muted-foreground text-lg">{solution.shortDescription}</p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-muted group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-8">Ready to Transform Your Business?</h2>
            <Button asChild size="lg" className="bg-sidebar text-sidebar-foreground hover:bg-background hover:text-foreground h-16 px-10 text-lg border-2 border-sidebar">
              <Link href="/contact">Schedule a Solution Mapping Session</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}