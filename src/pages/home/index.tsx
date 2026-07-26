import React from 'react';
import { Link } from 'wouter';
import { HeroSlider } from '@/components/common/HeroSlider';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import { insights } from '@/data/insights';
import { useState } from "react";
import {
  ArrowRight, CheckCircle2, Bot, Code2, Cloud, PenTool, Layout, Layers, Shield,
  TerminalSquare, Users, Cpu, FileJson, Gauge, Database, Smartphone, Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { home } from '@/data';

export default function Home() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  return (
    <div className="w-full">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Scrolling stats strip */}
      <section className="bg-sidebar text-sidebar-foreground py-16 border-y border-sidebar-border">
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
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left Side */}
            <div className="w-full">
              <ScrollReveal className="relative w-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary -z-10 translate-x-8 -translate-y-8" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-sidebar -z-10 -translate-x-8 translate-y-8" />

                <img
                  src={home.companyIntro.image}
                  alt={home.companyIntro.imageAlt}
                  className="w-full aspect-[4/5] md:aspect-square object-cover shadow-2xl"
                />
              </ScrollReveal>
            </div>

            {/* Right Side */}
            <div className="w-full">
              <ScrollReveal y={30} delay={0.2} className="w-full">
                <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4">
                  {home.companyIntro.subtitle}
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-8 leading-[1.1]">
                  {home.companyIntro.title}
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground mb-10">
                  {home.companyIntro.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <ul className="space-y-4 mb-10">
                  {home.companyIntro.bulletPoints.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-foreground font-semibold text-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="h-14 px-8 text-base">
                  <Link href={home.companyIntro.cta.link}>
                    {home.companyIntro.cta.text}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>







      {/* 4. Services Preview — Alternating Zigzag */}
      <section className="bg-muted/40 border-y border-border py-20 md:py-24">
        <div className="container mx-auto mb-16 px-4 text-center md:mb-20 md:px-8">
          <ScrollReveal className="flex flex-col items-center">

            <span className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary">
              {home.servicesPreview.subtitle}
            </span>

            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {home.servicesPreview.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We build scalable software, AI-powered solutions, cloud platforms, and
              digital products that help businesses innovate faster.
            </p>

          </ScrollReveal>
        </div>



        <div className="flex flex-col">
          {services.slice(0, 4).map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.slug} className="container mx-auto border-b border-border px-4 py-14 md:px-8 md:py-20 last:border-0">
                <div className={cn("grid lg:grid-cols-2 gap-6 lg:gap-8 items-center", isEven ? "" : "lg:grid-flow-col-dense")}>
                  <ScrollReveal
                    className={cn(
                      "relative",
                      isEven ? "lg:col-start-1" : "lg:col-start-2"
                    )}
                  >
                    <div className="group overflow-hidden rounded-3xl border border-border bg-background shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,.12)]">

                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-[4/3]"
                      />

                    </div>
                  </ScrollReveal>
                  <ScrollReveal
                    y={30}
                    delay={0.2}
                    className={cn(
                      "mx-auto flex w-full max-w-xl flex-col items-center justify-center text-center",
                      isEven ? "lg:col-start-2" : "lg:col-start-1"
                    )}
                  >

                    <div className="group mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                      {index === 0 ? <Bot className="h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110" /> :
                        index === 1 ? <Code2 className="h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110" /> :
                          index === 2 ? <Cloud className="h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110" /> :
                            <PenTool className="h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110" />}
                    </div>

                    <span className="mb-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                      {service.category}
                    </span>

                    <h3 className="mb-3 text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl">{service.title}</h3>
                    <div className="mb-5 w-full space-y-3 text-left text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                      <p className="font-medium text-foreground/90">{service.description}</p>
                      <p className="text-muted-foreground">{service.overview.substring(0, 150)}...</p>
                    </div>
                    <div className="mb-6 grid w-full gap-3 sm:grid-cols-2">
                      {service.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-sm font-semibold leading-5 text-foreground">{feat.title}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="group h-11 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <Link href={`/services/${service.slug}`}>
                        {home.servicesPreview.ctaText} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
          {/* Heading + Subtitle — both centered */}
          <ScrollReveal className="max-w-3xl mb-20 mx-auto text-center">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
              {home.advantages.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
              {home.advantages.title}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[<TerminalSquare />, <Gauge />, <Users />, <Layers />].map((icon, i) => {
              const item = home.advantages.items[i];
              return (
                <ScrollReveal
                  key={i}
                  y={20}
                  delay={i * 0.1}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Icon circle — centered, subtle border, gold icon */}
                  <div className="w-14 h-14 rounded-full bg-background/5 border border-white/10 flex items-center justify-center text-primary mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                    {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" }) : icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sidebar-foreground/70 text-base leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Technologies Strip */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">{home.process.title}</h2>
          </ScrollReveal>

          <div
            className="relative"
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Default thin gray line — circle centers se guzarti hai, peeche hai */}
            <div className="absolute top-7 left-0 right-0 h-px bg-border hidden lg:block z-0" />

            {/* Active gold line — same center, thicker, incremental fill */}
            <div
              className="absolute top-7 left-0 h-1 bg-primary hidden lg:block z-0 -translate-y-1/2 transition-all duration-500 ease-out"
              style={{
                width: hoveredStep !== null
                  ? `${(hoveredStep / (home.process.steps.length - 1)) * 100}%`
                  : "0%",
                opacity: hoveredStep !== null ? 1 : 0,
              }}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
              {home.process.steps.map((process, i) => {
                const isActive = hoveredStep !== null && i <= hoveredStep;
                return (
                  <ScrollReveal
                    key={i}
                    y={20}
                    delay={i * 0.1}
                    className="relative z-10 flex flex-col lg:items-center text-left lg:text-center"
                  >
                    <div
                      className="cursor-pointer flex flex-col lg:items-center"
                      onMouseEnter={() => setHoveredStep(i)}
                    >
                      {/* Gold circle — white bg line ko cover karega */}
                      <div
                        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mb-4 bg-background transition-colors duration-300 ${isActive ? "border-sidebar" : "border-primary"
                          }`}
                      >
                        <span
                          className={`text-xl font-bold transition-colors duration-300 ${isActive ? "text-sidebar" : "text-primary"
                            }`}
                        >
                          {process.step}
                        </span>
                      </div>

                      <h4
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? "text-sidebar" : "text-foreground"
                          }`}
                      >
                        {process.name}
                      </h4>
                      <p
                        className={`text-sm font-medium px-2 transition-colors duration-300 ${isActive ? "text-sidebar/70" : "text-muted-foreground"
                          }`}
                      >
                        {process.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Featured Work — Large Showcase */}
     <section className="py-24 md:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-8">

    {/* Section Heading */}
    <ScrollReveal className="mb-16 text-center flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-black text-foreground">
        {home.featuredWork.title}
      </h2>

      <p className="mt-5 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
        {home.featuredWork.subtitle}
      </p>
    </ScrollReveal>

    <div className="space-y-8">

      {/* Top Showcase */}
      <ScrollReveal
        className="relative group overflow-hidden rounded-2xl border border-border/60 bg-[#111] shadow-xl aspect-[16/9] md:aspect-[21/9]"
      >
        <img
          src={home.featuredWork.topShowcase.image}
          alt={home.featuredWork.topShowcase.imageAlt}
          className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">

          <span className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs md:text-sm font-bold uppercase tracking-widest text-white mb-5 self-start">
            {home.featuredWork.topShowcase.tag}
          </span>

          <h3 className="mb-4 text-3xl md:text-5xl font-black text-white">
            {home.featuredWork.topShowcase.title}
          </h3>

          <p className="mb-8 max-w-3xl text-base md:text-lg leading-relaxed text-white/75">
            {home.featuredWork.topShowcase.desc}
          </p>

          <Link
            href={home.featuredWork.topShowcase.link}
            className="flex items-center gap-2 text-lg font-bold text-white transition-all hover:gap-4"
          >
            {home.featuredWork.topShowcase.ctaText}
            <ArrowRight />
          </Link>

        </div>
      </ScrollReveal>

      {/* Bottom Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {home.featuredWork.bottomShowcases.map((showcase, idx) => (
          <ScrollReveal
            key={idx}
            delay={0.1 + idx * 0.1}
            className="relative group overflow-hidden rounded-2xl border border-border/60 bg-[#111] shadow-lg aspect-square md:aspect-[4/3]"
          >
            <img
              src={showcase.image}
              alt={showcase.imageAlt}
              className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">

              <span className="inline-flex items-center rounded-full bg-background/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground mb-4 self-start">
                {showcase.tag}
              </span>

              <h3 className="mb-4 text-2xl md:text-3xl font-black text-white">
                {showcase.title}
              </h3>

              <Link
                href={showcase.link}
                className="flex items-center gap-2 font-bold text-primary transition-all hover:gap-4"
              >
                {showcase.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* 9. Industries We Serve — Split Layout */}
    <section className="py-20 bg-sidebar text-sidebar-foreground">
  <div className="container mx-auto px-4 md:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Image */}
      <ScrollReveal>
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={home.industries.image}
            alt={home.industries.imageAlt}
            className="w-full aspect-[4/3] object-cover opacity-90 transition-transform duration-700 hover:scale-105"
          />
        </div>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal delay={0.2}>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
          {home.industries.title}
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
          {home.industries.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {home.industries.items.map((ind, i) => (
            <Link
              key={i}
              href={home.industries.link}
              className="flex items-center justify-between group border-b border-white/10 pb-3"
            >
              <span className="text-lg md:text-xl font-semibold text-sidebar-foreground/70 group-hover:text-primary-foreground transition-colors duration-300">
                {ind}
              </span>

              <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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
          {/* Section Heading */}
          <div className="mb-16">
            <ScrollReveal className="text-center">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
                {home.insightsPreview.subtitle}
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                {home.insightsPreview.title}
              </h2>
            </ScrollReveal>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {insights.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} y={30} delay={i * 0.1}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group block h-full bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 rounded-full bg-primary text-primary-foreground text-xs font-bold px-4 py-2 uppercase tracking-wider shadow-lg">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-7">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 font-bold text-foreground group-hover:text-primary transition-all duration-300">
                      {home.insightsPreview.readArticleText}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">{home.testimonials.subtitle}</span>
            <h2 className="text-4xl font-black text-foreground mb-16">{home.testimonials.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {home.testimonials.items.map((item, idx) => (
                <div key={idx} className="p-10 border-2 border-dashed border-border flex flex-col items-center justify-center opacity-50">
                  <span className="text-6xl text-sidebar-foreground/70 font-serif leading-none mb-4">"</span>
                  <p className="text-xl font-bold text-muted-foreground mb-4">{item.text}</p>
                  <div className="w-12 h-1 bg-muted mb-4"></div>
                  <p className="text-sm font-bold text-muted-foreground">{item.author}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12. CTA Banner — Full-Width Primary */}
      <section className="relative overflow-hidden bg-primary py-20">

        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              {home.ctaBanner.title}
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
              {home.ctaBanner.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-black px-8 hover:bg-white hover:text-black"
              >
                <Link href={home.ctaBanner.primaryBtn.link}>
                  {home.ctaBanner.primaryBtn.text}
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="relative z-20 rounded-xl border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-black"
              >
                <Link href={home.ctaBanner.secondaryBtn.link}>
                  {home.ctaBanner.secondaryBtn.text}
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

      </section>
    </div>
  );
}   