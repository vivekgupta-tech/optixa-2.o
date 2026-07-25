import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { processPage } from '@/data';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Process() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src={processPage.hero.image} 
            alt={processPage.hero.imageAlt} 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">{processPage.hero.subtitle}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight max-w-4xl mx-auto">
              {processPage.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {processPage.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Process Philosophy */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-black mb-8">{processPage.philosophy.title}</h2>
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
              <p>
                {processPage.philosophy.paragraphs[0]}
              </p>
              <p>
                {processPage.philosophy.paragraphs[1]}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Process Steps — LARGE VERTICAL TIMELINE */}
      <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative max-w-6xl mx-auto">
            {/* The vertical line */}
            <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-1 bg-gray-200 lg:-ml-[2px]" />
            {processPage.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col lg:flex-row items-center justify-between mb-24 last:mb-0 w-full group">
                  
                  {/* The Circle */}
                  <div className="absolute left-0 lg:left-1/2 w-20 h-20 bg-primary text-white font-black text-2xl flex items-center justify-center rounded-full border-4 border-gray-50 z-10 lg:-ml-10 shadow-lg">
                    {i + 1}
                  </div>

                  {/* Left Side Content/Image */}
                  <div className={cn("w-full lg:w-5/12 pl-28 lg:pl-0", isEven ? "lg:text-right lg:pr-16" : "lg:pl-16 lg:order-2")}>
                    <ScrollReveal className="bg-white p-8 border border-gray-200 shadow-sm relative">
                      {/* Triangle pointer */}
                      <div className={cn(
                        "hidden lg:block absolute top-10 w-4 h-4 bg-white border-gray-200 rotate-45",
                        isEven ? "border-t border-r -right-2" : "border-b border-l -left-2"
                      )} />
                      
                      <h3 className="text-2xl font-black text-black mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg mb-6">{step.desc}</p>
                      
                      <div className="bg-gray-50 p-4 border border-gray-100 text-left">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">{processPage.deliverablesLabel}</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((del, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {del}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Right Side Image/Content */}
                  <div className={cn("w-full lg:w-5/12 mt-8 lg:mt-0 pl-28 lg:pl-0", isEven ? "lg:pl-16" : "lg:pr-16 lg:order-1")}>
                    <ScrollReveal delay={0.2} className="h-full">
                      <img 
                        src={step.img} 
                        alt={step.title}
                        className="w-full aspect-[4/3] object-cover border border-gray-200 shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </ScrollReveal>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Tools We Use */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-10">{processPage.toolkit.title}</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              {processPage.toolkit.tools.map((tool, i) => (
                <span key={i} className="text-2xl font-black text-gray-800">{tool}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Why Our Process Works — stats strip */}
      <section className="py-24 bg-[#111] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {processPage.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-5xl font-black text-primary mb-2">{stat.value}</p>
                <p className="font-bold text-sm uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">{processPage.faq.title}</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {processPage.faq.items.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-white border border-gray-200 p-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xl text-black">
                    {faq.q}
                    <ChevronDown className="w-6 h-6 text-primary group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-gray-600 mt-4 text-lg leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{processPage.cta.title}</h2>
            <Button asChild size="lg" className="bg-black text-white hover:bg-white hover:text-black h-16 px-10 text-lg border-2 border-black">
              <Link href={processPage.cta.btn.link}>{processPage.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}