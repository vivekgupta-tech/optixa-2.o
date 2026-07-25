import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { ArrowRight, Target, Eye, Users, RefreshCw, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { about } from '@/data';

export default function About() {

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111] overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={about.hero.image} 
            alt={about.hero.imageAlt} 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">{about.hero.subtitle}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 max-w-4xl leading-[1.1] tracking-tight">
              {about.hero.title}
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              {about.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href={about.hero.primaryBtn.link}>{about.hero.primaryBtn.text}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-white text-white hover:bg-white hover:text-black bg-transparent">
                <Link href={about.hero.secondaryBtn.link}>{about.hero.secondaryBtn.text}</Link>
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} className="absolute bottom-12 left-4 md:left-8 animate-bounce">
            <ArrowRight className="w-8 h-8 text-white rotate-90" />
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Company Story — Image Right, Text Left */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: about.story.title }}>
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                {about.story.paragraphs.slice(0, 2).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 text-2xl font-bold text-black italic">
                  {about.story.quote}
                </blockquote>
                {about.story.paragraphs.slice(2).map((p, i) => (
                  <p key={i + 2}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="order-1 lg:order-2 relative">
              <div className="absolute top-0 right-0 w-full h-full bg-gray-100 translate-x-4 translate-y-4 -z-10" />
              <img 
                src={about.story.image} 
                alt={about.story.imageAlt} 
                className="w-full aspect-[4/5] object-cover border border-gray-200"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision — Split Dark Section */}
      <section className="flex flex-col md:flex-row min-h-[60vh]">
        <div className="md:w-1/2 bg-[#111] p-12 md:p-24 flex flex-col justify-center">
          <ScrollReveal>
            <div className="w-16 h-1 bg-primary mb-8" />
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">{about.missionVision.mission.subtitle}</h3>
            <p className="text-3xl md:text-4xl font-black text-white leading-snug">
              {about.missionVision.mission.text}
            </p>
          </ScrollReveal>
        </div>
        <div className="md:w-1/2 bg-gray-50 p-12 md:p-24 flex flex-col justify-center">
          <ScrollReveal delay={0.2}>
            <div className="w-16 h-1 bg-black mb-8" />
            <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4">{about.missionVision.vision.subtitle}</h3>
            <p className="text-3xl md:text-4xl font-black text-black leading-snug">
              {about.missionVision.vision.text}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Core Values — Large Icon Sections (not cards) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">{about.values.title}</h2>
            <p className="text-xl text-gray-600">{about.values.description}</p>
          </ScrollReveal>

          <div className="space-y-16">
            {[<Target key="target" className="w-10 h-10" />, <Eye key="eye" className="w-10 h-10" />, <Zap key="zap" className="w-10 h-10" />, <RefreshCw key="refresh" className="w-10 h-10" />, <Users key="users" className="w-10 h-10" />, <Shield key="shield" className="w-10 h-10" />].map((icon, i) => {
              const value = about.values.items[i];
              return (
              <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                  {icon}
                </div>
                <div className="pt-2">
                  <h3 className="text-3xl font-black text-black mb-4">{value.title}</h3>
                  <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">{value.text}</p>
                </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Startup Timeline — Vertical Timeline */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black">{about.timeline.title}</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 md:-ml-0.5" />

            {about.timeline.nodes.map((node, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={0.1} className="relative flex items-center justify-between mb-16 last:mb-0 w-full">
                  {/* Left Side (Empty on mobile, content on desktop even) */}
                  <div className={cn("hidden md:block w-5/12 text-right pr-12", !isEven && "opacity-0")}>
                    <h4 className="text-2xl font-bold text-black mb-2">{node.title}</h4>
                    <p className="text-gray-600">{node.desc}</p>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-gray-50 z-10 shadow-lg">
                    <span className="text-white font-bold text-sm">{node.year}</span>
                  </div>

                  {/* Right Side (Content on mobile, content on desktop odd) */}
                  <div className={cn("w-full pl-24 md:pl-12 md:w-5/12", isEven && "md:hidden")}>
                    <h4 className="text-2xl font-bold text-black mb-2">{node.title}</h4>
                    <p className="text-gray-600">{node.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. How We Work — 3 Wide Rows */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black">{about.operations.title}</h2>
          </ScrollReveal>

          <div className="space-y-24">
            {about.operations.rows.map((row, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={cn("grid md:grid-cols-2 gap-12 items-center", !isEven && "md:grid-flow-col-dense")}>
                  <ScrollReveal className={cn(isEven ? "md:col-start-1" : "md:col-start-2")}>
                    <p className="text-8xl font-black text-gray-100 mb-4 tracking-tighter">{row.num}</p>
                    <h3 className="text-3xl font-black text-black mb-6">{row.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{row.desc}</p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2} className={cn(isEven ? "md:col-start-2" : "md:col-start-1")}>
                    <img src={row.img} alt={row.title} className="w-full aspect-[4/3] object-cover shadow-xl" />
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Work Culture — Full-Width Image Section */}
      <section className="relative py-32 md:py-48 bg-[#111]">
        <div className="absolute inset-0">
          <img 
            src={about.culture.image} 
            alt={about.culture.imageAlt} 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-12">{about.culture.title}</h2>
            <div className="space-y-6">
              {about.culture.points.map((pt, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-2xl text-white font-medium">{pt}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black bg-transparent">
                <Link href={about.culture.btn.link}>{about.culture.btn.text}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. CTA — Dark Strip */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-white mb-8">{about.cta.title}</h2>
            <Button asChild size="lg" className="bg-black text-white hover:bg-white hover:text-black h-16 px-10 text-lg">
              <Link href={about.cta.btn.link}>{about.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}