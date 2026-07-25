import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle2, ChevronDown, MonitorPlay, Settings, Layers, Code, HardDrive, Share2 } from 'lucide-react';

export default function ServicesList() {
  const mainServices = services.slice(0, 6);
  const additionalServices = services.slice(6);

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111] overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80" 
            alt="Developer Coding" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              End-to-End Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We design, architect, and engineer digital platforms that solve complex business challenges and scale indefinitely.
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Services Introduction */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">Our Engineering Philosophy</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Technology is merely a tool; the goal is business impact. We don't just write code to fulfill a spec—we act as strategic technical partners. By combining deep domain expertise with modern software engineering practices, we deliver secure, high-performance systems that give you a definitive market advantage.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Services Zigzag */}
      <section className="bg-gray-50">
        {mainServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={service.slug} className="border-b border-gray-200 last:border-0 overflow-hidden">
              <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
                <div className={cn("grid lg:grid-cols-2 gap-16 items-center", !isEven && "lg:grid-flow-col-dense")}>
                  
                  {/* Image Side */}
                  <ScrollReveal className={cn("relative group", isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                    <img 
                      src={service.heroImage} 
                      alt={service.title} 
                      className="w-full aspect-video md:aspect-square object-cover shadow-2xl border border-gray-100"
                    />
                  </ScrollReveal>
                  
                  {/* Content Side */}
                  <ScrollReveal delay={0.2} className={cn(isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <span className="inline-block px-3 py-1 bg-red-100 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                      Core Service
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-black mb-6">{service.title}</h3>
                    
                    <div className="space-y-4 text-lg text-gray-600 mb-10">
                      <p>{service.description}</p>
                      <p>{service.overview.substring(0, 180)}...</p>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xl font-bold text-black mb-4">Key Capabilities:</h4>
                      <div className="space-y-3">
                        {service.features.slice(0, 4).map((feat, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <p className="font-semibold text-gray-800">{feat.title} <span className="font-normal text-gray-500">— {feat.description}</span></p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {service.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button asChild size="lg" className="h-14 px-8 text-base bg-black hover:bg-primary">
                      <Link href={`/services/${service.slug}`}>
                        Explore {service.title} <ArrowRight className="w-5 h-5 ml-2" />
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
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">Specialized Capabilities</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`} className="block h-full border border-gray-200 p-8 hover:border-primary hover:shadow-xl transition-all group">
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-500 mb-6 line-clamp-2">{service.shortDescription}</p>
                  <span className="text-primary font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                    View Service <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Selection CTA — Accordion FAQ */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">Not Sure Where to Start?</h2>
            <p className="text-xl text-gray-600 mt-4">Common questions about engaging our engineering teams.</p>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: "Do you offer full-cycle development?", a: "Yes. From initial UI/UX discovery and system architecture to backend engineering, frontend deployment, and ongoing DevOps support, we handle the entire product lifecycle." },
              { q: "How do you price your services?", a: "For well-defined scopes, we offer fixed-bid projects. For ongoing development and agile scopes, we offer dedicated engineering squads on a monthly retainer basis." },
              { q: "Can you rescue an existing failing project?", a: "Yes. We frequently conduct technical audits of legacy or failing codebases, stabilize the architecture, and execute a modernization strategy." },
              { q: "Do we own the intellectual property?", a: "Absolutely. Upon final payment, 100% of the source code and IP is legally transferred to your organization." }
            ].map((faq, i) => (
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

      {/* 6. Full-width CTA Banner */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Need Technical Guidance?</h2>
            <Button asChild size="lg" className="bg-black text-white hover:bg-white hover:text-black h-16 px-10 text-lg border-2 border-black">
              <Link href="/contact">Schedule an Architecture Review</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

// Need to import cn since I used it
import { cn } from '@/lib/utils';