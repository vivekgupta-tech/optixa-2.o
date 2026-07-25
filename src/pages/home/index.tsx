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
import { home } from '@/data';

export default function Home() {

  return (
    <div className="w-full">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Scrolling stats strip */}
      <section className="bg-[#111111] py-16 border-y border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {home.stats.map((stat, i) => (
              <ScrollReveal key={i} y={20} delay={i * 0.1}>
                <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{stat.value}</p>
                <p className="text-primary font-bold uppercase tracking-wider text-sm">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Company Intro — Split Layout */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary -z-10 translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 left-0 w-48 h-48 border-4 border-gray-100 -z-10 -translate-x-8 translate-y-8" />
              <img 
                src={home.companyIntro.image} 
                alt={home.companyIntro.imageAlt} 
                className="w-full aspect-[4/5] md:aspect-square object-cover shadow-2xl"
              />
            </ScrollReveal>
            
            <ScrollReveal y={30} delay={0.2}>
              <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4">
                {home.companyIntro.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black mb-8 leading-[1.1]">
                {home.companyIntro.title}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 mb-10">
                {home.companyIntro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              
              <ul className="space-y-4 mb-10">
                {home.companyIntro.bulletPoints.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-black font-semibold text-lg">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href={home.companyIntro.cta.link}>
                  {home.companyIntro.cta.text} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Services Preview — Alternating Zigzag */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8 mb-20 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">{home.servicesPreview.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-black text-black">{home.servicesPreview.title}</h2>
          </ScrollReveal>
        </div>

        <div className="flex flex-col">
          {services.slice(0, 4).map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.slug} className="container mx-auto px-4 md:px-8 py-16 md:py-24 border-b border-gray-200 last:border-0">
                <div className={cn("grid lg:grid-cols-2 gap-16 items-center", isEven ? "" : "lg:grid-flow-col-dense")}>
                  <ScrollReveal className={cn("relative", isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    <img 
                      src={service.heroImage} 
                      alt={service.title} 
                      className="w-full aspect-video md:aspect-[4/3] object-cover shadow-xl"
                    />
                  </ScrollReveal>
                  
                  <ScrollReveal y={30} delay={0.2} className={cn(isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-8">
                      {index === 0 ? <Bot className="w-8 h-8 text-primary" /> :
                       index === 1 ? <Code2 className="w-8 h-8 text-primary" /> :
                       index === 2 ? <Cloud className="w-8 h-8 text-primary" /> :
                       <PenTool className="w-8 h-8 text-primary" />}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-black mb-6">{service.title}</h3>
                    <div className="space-y-4 text-gray-600 text-lg mb-8">
                      <p>{service.description}</p>
                      <p>{service.overview.substring(0, 150)}...</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {service.features.slice(0,4).map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="font-semibold text-gray-900">{feat.title}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white">
                      <Link href={`/services/${service.slug}`}>
                        {home.servicesPreview.ctaText} <ArrowRight className="w-5 h-5 ml-2" />
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
      <section className="py-24 md:py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-3xl mb-20">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">{home.advantages.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              {home.advantages.title}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[<TerminalSquare />, <Gauge />, <Users />, <Layers />].map((icon, i) => {
              const item = home.advantages.items[i];
              return (
              <ScrollReveal key={i} y={20} delay={i * 0.1} className="group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                  {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" }) : icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Development Process — Numbered Timeline */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-black">{home.process.title}</h2>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
              {home.process.steps.map((process, i) => (
                <ScrollReveal key={i} y={20} delay={i * 0.1} className="relative z-10 flex flex-col lg:items-center text-left lg:text-center">
                  <div className="text-5xl md:text-6xl font-black text-gray-100 lg:mb-4 lg:bg-white lg:px-2">
                    <span className="text-primary">{process.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2 mt-2 lg:mt-0">{process.name}</h4>
                  <p className="text-sm text-gray-500 font-medium px-2">{process.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technologies Strip */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">{home.technologies.title}</h2>
          </ScrollReveal>

          <div className="space-y-12">
            {home.technologies.categories.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col md:flex-row md:items-center gap-6 border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <div className="w-48 shrink-0">
                  <h4 className="text-xl font-bold text-gray-900">{cat.label}</h4>
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {cat.techs.map((tech, j) => (
                    <span key={j} className="text-lg font-semibold text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
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
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black">{home.featuredWork.title}</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl">{home.featuredWork.subtitle}</p>
          </ScrollReveal>

          <div className="space-y-8">
            {/* Top Large Showcase */}
            <ScrollReveal className="relative group overflow-hidden bg-[#111] aspect-[16/9] md:aspect-[21/9]">
              <img 
                src={home.featuredWork.topShowcase.image} 
                alt={home.featuredWork.topShowcase.imageAlt} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                <span className="inline-block px-4 py-1.5 bg-primary text-white text-sm font-bold tracking-widest uppercase mb-4 self-start">{home.featuredWork.topShowcase.tag}</span>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4">{home.featuredWork.topShowcase.title}</h3>
                <p className="text-lg text-gray-300 max-w-3xl mb-8">{home.featuredWork.topShowcase.desc}</p>
                <Link href={home.featuredWork.topShowcase.link} className="text-white font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                  {home.featuredWork.topShowcase.ctaText} <ArrowRight />
                </Link>
              </div>
            </ScrollReveal>

            {/* Bottom 2 Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-8">
              {home.featuredWork.bottomShowcases.map((showcase, idx) => (
                <ScrollReveal key={idx} delay={0.1 + (idx * 0.1)} className="relative group overflow-hidden bg-[#111] aspect-square md:aspect-[4/3]">
                  <img 
                    src={showcase.image} 
                    alt={showcase.imageAlt} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold tracking-widest uppercase mb-4 self-start">{showcase.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{showcase.title}</h3>
                    <Link href={showcase.link} className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      {showcase.ctaText} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Industries We Serve — Split Layout */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img 
                src={home.industries.image} 
                alt={home.industries.imageAlt} 
                className="w-full aspect-[4/3] object-cover opacity-80"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                {home.industries.title}
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                {home.industries.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {home.industries.items.map((ind, i) => (
                  <Link key={i} href={home.industries.link} className="flex items-center justify-between group border-b border-white/10 pb-4">
                    <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">{ind}</span>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 10. Insights Preview */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <ScrollReveal>
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">{home.insightsPreview.subtitle}</span>
              <h2 className="text-4xl md:text-5xl font-black text-black">{home.insightsPreview.title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Button asChild variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white">
                <Link href={home.insightsPreview.link}>{home.insightsPreview.ctaText}</Link>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} y={30} delay={i * 0.1}>
                <Link href={`/insights/${post.slug}`} className="group block bg-white h-full shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-black font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                      {home.insightsPreview.readArticleText} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonials Section (Placeholder) */}
      <section className="py-24 bg-white border-t border-gray-200 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">{home.testimonials.subtitle}</span>
            <h2 className="text-4xl font-black text-black mb-16">{home.testimonials.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {home.testimonials.items.map((item, idx) => (
                <div key={idx} className="p-10 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center opacity-50">
                  <span className="text-6xl text-gray-300 font-serif leading-none mb-4">"</span>
                  <p className="text-xl font-bold text-gray-400 mb-4">{item.text}</p>
                  <div className="w-12 h-1 bg-gray-200 mb-4"></div>
                  <p className="text-sm font-bold text-gray-400">{item.author}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12. CTA Banner — Full-Width Red */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">{home.ctaBanner.title}</h2>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto">
              {home.ctaBanner.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-black text-white hover:bg-white hover:text-black h-16 px-10 text-lg">
                <Link href={home.ctaBanner.primaryBtn.link}>{home.ctaBanner.primaryBtn.text}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black h-16 px-10 text-lg bg-transparent">
                <Link href={home.ctaBanner.secondaryBtn.link}>{home.ctaBanner.secondaryBtn.text}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}