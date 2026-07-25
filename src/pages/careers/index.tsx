import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { careers } from '@/data';
import { ArrowRight, Code, Laptop, Heart, Map, Clock, Shield, Plane, Zap } from 'lucide-react';

export default function Careers() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src={careers.hero.image} 
            alt={careers.hero.imageAlt} 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">{careers.hero.subtitle}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              {careers.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {careers.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Why Join Optixa — 3 Wide Rows */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black">{careers.whyJoin.title}</h2>
          </ScrollReveal>

          <div className="space-y-16 max-w-5xl mx-auto">
            {careers.whyJoin.items.map((row, i) => {
              const getIconElement = (iconName: string) => {
                const props = { className: "w-12 h-12 text-primary" };
                if (iconName === 'Code') return <Code {...props} />;
                if (iconName === 'Laptop') return <Laptop {...props} />;
                return <Zap {...props} />;
              };
              return (
                <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                  <div className="w-24 h-24 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                    {getIconElement(row.icon)}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-4">{row.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{row.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Benefits — 2-column list */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">{careers.perks.title}</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {careers.perks.items.map((benefit, i) => {
              const getPerkIcon = (iconName: string) => {
                const props = { className: "w-6 h-6" };
                if (iconName === 'Map') return <Map {...props} />;
                if (iconName === 'Heart') return <Heart {...props} />;
                if (iconName === 'Clock') return <Clock {...props} />;
                if (iconName === 'Laptop') return <Laptop {...props} />;
                if (iconName === 'Plane') return <Plane {...props} />;
                return <Shield {...props} />;
              };
              return (
                <ScrollReveal key={i} delay={i * 0.05} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 shrink-0 text-primary">
                    {getPerkIcon(benefit.icon)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Culture Section — Full-width image background */}
      <section className="relative py-32 bg-[#111] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={careers.culture.image} 
            alt={careers.culture.imageAlt} 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{careers.culture.title}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {careers.culture.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Hiring Process — Numbered Horizontal Steps */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">{careers.hiring.title}</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gray-100" />
            
            {careers.hiring.steps.map((stage, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative z-10 bg-white pt-4">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6 border-4 border-white shadow-sm">
                  {stage.step}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg text-black mb-2">{stage.title}</h4>
                  <p className="text-gray-500 text-sm">{stage.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Open Positions — HONEST EMPTY STATE */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center bg-white p-12 md:p-16 border border-gray-200 shadow-sm rounded-xl">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <Code className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-black mb-4">{careers.openPositions.title}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {careers.openPositions.description}
            </p>
            <div className="bg-red-50 p-6 rounded-lg text-left">
              <h4 className="font-bold text-primary mb-2">{careers.openPositions.callout.title}</h4>
              <p className="text-gray-700 mb-4">{careers.openPositions.callout.description}</p>
              <a href={`mailto:${careers.openPositions.callout.email}`} className="text-black font-bold flex items-center gap-2 hover:text-primary transition-colors">
                {careers.openPositions.callout.linkText} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}