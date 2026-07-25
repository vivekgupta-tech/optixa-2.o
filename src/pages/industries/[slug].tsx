import React from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { industries } from '@/data/industries';
import NotFound from '../not-found';
import { ArrowRight, CheckCircle2, ChevronDown, Layers, Layout, Zap, Lock, Eye, MessageSquare, Database, Shield, Box, Smartphone, Globe, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function IndustryDetail() {
  const params = useParams();
  const industry = industries.find(s => s.slug === params.slug);

  if (!industry) return <NotFound />;

  // Quick fallback icon renderer
  const getIcon = (name: string, className = "w-10 h-10") => {
    const props = { className };
    if (name.includes('Shield')) return <Shield {...props} />;
    if (name.includes('Activity')) return <Zap {...props} />;
    if (name.includes('Lock')) return <Lock {...props} />;
    if (name.includes('Database')) return <Database {...props} />;
    if (name.includes('Video') || name.includes('Vision')) return <Eye {...props} />;
    if (name.includes('Smartphone')) return <Smartphone {...props} />;
    if (name.includes('Globe')) return <Globe {...props} />;
    if (name.includes('Building')) return <Building {...props} />;
    return <Box {...props} />;
  };

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111] overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={industry.heroImage} 
            alt={industry.title} 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Industry Focus</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 max-w-5xl mx-auto leading-[1.1] tracking-tight">
              {industry.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {industry.shortDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-white hover:text-black">
                <Link href="/contact">Talk with our {industry.title} Experts</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-8 leading-tight">
              Transforming the Sector
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed font-medium">
              {industry.overview}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Challenges (numbered list sections) */}
      <section className="py-24 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black">Key Industry Challenges</h2>
          </ScrollReveal>

          <div className="space-y-8 max-w-5xl mx-auto">
            {industry.challenges.map((challenge, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col md:flex-row items-start gap-8 bg-white p-10 shadow-sm border border-gray-100">
                <div className="text-6xl font-black text-gray-200 shrink-0 leading-none">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">{challenge.title}</h3>
                  <p className="text-gray-600 text-xl leading-relaxed">{challenge.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Solve Them (zigzag / solutions grid) */}
      <section className="py-24 md:py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black">Our Sector Solutions</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {industry.solutions.map((sol, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors">
                <div className="text-primary mb-8">
                  {getIcon(sol.icon)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{sol.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{sol.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Statistics Strip */}
      <section className="py-24 bg-primary text-white border-y border-red-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {industry.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-5xl md:text-6xl font-black mb-2 tracking-tight">{stat.metric}</p>
                <p className="text-white/80 font-bold uppercase tracking-wider text-sm">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technologies (inline row) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black mb-12 text-black">Relevant Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industry.technologies.map((tech, i) => (
                <span key={i} className="px-6 py-3 bg-gray-100 text-black font-bold text-lg rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">Sector Questions</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-white border border-gray-200 p-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xl text-black">
                    {faq.question}
                    <ChevronDown className="w-6 h-6 text-primary group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-gray-600 mt-4 text-lg leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 bg-[#111] text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Modernize Your Operations</h2>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-white hover:text-black h-16 px-10 text-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}