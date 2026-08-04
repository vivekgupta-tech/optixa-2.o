import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { ArrowRight, Target, Eye, Users, RefreshCw, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { about } from '@/data';

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* 1. Hero Banner matching Portfolio page height, width, dark overlay & typography */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-black text-white">
        {/* Full-bleed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${about.hero.image})` }}
        />

        {/* Dark Overlay matching Portfolio Banner */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Main Banner Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl text-left pl-2 md:pl-6">
            {/* Main Title: Heavy Bold White Typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 uppercase drop-shadow-md">
              About Us
            </h1>

            {/* Breadcrumb Navigation: HOME / PAGES / ABOUT US */}
            <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold tracking-widest uppercase text-white/80">
              <Link href="/" className="hover:text-primary transition-colors text-white/90">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white/90">Pages</span>
              <span className="text-white/40">/</span>
              <span className="text-primary font-extrabold">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome Section matching reference screenshot */}
      <section className="pt-14 pb-12 md:pt-18 md:pb-14 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ScrollReveal className="text-left">
            {/* Welcome Heading - Larger & Bold */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-foreground tracking-tight leading-tight mb-3">
              Welcome to Optixa – The Best Software Development Company
            </h2>
            
            {/* Decorative Underline Bar */}
            <div className="w-24 h-[3.5px] bg-slate-400/80 mb-6 rounded-full" />

            {/* Content Paragraphs - Larger font & light gray color */}
            <div className="space-y-5 text-base md:text-[17px] text-muted-foreground font-normal leading-relaxed md:leading-8">
              <p>
                At <strong className="text-foreground font-bold">Optixa</strong>, we are dedicated to delivering a wide range of innovative and tailored software solutions to help businesses thrive in the digital age. As the best software company, we specialize in Website Design, ensuring your online presence is both visually appealing and highly functional. Our Enterprise Resource Planning (ERP) solutions streamline business operations, allowing for increased efficiency and productivity. We also offer cutting-edge Android Application Development to give your business a competitive edge in the mobile-first world.
              </p>
              <p>
                With our expertise in Search Engine Optimization (SEO), we ensure your website ranks higher on search engines, driving traffic and generating leads. Our Digital Marketing & Web Promotions services enhance your brand visibility across multiple online platforms, ensuring targeted outreach. Additionally, our comprehensive Branding Solutions help your business build a strong identity that resonates with your audience. Whether you need custom software, ERP systems, or a robust digital marketing strategy, Optixa is your one-stop solution for all your business needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Mission, Vision & Experience Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold">
              WHO WE ARE
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-foreground">
              Mission, Vision & Experience
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              We build future-ready digital solutions with innovation, transparency and long-term partnerships.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission */}
            <ScrollReveal>
              <div className="group h-[320px] rounded-[36px] bg-sidebar border border-sidebar/20 shadow-xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:bg-primary hover:border-primary hover:shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110">
                  <Target className="w-7 h-7" />
                </div>
                <span className="mt-6 uppercase tracking-[0.25em] text-primary text-xs font-bold transition-colors duration-300 group-hover:text-white">
                  {about.missionVision.mission.subtitle}
                </span>
                <h3 className="mt-4 text-3xl font-black text-white transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="mt-5 text-base leading-7 text-white/80 flex-1 transition-colors duration-300 group-hover:text-white/90">
                  {about.missionVision.mission.text}
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={0.1}>
              <div className="group h-[320px] rounded-[36px] bg-card border border-border shadow-xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:bg-sidebar hover:border-primary hover:shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="mt-6 uppercase tracking-[0.25em] text-primary text-xs font-bold">
                  {about.missionVision.vision.subtitle}
                </span>
                <h3 className="mt-4 text-3xl font-black text-foreground transition-colors duration-300 group-hover:text-white">
                  Our Vision
                </h3>
                <p className="mt-5 text-base leading-7 text-muted-foreground flex-1 transition-colors duration-300 group-hover:text-white/80">
                  {about.missionVision.vision.text}
                </p>
              </div>
            </ScrollReveal>

            {/* Experience */}
            <ScrollReveal delay={0.2}>
              <div className="group h-[320px] rounded-[36px] bg-primary text-primary-foreground shadow-xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:bg-sidebar hover:shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className="mt-6 uppercase tracking-[0.3em] text-xs font-bold opacity-90">
                  EXPERIENCE
                </span>
                <h2 className="mt-4 text-6xl font-black transition-colors duration-300 group-hover:text-primary">
                  10+
                </h2>
                <p className="mt-2 text-xl font-bold transition-colors duration-300 group-hover:text-white">
                  Years of Excellence
                </p>
                <div className="flex-1" />
                <div className="border-t border-white/20 pt-5 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-black">500+</p>
                    <p className="text-sm opacity-90">Successful Projects</p>
                  </div>
                  <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-12 md:py-16 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Core Values
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-black text-foreground">
              {about.values.title}
            </h2>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              {about.values.description}
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              <Target key="target" className="w-10 h-10" />,
              <Eye key="eye" className="w-10 h-10" />,
              <Zap key="zap" className="w-10 h-10" />,
              <RefreshCw key="refresh" className="w-10 h-10" />,
              <Users key="users" className="w-10 h-10" />,
              <Shield key="shield" className="w-10 h-10" />,
            ].map((icon, i) => {
              const value = about.values.items[i];
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="group rounded-[32px] border border-border bg-card p-8 md:p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-sidebar hover:border-primary/40 hover:shadow-2xl">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                      <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                        {icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-black text-foreground mb-4 transition-colors duration-300 group-hover:text-white">
                          {value.title}
                        </h3>
                        <p className="text-lg leading-8 text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                          {value.text}
                        </p>
                      </div>
                      <div className="hidden md:flex w-14 h-14 rounded-full bg-muted items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-sidebar group-hover:translate-x-2">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>


      {/* 6. CTA Section */}
      <section className="py-20 bg-sidebar text-sidebar-foreground text-center border-t border-border/20">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{about.cta.title}</h2>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-white hover:text-sidebar h-16 px-10 text-lg font-bold"
            >
              <Link href={about.cta.btn.link}>{about.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}