import React from 'react';
import { Link } from 'wouter';
import { HeroSlider } from '@/components/common/HeroSlider';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import { insights } from '@/data/insights';
import { 
  ArrowRight, CheckCircle2, Bot, Code2, Cloud, PenTool, Layout, Layers, Shield, 
  TerminalSquare, Users, Cpu, FileJson, Gauge, Database, Smartphone, Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Scrolling stats strip */}
      <section className="bg-sidebar text-sidebar-foreground py-16 border-y border-sidebar-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal y={20} delay={0}>
              <p className="text-4xl md:text-5xl font-black text-sidebar-foreground mb-2 tracking-tight">50+</p>
              <p className="text-primary font-bold uppercase tracking-wider text-sm">Projects Delivered</p>
            </ScrollReveal>
            <ScrollReveal y={20} delay={0.1}>
              <p className="text-4xl md:text-5xl font-black text-sidebar-foreground mb-2 tracking-tight">10+</p>
              <p className="text-primary font-bold uppercase tracking-wider text-sm">Technology Partnerships</p>
            </ScrollReveal>
            <ScrollReveal y={20} delay={0.2}>
              <p className="text-4xl md:text-5xl font-black text-sidebar-foreground mb-2 tracking-tight">3+</p>
              <p className="text-primary font-bold uppercase tracking-wider text-sm">Years Engineering</p>
            </ScrollReveal>
            <ScrollReveal y={20} delay={0.3}>
              <p className="text-4xl md:text-5xl font-black text-sidebar-foreground mb-2 tracking-tight">100%</p>
              <p className="text-primary font-bold uppercase tracking-wider text-sm">Quality-Driven</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Company Intro — Split Layout */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary -z-10 translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 left-0 w-48 h-48 border-4 border-muted -z-10 -translate-x-8 translate-y-8" />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
                alt="Engineering team collaboration" 
                className="w-full aspect-[4/5] md:aspect-square object-cover shadow-2xl"
              />
            </ScrollReveal>
            
            <ScrollReveal y={30} delay={0.2}>
              <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4">
                Growing Technology Startup
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-8 leading-[1.1]">
                Engineering Software That Drives Real Business Results
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground mb-10">
                <p>
                  We are not just another outsourced dev shop. Optixa is a dedicated engineering partner for modern enterprises and high-growth startups. We combine deep technical expertise with strategic product vision.
                </p>
                <p>
                  Our teams don't just write code; they solve complex operational bottlenecks. By focusing on scalable architecture and flawless user experience, we build platforms that outlive their initial requirements.
                </p>
                <p>
                  From AI-driven automation to custom monolithic-to-microservices migrations, we engineer the digital backbone of forward-thinking companies.
                </p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {['Architected for infinite scalability', 'Agile, transparent development cycles', 'Obsessive focus on code quality and testing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-foreground font-semibold text-lg">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href="/about">
                  Discover Our Approach <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Services Preview — Alternating Zigzag */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 mb-20 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Our Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">End-to-End Engineering</h2>
          </ScrollReveal>
        </div>

        <div className="flex flex-col">
          {services.slice(0, 4).map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.slug} className="container mx-auto px-4 md:px-8 py-16 md:py-24 border-b border-border last:border-0">
                <div className={cn("grid lg:grid-cols-2 gap-16 items-center", isEven ? "" : "lg:grid-flow-col-dense")}>
                  <ScrollReveal className={cn("relative", isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    <img 
                      src={service.heroImage} 
                      alt={service.title} 
                      className="w-full aspect-video md:aspect-[4/3] object-cover shadow-xl"
                    />
                  </ScrollReveal>
                  
                  <ScrollReveal y={30} delay={0.2} className={cn(isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                      {index === 0 ? <Bot className="w-8 h-8 text-primary" /> :
                       index === 1 ? <Code2 className="w-8 h-8 text-primary" /> :
                       index === 2 ? <Cloud className="w-8 h-8 text-primary" /> :
                       <PenTool className="w-8 h-8 text-primary" />}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6">{service.title}</h3>
                    <div className="space-y-4 text-muted-foreground text-lg mb-8">
                      <p>{service.description}</p>
                      <p>{service.overview.substring(0, 150)}...</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {service.features.slice(0,4).map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="font-semibold text-foreground">{feat.title}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="outline" size="lg" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
                      <Link href={`/services/${service.slug}`}>
                        Explore Service <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Why Optixa — Full-Width Dark Section */}
      <section className="py-24 md:py-32 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-3xl mb-20">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">The Optixa Advantage</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-sidebar-foreground">
              Why Forward-Thinking Companies Choose Optixa
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <TerminalSquare />, title: "Engineering Depth", desc: "We employ polyglot engineers who understand architecture, not just syntax." },
              { icon: <Gauge />, title: "Startup Agility", desc: "Enterprise-grade output delivered with the speed and flexibility of a startup." },
              { icon: <Users />, title: "Transparent Process", desc: "Direct access to your engineering team. No black-box development." },
              { icon: <Layers />, title: "Scalable Architecture", desc: "We build systems designed to handle 10x your current load seamlessly." }
            ].map((item, i) => (
              <ScrollReveal key={i} y={20} delay={i * 0.1} className="group">
                <div className="w-16 h-16 bg-sidebar-accent/50 border border-sidebar-border flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  {React.isValidElement(item.icon) ? React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" }) : item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-sidebar-foreground">{item.title}</h3>
                <p className="text-sidebar-foreground/75 text-lg leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Development Process — Numbered Timeline */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">How We Build Your Product</h2>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border hidden lg:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
              {[
                { step: "01", name: "Discovery", desc: "Requirement gathering & tech stack definition" },
                { step: "02", name: "Architecture", desc: "Database schema & system mapping" },
                { step: "03", name: "Design", desc: "UX/UI prototyping & design systems" },
                { step: "04", name: "Development", desc: "Agile sprints & feature implementation" },
                { step: "05", name: "Testing", desc: "Automated QA & security auditing" },
                { step: "06", name: "Launch", desc: "CI/CD deployment & monitoring setup" },
                { step: "07", name: "Support", desc: "SLA maintenance & scaling optimization" }
              ].map((process, i) => (
                <ScrollReveal key={i} y={20} delay={i * 0.1} className="relative z-10 flex flex-col lg:items-center text-left lg:text-center">
                  <div className="text-5xl md:text-6xl font-black text-muted lg:mb-4 lg:bg-background lg:px-2">
                    <span className="text-primary">{process.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2 mt-2 lg:mt-0">{process.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium px-2">{process.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technologies Strip */}
      <section className="py-24 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground">Technology Stack We Master</h2>
          </ScrollReveal>

          <div className="space-y-12">
            {[
              { label: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
              { label: "Backend", techs: ["Node.js", "Python", "Go", "Java Spring", "PostgreSQL"] },
              { label: "Cloud & DevOps", techs: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions"] },
              { label: "AI & Data", techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Snowflake"] }
            ].map((cat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col md:flex-row md:items-center gap-6 border-b border-border pb-8 last:border-0 last:pb-0">
                <div className="w-48 shrink-0">
                  <h4 className="text-xl font-bold text-foreground">{cat.label}</h4>
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {cat.techs.map((tech, j) => (
                    <span key={j} className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <FileJson className="w-5 h-5 opacity-50" /> {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Featured Work — Large Showcase */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Development Capabilities</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl">Real-world architectures demonstrating our approach to complex technical challenges.</p>
          </ScrollReveal>

          <div className="space-y-8">
            {/* Top Large Showcase */}
            <ScrollReveal className="bg-card border border-border overflow-hidden grid lg:grid-cols-2 items-center group">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" 
                  alt="Enterprise Analytics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4 self-start">Capability Showcase</span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">Enterprise Data Intelligence Platform</h3>
                <p className="text-lg text-muted-foreground mb-8">A highly scalable analytics dashboard processing millions of rows in real-time, utilizing React, Node.js, and Snowflake data warehousing.</p>
                <Link href="/portfolio" className="text-primary font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                  View Architecture <ArrowRight />
                </Link>
              </div>
            </ScrollReveal>

            {/* Bottom 2 Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1} className="bg-card border border-border overflow-hidden group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80" 
                    alt="AI Workflow" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 self-start">Selected Concept</span>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">AI Automated Workflow</h3>
                  </div>
                  <Link href="/portfolio" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all mt-4">
                    View Detail <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="bg-card border border-border overflow-hidden group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                    alt="SaaS Platform" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 self-start">Selected Concept</span>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">Multi-Tenant SaaS Architecture</h3>
                  </div>
                  <Link href="/portfolio" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all mt-4">
                    View Detail <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Industries We Serve — Split Layout */}
      <section className="py-24 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
                alt="Global industries" 
                className="w-full aspect-[4/3] object-cover"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-sidebar-foreground mb-6">
                Industries We Transform Through Technology
              </h2>
              <p className="text-sidebar-foreground/75 text-lg mb-12">
                We bring deep domain expertise across multiple sectors, building bespoke solutions that address specific regulatory, operational, and competitive challenges.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {['Retail & E-commerce', 'Healthcare & MedTech', 'Education & EdTech', 'Financial Services', 'Real Estate', 'Manufacturing', 'Startups', 'Travel & Hospitality'].map((ind, i) => (
                  <Link key={i} href="/industries" className="flex items-center justify-between group border-b border-sidebar-border pb-4">
                    <span className="text-xl font-bold text-sidebar-foreground/90 group-hover:text-primary transition-colors">{ind}</span>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 10. Insights Preview */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <ScrollReveal>
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Latest Thinking</span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground">Engineering Insights</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Button asChild variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
                <Link href="/insights">View All Articles</Link>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} y={30} delay={i * 0.1}>
                <Link href={`/insights/${post.slug}`} className="group block bg-card h-full border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-foreground font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonials Section (Placeholder) */}
      <section className="py-24 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Client Feedback</span>
            <h2 className="text-4xl font-black text-foreground mb-16">Coming Soon</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 border-2 border-dashed border-border flex flex-col items-center justify-center opacity-50">
                <span className="text-6xl text-muted-foreground font-serif leading-none mb-4">"</span>
                <p className="text-xl font-bold text-muted-foreground mb-4">Testimonial pending</p>
                <div className="w-12 h-1 bg-border mb-4"></div>
                <p className="text-sm font-bold text-muted-foreground">Enterprise Client</p>
              </div>
              <div className="p-10 border-2 border-dashed border-border flex flex-col items-center justify-center opacity-50">
                <span className="text-6xl text-muted-foreground font-serif leading-none mb-4">"</span>
                <p className="text-xl font-bold text-muted-foreground mb-4">Testimonial pending</p>
                <div className="w-12 h-1 bg-border mb-4"></div>
                <p className="text-sm font-bold text-muted-foreground">Startup Founder</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12. CTA Banner — Full-Width Primary */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-black text-primary-foreground mb-6 tracking-tight">Ready to Build Something Extraordinary?</h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-12 max-w-3xl mx-auto">
              Partner with Optixa to engineer a scalable, high-performance digital platform that accelerates your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-sidebar text-sidebar-foreground hover:bg-background hover:text-foreground h-16 px-10 text-lg">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-16 px-10 text-lg bg-transparent">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}