import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import { servicesList } from '@/data';
import { ArrowRight, CheckCircle2, ChevronDown, MonitorPlay, Settings, Layers, Code, HardDrive, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServicesList() {
  const mainServices = services.slice(0, 6);
  const additionalServices = services.slice(6);

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={servicesList.hero.image} 
            alt={servicesList.hero.imageAlt} 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              {servicesList.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-sidebar-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              {servicesList.hero.description}
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <Link href={servicesList.hero.btn.link}>{servicesList.hero.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Services Introduction */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">{servicesList.intro.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {servicesList.intro.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Services Zigzag */}
      <section className="bg-muted/40">
        {mainServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={service.slug} className="border-b border-border last:border-0 overflow-hidden">
              <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
                <div className={cn("grid lg:grid-cols-2 gap-16 items-center", !isEven && "lg:grid-flow-col-dense")}>
                  
                  {/* Image Side */}
                  <ScrollReveal className={cn("relative group", isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                    <img 
                      src={service.heroImage} 
                      alt={service.title} 
                      className="w-full aspect-video md:aspect-square object-cover shadow-2xl border border-border"
                    />
                  </ScrollReveal>
                  
                  {/* Content Side */}
                  <ScrollReveal delay={0.2} className={cn(isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                      {servicesList.labels.coreService}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">{service.title}</h3>
                    
                    <div className="space-y-4 text-lg text-muted-foreground mb-10">
                      <p>{service.description}</p>
                      <p>{service.overview.substring(0, 180)}...</p>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xl font-bold text-foreground mb-4">{servicesList.labels.keyCapabilities}</h4>
                      <div className="space-y-3">
                        {service.features.slice(0, 4).map((feat, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <p className="font-semibold text-foreground">{feat.title} <span className="font-normal text-muted-foreground">— {feat.description}</span></p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {service.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button asChild size="lg" className="h-14 px-8 text-base bg-foreground text-background hover:bg-primary hover:text-primary-foreground">
                      <Link href={`/services/${service.slug}`}>
                        {servicesList.labels.explorePrefix} {service.title} <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </ScrollReveal>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. Additional Services Grid — Narrow Cards Allowed */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground">{servicesList.labels.specializedTitle}</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`} className="block h-full border border-border bg-card p-8 hover:border-primary hover:shadow-xl transition-all group">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{service.shortDescription}</p>
                  <span className="text-primary font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                    {servicesList.labels.viewService} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Selection CTA — Accordion FAQ */}
      <section className="py-24 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground">{servicesList.faq.title}</h2>
            <p className="text-xl text-muted-foreground mt-4">{servicesList.faq.description}</p>
          </ScrollReveal>

          <div className="space-y-4">
            {servicesList.faq.items.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-background border border-border p-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xl text-foreground">
                    {faq.q}
                    <ChevronDown className="w-6 h-6 text-primary group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4 text-lg leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Full-width CTA Banner */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{servicesList.cta.title}</h2>
            <Button asChild size="lg" className="bg-black text-white hover:bg-background hover:text-foreground h-16 px-10 text-lg border-2 border-black">
              <Link href={servicesList.cta.btn.link}>{servicesList.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}