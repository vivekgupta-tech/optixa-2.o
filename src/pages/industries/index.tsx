import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { industries } from '@/data/industries';
import { ArrowRight, CheckCircle2, ChevronRight, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Industries() {
  const zigzagIndustries = industries.slice(0, 5);
  const listIndustries = industries.slice(5);

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="Global Industries" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-sidebar-foreground mb-8 tracking-tight" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)' }}>
              Industry-Specific Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-sidebar-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>
              We combine deep sector knowledge with world-class engineering to solve the unique challenges of your industry.
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <Link href="/contact">Discuss Your Industry</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Industries as ZIGZAG */}
      <section className="bg-background">
        {zigzagIndustries.map((industry, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={industry.slug} className="border-b border-border last:border-0 overflow-hidden">
              <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
                <div className={cn("grid lg:grid-cols-2 gap-16 items-center", !isEven && "lg:grid-flow-col-dense")}>
                  
                  {/* Image Side */}
                  <ScrollReveal className={cn("relative group", isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    <img 
                      src={industry.heroImage} 
                      alt={industry.title} 
                      className="w-full aspect-[4/3] object-cover shadow-xl border border-border"
                    />
                  </ScrollReveal>
                  
                  {/* Content Side */}
                  <ScrollReveal delay={0.2} className={cn(isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <h3 className="text-4xl font-black text-foreground mb-6">{industry.title}</h3>
                    
                    <div className="space-y-4 text-lg text-muted-foreground mb-10">
                      <p>{industry.overview}</p>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xl font-bold text-foreground mb-4">Key Solutions:</h4>
                      <div className="space-y-4">
                        {industry.solutions.map((sol, i) => (
                          <div key={i} className="flex items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <div>
                              <p className="font-bold text-foreground">{sol.title}</p>
                              <p className="text-muted-foreground">{sol.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild variant="outline" size="lg" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
                      <Link href={`/industries/${industry.slug}`}>
                        Explore {industry.title} <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </ScrollReveal>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Remaining industries as wide list rows */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl font-black text-foreground">More Sectors We Empower</h2>
          </ScrollReveal>

          <div className="space-y-6 max-w-5xl">
            {listIndustries.map((industry, i) => (
              <ScrollReveal key={industry.slug} delay={i * 0.1}>
                <Link href={`/industries/${industry.slug}`} className="flex flex-col md:flex-row md:items-center gap-8 p-8 bg-card border border-border hover:border-primary transition-all group shadow-sm hover:shadow-md">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary transition-colors">
                    <Building className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{industry.title}</h3>
                    <p className="text-xl text-muted-foreground">{industry.shortDescription}</p>
                  </div>
                  <div className="shrink-0 flex items-center text-primary font-bold text-lg gap-2">
                    View Details <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-sidebar text-sidebar-foreground text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-sidebar-foreground mb-8">Not seeing your industry?</h2>
            <p className="text-xl text-sidebar-foreground/75 max-w-2xl mx-auto mb-10">We build agnostic, custom platforms that conform to any business model.</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-background hover:text-foreground h-16 px-10 text-lg">
              <Link href="/contact">Talk to an Architect</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}