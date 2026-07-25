import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Process() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80" 
            alt="Team meeting process" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>Our Methodology</span>
            <h1 className="text-5xl md:text-7xl font-black text-sidebar-foreground mb-8 tracking-tight max-w-4xl mx-auto" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)' }}>
              Our Proven Development Process
            </h1>
            <p className="text-xl md:text-2xl text-sidebar-foreground/90 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>
              We replace chaos with predictability. Our engineering methodology ensures transparency, eliminates technical debt, and guarantees delivery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Process Philosophy */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-foreground mb-8">Process That Scales</h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                Too many software projects fail not because of a lack of technical skill, but because of a lack of process. Misaligned expectations, poor communication, and unstructured testing turn great ideas into legacy nightmares before they even launch.
              </p>
              <p>
                At Optixa, we operate on a deeply refined Agile methodology. We do not disappear for six months and return with a monolithic product you never wanted. We build in tightly scoped two-week sprints. We demo working software constantly. We pivot when market data tells us to pivot. You are involved, informed, and in control at every single step.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Process Steps — LARGE VERTICAL TIMELINE */}
      <section className="py-24 md:py-32 bg-muted/40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative max-w-6xl mx-auto">
            {/* The vertical line */}
            <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-1 bg-border lg:-ml-[2px]" />

            {[
              {
                title: "Discovery & Research",
                desc: "We dive deep into your business domain. We interview stakeholders, analyze competitors, and map out the core problem. We define the 'Why' before we ever touch the 'How'.",
                deliverables: ["Product Requirements Document", "User Personas", "Technical Feasibility Study"],
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Strategic Planning",
                desc: "We define the Minimum Viable Product (MVP) or Phase 1 scope. We establish the product roadmap, prioritize features based on ROI, and agree on the metrics for success.",
                deliverables: ["Feature Prioritization Matrix", "Project Timeline", "Resource Allocation Plan"],
                img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "UI/UX Architecture",
                desc: "Design is not an afterthought. We wireframe the entire application, establish user flows, and build high-fidelity interactive prototypes to validate the user experience.",
                deliverables: ["Information Architecture", "Clickable Figma Prototype", "Design System"],
                img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "System Architecture",
                desc: "Before coding, senior architects map out the technical foundation. We design the database schema, API contracts, cloud infrastructure, and security protocols.",
                deliverables: ["Database Schema (ERD)", "API Documentation", "Cloud Infrastructure Diagram"],
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Agile Development",
                desc: "The build phase. We execute in two-week sprints. Every sprint ends with a demonstration of working, tested software deployed to a staging environment you can access.",
                deliverables: ["Bi-weekly Sprint Demos", "Accessible Staging Environment", "Transparent Jira/Linear Board"],
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "QA & Testing",
                desc: "Quality assurance runs parallel to development, not just at the end. We write automated unit tests, conduct manual exploratory testing, and perform rigorous security audits.",
                deliverables: ["Automated Test Coverage", "Security Vulnerability Report", "UAT Sign-off"],
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Deployment & Launch",
                desc: "We configure the production environment, set up zero-downtime CI/CD pipelines, execute the data migration, and push the application live to the world.",
                deliverables: ["Production Environment", "CI/CD Pipeline Setup", "Launch Playbook"],
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Ongoing Support",
                desc: "Software is never 'done'. We monitor system health, scale infrastructure as user bases grow, and immediately begin iterating on Phase 2 features.",
                deliverables: ["SLA Maintenance Contract", "24/7 Monitoring Dashboard", "Iterative Growth Strategy"],
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              }
            ].map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col lg:flex-row items-center justify-between mb-24 last:mb-0 w-full group">
                  
                  {/* The Circle */}
                  <div className="absolute left-0 lg:left-1/2 w-20 h-20 bg-primary text-primary-foreground font-black text-2xl flex items-center justify-center rounded-full border-4 border-background z-10 lg:-ml-10 shadow-lg">
                    {i + 1}
                  </div>

                  {/* Left Side Content/Image */}
                  <div className={cn("w-full lg:w-5/12 pl-28 lg:pl-0", isEven ? "lg:text-right lg:pr-16" : "lg:pl-16 lg:order-2")}>
                    <ScrollReveal className="bg-card p-8 border border-border shadow-sm relative">
                      {/* Triangle pointer */}
                      <div className={cn(
                        "hidden lg:block absolute top-10 w-4 h-4 bg-card border-border rotate-45",
                        isEven ? "border-t border-r -right-2" : "border-b border-l -left-2"
                      )} />
                      
                      <h3 className="text-2xl font-black text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6">{step.desc}</p>
                      
                      <div className="bg-muted p-4 border border-border text-left">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">Key Deliverables:</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((del, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm font-medium text-foreground">
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
                        className="w-full aspect-[4/3] object-cover border border-border shadow-sm transition-all duration-500"
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
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h3 className="text-xl font-bold text-muted-foreground uppercase tracking-widest mb-10">Our Workflow Toolkit</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              {['Jira', 'Figma', 'GitHub', 'Slack', 'Linear', 'Notion'].map((tool, i) => (
                <span key={i} className="text-2xl font-black text-foreground">{tool}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Why Our Process Works — stats strip */}
      <section className="py-24 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-5xl font-black text-primary mb-2">100%</p>
              <p className="font-bold text-sm uppercase tracking-wider text-sidebar-foreground/75">Code Transparency</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-5xl font-black text-primary mb-2">2 Wks</p>
              <p className="font-bold text-sm uppercase tracking-wider text-sidebar-foreground/75">Sprint Cycles</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-5xl font-black text-primary mb-2">0</p>
              <p className="font-bold text-sm uppercase tracking-wider text-sidebar-foreground/75">Surprise Costs</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-5xl font-black text-primary mb-2">24/7</p>
              <p className="font-bold text-sm uppercase tracking-wider text-sidebar-foreground/75">Environment Access</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground">Process FAQ</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: "How do we communicate with the team?", a: "We set up a shared Slack channel for daily communication. All tasks are tracked transparently in Jira or Linear. We conduct formal sprint reviews via video call every two weeks." },
              { q: "What if we need to change requirements mid-project?", a: "Agile embraces change. If market conditions shift, we simply re-prioritize the backlog during our next sprint planning session. We don't punish you with change-request fees for pivoting intelligently." },
              { q: "Who manages the project?", a: "Every project is assigned a dedicated Technical Product Manager. They translate your business goals into technical tickets and protect the engineers' time so they can focus on writing code." },
              { q: "Can we review the code as it's written?", a: "Yes. You will have full read-access to the GitHub repositories from Day 1." },
              { q: "How do you handle timezones?", a: "We require a minimum 4-hour timezone overlap with our clients to ensure real-time collaboration. We adapt our sprint ceremonies to fit your working hours." }
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-card border border-border p-6">
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

      {/* 7. CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-8">Ready to Build Without the Chaos?</h2>
            <Button asChild size="lg" className="bg-sidebar text-sidebar-foreground hover:bg-background hover:text-foreground h-16 px-10 text-lg border-2 border-sidebar">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}