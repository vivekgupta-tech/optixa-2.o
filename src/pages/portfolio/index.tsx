import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Portfolio() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="Capabilities" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block" >Our Work</span>
            <h1 className="text-5xl md:text-7xl font-black text-sidebar-foreground mb-8 tracking-tight" >
              Our Development Capabilities
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Intro section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">Building Out in the Open</h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                As a fast-growing technology startup, many of our recent enterprise projects are currently bound by strict NDAs, preventing us from sharing exact client details or source code.
              </p>
              <p>
                However, we believe in demonstrating capability through architectural transparency. Below are detailed showcases of the complex systems, architectures, and applications our engineers build daily. These represent our true technical capability, scale, and design philosophy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Capability Showcases (4 sections) */}
      <div className="bg-background">
        {[
          {
            title: "Enterprise Web Applications",
            tag: "Architecture Showcase",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
            desc: "We build highly complex, data-dense web applications that perform like native desktop software. Our frontends process millions of rows of data using WebGL and advanced state management, ensuring zero UI lag.",
            bullets: ["Next.js Server-Side Rendering", "Micro-frontend Architectures", "Real-time WebSocket Data Sync", "Complex Data Visualization (D3.js)"]
          },
          {
            title: "AI & Automation Systems",
            tag: "Capability Showcase",
            img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=2000&q=80",
            desc: "Integrating Large Language Models and proprietary Machine Learning algorithms into legacy workflows. We build systems that automate thousands of hours of manual cognitive tasks securely.",
            bullets: ["Private LLM Deployments", "Custom NLP Data Pipelines", "Computer Vision for QA", "Automated Fallback Mechanisms"]
          },
          {
            title: "Mobile Applications",
            tag: "Platform Showcase",
            img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2000&q=80",
            desc: "Native and cross-platform applications designed for flawless performance and offline capability. We build consumer apps that dominate App Store charts and internal enterprise apps that field workers rely on.",
            bullets: ["React Native Cross-Platform", "Offline-First SQLite Syncing", "Secure Enclave Biometrics", "60fps Animated UIs"]
          },
          {
            title: "Cloud Infrastructure",
            tag: "Engineering Showcase",
            img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80",
            desc: "Designing and deploying the invisible backend architecture that powers global platforms. We establish auto-scaling, self-healing environments using deep Infrastructure as Code practices.",
            bullets: ["Terraform IaC Provisioning", "Kubernetes Orchestration", "Zero-Trust VPC Architecture", "Multi-Region Disaster Recovery"]
          }
        ].map((showcase, i) => {
          const isEven = i % 2 === 0;
          return (
            <section key={i} className={cn("border-b border-border last:border-0 overflow-hidden", isEven ? "bg-background" : "bg-muted/40")}>
              <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
                <div className={cn("grid lg:grid-cols-2 gap-16 items-center", !isEven && "lg:grid-flow-col-dense")}>
                  
                  {/* Image Side */}
                  <ScrollReveal className={cn("relative group", isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    <img 
                      src={showcase.img} 
                      alt={showcase.title} 
                      className="w-full aspect-[4/3] object-cover shadow-xl border border-border"
                    />
                  </ScrollReveal>
                  
                  {/* Content Side */}
                  <ScrollReveal delay={0.2} className={cn(isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                      {showcase.tag}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight">{showcase.title}</h2>
                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed">{showcase.desc}</p>
                    
                    <div className="space-y-4 mb-12">
                      {showcase.bullets.map((bullet, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-lg font-medium text-foreground">{bullet}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild size="lg" className="h-14 px-8 text-base">
                      <Link href="/contact">Discuss Your Project</Link>
                    </Button>
                  </ScrollReveal>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. Development Process Preview */}
      <section className="py-24 bg-muted/40 border-y border-border text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-3xl font-black text-foreground">How We Execute</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {['Discovery', 'Architecture', 'Agile Build', 'Launch & Scale'].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary font-black text-xl flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-lg text-foreground">{step}</h4>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.4} className="mt-12">
            <Link href="/process" className="text-primary font-bold text-lg flex items-center justify-center gap-2 hover:gap-4 transition-all">
              View Our Full Process <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Why Work With Us Now — Split layout */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Startup advantage" 
                className="w-full aspect-[4/3] object-cover shadow-xl border border-border"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Optixa Advantage</span>
              <h2 className="text-4xl font-black text-foreground mb-8">Why Partner With Us Now</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Engaging a growing technology startup offers massive advantages over sluggish, traditional enterprise agencies. We are hungry, agile, and technically superior.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Direct Team Access", desc: "You speak directly to the engineers building your product. No account manager middle-men." },
                  { title: "Modern Tech Stack", desc: "We aren't bogged down in 10-year-old corporate standards. We use the tools that win today." },
                  { title: "Rapid Iteration", desc: "Bureaucracy doesn't slow us down. We deploy changes in hours, not weeks." },
                  { title: "Aggressive Pricing", desc: "We are building our reputation. You get senior architectural talent without the massive agency overhead fees." },
                  { title: "Startup-Friendly Contracts", desc: "Agile, flexible engagements that allow you to pivot without punitive change-request penalties." }
                ].map((adv, i) => (
                  <div key={i} className="flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground">{adv.title}</h4>
                      <p className="text-muted-foreground mt-1">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-sidebar text-sidebar-foreground text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-sidebar-foreground mb-8">Let's Build Your Capability Showcase</h2>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-background hover:text-foreground h-16 px-10 text-lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}