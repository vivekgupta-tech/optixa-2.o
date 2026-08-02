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
      <div
        key={service.slug}
        className="border-b border-border last:border-0 overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-24">

          <div
            className={cn(
              "grid lg:grid-cols-2 gap-14 items-center",
              !isEven && "lg:grid-flow-col-dense"
            )}
          >

            {/* Image Side */}
            <ScrollReveal
              className={cn(
                "relative group flex items-center",
                isEven ? "lg:col-start-1" : "lg:col-start-2"
              )}
            >
              <div className="absolute inset-0 rounded-3xl bg-primary translate-x-4 translate-y-4 -z-10 transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

              <img
                src={service.heroImage}
                alt={service.title}
                className="
                  w-full
                  h-[620px]
                  object-cover
                  rounded-3xl
                  border
                  border-border
                  shadow-2xl
                  transition-all
                  duration-500
                  group-hover:scale-[1.02]
                "
              />
            </ScrollReveal>

            {/* Content Side */}
            <ScrollReveal
              delay={0.2}
              className={cn(
                "flex items-center",
                isEven ? "lg:col-start-2" : "lg:col-start-1"
              )}
            >
              <div className="w-full min-h-[620px] flex flex-col justify-center">

                {/* Badge */}
                <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-1.5 text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">
                  {servicesList.labels.coreService}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-5">
                  {service.title}
                </h3>

                {/* Description */}
                <div className="space-y-4 text-base md:text-lg leading-7 text-muted-foreground mb-8">
                  <p>{service.description}</p>
                  <p>{service.overview.substring(0, 120)}...</p>
                </div>

                {/* Key Capabilities */}
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl font-black text-foreground mb-5">
                    {servicesList.labels.keyCapabilities}
                  </h4>

                  <div className="space-y-3">

                    {service.features.slice(0, 3).map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>

                        <p className="text-base leading-7">
                          <span className="font-bold text-foreground">
                            {feat.title}
                          </span>

                          <span className="text-muted-foreground">
                            {" "}
                            — {feat.description}
                          </span>
                        </p>
                      </div>
                    ))}

                  </div>
                </div>

                {/* Technology Chips */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        border
                        border-sky-200
                        bg-white/60
                        backdrop-blur-xl
                        text-sky-700
                        shadow-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-105
                        hover:bg-gradient-to-r
                        hover:from-sky-500
                        hover:to-blue-600
                        hover:text-white
                        hover:border-blue-500
                        hover:shadow-[0_10px_25px_rgba(37,99,235,0.35)]
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Button */}
                <Button
                  asChild
                  size="lg"
                  className="
                    w-fit
                    h-14
                    px-8
                    rounded-xl
                    bg-sidebar
                    text-white
                    hover:bg-primary
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <Link href={`/services/${service.slug}`}>
                    {servicesList.labels.explorePrefix} {service.title}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    );
  })}
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