import React from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import NotFound from '../not-found';
import { ArrowRight, CheckCircle2, ChevronDown, Layers, Layout, Zap, Lock, Eye, MessageSquare, Database, Shield, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServiceDetail() {
  const params = useParams();
  const service = services.find(s => s.slug === params.slug);

  if (!service) return <NotFound />;

  // Helper to get an icon based on string matching (simple fallback)
  const getIcon = (name: string, className = "w-8 h-8") => {
    const props = { className };
    if (name.includes('Zap') || name.includes('High')) return <Zap {...props} />;
    if (name.includes('Lock') || name.includes('Secure')) return <Lock {...props} />;
    if (name.includes('Eye') || name.includes('Vision')) return <Eye {...props} />;
    if (name.includes('Message') || name.includes('NLP')) return <MessageSquare {...props} />;
    if (name.includes('Database') || name.includes('Legacy')) return <Database {...props} />;
    if (name.includes('Shield') || name.includes('Security')) return <Shield {...props} />;
    if (name.includes('Layers') || name.includes('Architecture')) return <Layers {...props} />;
    if (name.includes('Layout') || name.includes('Interface')) return <Layout {...props} />;
    return <Box {...props} />;
  };

  return (
    <div className="w-full">
      {/* 1. Hero (80vh) */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111] overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Service Capability</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 max-w-5xl leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-white text-white hover:bg-white hover:text-black bg-transparent">
                <a href="#overview">Explore Capability</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Overview — image right, text left */}
      <section id="overview" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight">
                Architected for Business Impact
              </h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>{service.description}</p>
                <p>{service.overview}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="relative">
              <div className="absolute inset-0 bg-gray-100 translate-x-6 translate-y-6 -z-10" />
              <img 
                src={service.heroImage} 
                alt="Overview" 
                className="w-full aspect-square md:aspect-[4/3] object-cover border border-gray-200"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Business Challenges — DARK SECTION (#111) */}
      <section className="py-24 md:py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-3xl mb-16">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">The Problem Space</span>
            <h2 className="text-4xl md:text-5xl font-black">Business Challenges We Solve</h2>
          </ScrollReveal>

          <div className="space-y-8">
            {service.challenges.map((challenge, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start gap-8">
                <div className="text-5xl font-black text-white/20 shrink-0 mt-[-8px]">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{challenge.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">{challenge.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Solution — IMAGE LEFT, TEXT RIGHT */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                alt="Solution architecture" 
                className="w-full aspect-[4/5] object-cover shadow-2xl sticky top-32"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-8">Technical Approach</h2>
              <p className="text-xl text-gray-600 mb-12">
                We don't provide generic fixes. Our {service.title.toLowerCase()} solutions are deeply integrated, highly secure, and built specifically to dismantle your operational bottlenecks.
              </p>
              
              <div className="space-y-8">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center shrink-0 text-primary">
                      {getIcon(feat.icon)}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-black mb-2">{feat.title}</h4>
                      <p className="text-gray-600 text-lg">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Development Process — NUMBERED STEPS with connecting line */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black">Execution Process</h2>
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-gray-200" />
            
            {service.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative flex gap-8 items-start mb-16 last:mb-0">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white font-black text-2xl shrink-0 border-4 border-white shadow-md z-10">
                  {i + 1}
                </div>
                <div className="pt-4 pb-8 border-b border-gray-100 w-full">
                  <h3 className="text-3xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Stack — INLINE LOGO ROWS */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">Core Technologies</h2>
            <p className="text-lg text-gray-600 mt-4">Enterprise-grade tools powering our {service.title.toLowerCase()} stack.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, i) => (
              <div key={i} className="px-6 py-4 bg-white border border-gray-200 shadow-sm text-xl font-bold text-gray-800">
                {tech}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Benefits — STATS + TEXT SECTION */}
      <section className="py-24 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black">Measurable Outcomes</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {service.benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-6xl font-black mb-4 tracking-tighter">{benefit.metric}</p>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{benefit.label}</h4>
                <p className="text-white/80 font-medium">{benefit.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industries Using This Service */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h3 className="text-xl font-bold text-gray-500 mb-8 uppercase tracking-widest">Target Industries</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {service.industries.map((ind, i) => (
                <span key={i} className="px-5 py-2 bg-gray-100 text-black font-semibold rounded-full text-sm">
                  {ind}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FAQ — ACCORDION */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">Common Questions</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
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

      {/* 10. CTA Banner */}
      <section className="py-24 bg-[#111] text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Require {service.title}?</h2>
            <Button asChild size="lg" className="h-16 px-10 text-lg">
              <Link href="/contact">Schedule a Technical Call</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}