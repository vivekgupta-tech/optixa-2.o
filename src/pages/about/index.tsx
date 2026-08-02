import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { ArrowRight, Target, Eye, Users, RefreshCw, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { about } from '@/data';

export default function About() {

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={about.hero.image} 
            alt={about.hero.imageAlt} 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">{about.hero.subtitle}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 max-w-4xl leading-[1.1] tracking-tight">
              {about.hero.title}
            </h1>
            <p className="text-xl text-sidebar-foreground/70 mb-12 max-w-2xl leading-relaxed">
              {about.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href={about.hero.primaryBtn.link}>{about.hero.primaryBtn.text}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-white text-white hover:bg-background hover:text-foreground bg-transparent">
                <Link href={about.hero.secondaryBtn.link}>{about.hero.secondaryBtn.text}</Link>
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} className="absolute bottom-12 left-4 md:left-8 animate-bounce">
            <ArrowRight className="w-8 h-8 text-sidebar-foreground rotate-90" />
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Company Story — Image Right, Text Left */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: about.story.title }}>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                {about.story.paragraphs.slice(0, 2).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 text-2xl font-bold text-foreground italic">
                  {about.story.quote}
                </blockquote>
                {about.story.paragraphs.slice(2).map((p, i) => (
                  <p key={i + 2}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="order-1 lg:order-2 relative">
              <div className="absolute top-0 right-0 w-full h-full bg-muted translate-x-4 translate-y-4 -z-10" />
              <img 
                src={about.story.image} 
                alt={about.story.imageAlt} 
                className="w-full aspect-[4/5] object-cover border border-border"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision — Split Dark Section */}

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
        We build future-ready digital solutions with innovation,
        transparency and long-term partnerships.
      </p>
    </ScrollReveal>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Mission */}
      <ScrollReveal>
        <div
          className="
            group
            h-[320px]
            rounded-[36px]
            bg-sidebar
            border
            border-sidebar/20
            shadow-xl
            p-8
            flex
            flex-col
            transition-all
            duration-500
            hover:-translate-y-2
            hover:bg-primary
            hover:border-primary
            hover:shadow-2xl
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-primary/10
              flex
              items-center
              justify-center
              text-primary
              transition-all
              duration-300
              group-hover:bg-white/20
              group-hover:text-white
              group-hover:scale-110
            "
          >
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
        <div
          className="
            group
            h-[320px]
            rounded-[36px]
            bg-card
            border
            border-border
            shadow-xl
            p-8
            flex
            flex-col
            transition-all
            duration-500
            hover:-translate-y-2
            hover:bg-sidebar
            hover:border-primary
            hover:shadow-2xl
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-primary/10
              flex
              items-center
              justify-center
              text-primary
              transition-all
              duration-300
              group-hover:bg-primary
              group-hover:text-white
              group-hover:scale-110
            "
          >
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
        <div
          className="
            group
            h-[320px]
            rounded-[36px]
            bg-primary
            text-primary-foreground
            shadow-xl
            p-8
            flex
            flex-col
            transition-all
            duration-500
            hover:-translate-y-2
            hover:bg-sidebar
            hover:shadow-2xl
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-white/15
              flex
              items-center
              justify-center
              transition-all
              duration-300
              group-hover:bg-primary
            "
          >
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
              <p className="text-2xl font-black">
                500+
              </p>

              <p className="text-sm opacity-90">
                Successful Projects
              </p>
            </div>

            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />

          </div>

        </div>
      </ScrollReveal>

    </div>

  </div>
</section>

      {/* 4. Core Values — Large Icon Sections (not cards) */}
<section className="py-24 md:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-8">

    {/* Heading */}
    <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">

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

    {/* Cards */}
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

          <ScrollReveal
            key={i}
            delay={i * 0.08}
          >

            <div
              className="
                group
                rounded-[32px]
                border
                border-border
                bg-card
                p-8
                md:p-10
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-sidebar
                hover:border-primary/40
                hover:shadow-2xl
              "
            >

              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">

                {/* Icon */}
                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-primary/10
                    text-primary
                    flex
                    items-center
                    justify-center
                    shrink-0
                    transition-all
                    duration-300
                    group-hover:bg-primary
                    group-hover:text-white
                    group-hover:scale-110
                  "
                >
                  {icon}
                </div>

                {/* Content */}
                <div className="flex-1">

                  <h3
                    className="
                      text-3xl
                      font-black
                      text-foreground
                      mb-4
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {value.title}
                  </h3>

                  <p
                    className="
                      text-lg
                      leading-8
                      text-muted-foreground
                      transition-colors
                      duration-300
                      group-hover:text-white/80
                    "
                  >
                    {value.text}
                  </p>

                </div>

                {/* Arrow */}
                <div
                  className="
                    hidden
                    md:flex
                    w-14
                    h-14
                    rounded-full
                    bg-muted
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-sidebar
                    group-hover:translate-x-2
                  "
                >
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
      {/* 5. Startup Timeline — Vertical Timeline */}
     <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
  <div className="container mx-auto px-4 md:px-8">

    {/* Heading */}
    <ScrollReveal className="mb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-black text-foreground">
        {about.timeline.title}
      </h2>
    </ScrollReveal>

    <div className="max-w-5xl mx-auto relative">

      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[3px] bg-border md:-translate-x-1/2" />

      {about.timeline.nodes.map((node, i) => {
        const isEven = i % 2 === 0;

        return (
          <ScrollReveal
            key={i}
            delay={0.1}
            className="relative flex items-center mb-24 last:mb-0"
          >
            {/* LEFT */}
            <div
              className={cn(
                "hidden md:flex w-1/2 pr-20 justify-end",
                !isEven && "invisible"
              )}
            >
              <div className="max-w-sm text-right">
                <h4 className="text-2xl lg:text-3xl font-black text-foreground mb-4">
                  {node.title}
                </h4>

                <p className="text-lg leading-8 text-muted-foreground">
                  {node.desc}
                </p>
              </div>
            </div>

            {/* TIMELINE NODE */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-primary
                  border-4
                  border-background
                  shadow-xl
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  cursor-pointer
                  hover:bg-sidebar
                  hover:scale-110
                "
              >
                <span className="text-white font-black text-xl">
                  {node.year}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className={cn(
                "w-full md:w-1/2 pl-24 md:pl-20",
                isEven && "md:invisible"
              )}
            >
              <div className="max-w-sm">
                <h4 className="text-2xl lg:text-3xl font-black text-foreground mb-4">
                  {node.title}
                </h4>

                <p className="text-lg leading-8 text-muted-foreground">
                  {node.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  </div>
</section>

   {/* 6. How We Work */}
<section className="py-24 md:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-8">

    {/* Heading */}
    <ScrollReveal className="mb-24 text-center max-w-3xl mx-auto">
      <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-primary text-sm font-semibold uppercase tracking-[0.3em]">
        Process
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-black text-foreground">
        {about.operations.title}
      </h2>

      <p className="mt-6 text-xl text-muted-foreground leading-8">
        Every project follows a structured workflow that keeps quality,
        transparency and delivery at the highest level.
      </p>
    </ScrollReveal>

    <div className="space-y-32">

      {about.operations.rows.map((row, i) => {

        const isEven = i % 2 === 0;

        return (

          <div
            key={i}
            className={cn(
              "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
              !isEven && "lg:grid-flow-col-dense"
            )}
          >

            {/* TEXT */}
            <ScrollReveal
              className={cn(
                isEven ? "lg:col-start-1" : "lg:col-start-2"
              )}
            >

              <div className="h-[420px] md:h-[520px] flex items-center justify-center">

                <div className="max-w-lg w-full">

                  {/* Number */}
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-2xl font-black">
                      {row.num}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-4xl md:text-5xl font-black leading-tight text-foreground mb-8">
                    {row.title}
                  </h3>

                  {/* Paragraph */}
                  <p className="text-left text-lg md:text-xl leading-9 text-muted-foreground">
                    {row.desc}
                  </p>

                </div>

              </div>

            </ScrollReveal>

            {/* IMAGE */}
            <ScrollReveal
              delay={0.2}
              className={cn(
                isEven ? "lg:col-start-2" : "lg:col-start-1"
              )}
            >

              <div className="group h-[420px] md:h-[520px] overflow-hidden rounded-[32px] shadow-xl">

                <img
                  src={row.img}
                  alt={row.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

            </ScrollReveal>

          </div>

        );

      })}

    </div>

  </div>
</section>  
      {/* 7. Work Culture — Full-Width Image Section */}
      <section className="relative py-32 md:py-48 bg-sidebar text-sidebar-foreground">
        <div className="absolute inset-0">
          <img 
            src={about.culture.image} 
            alt={about.culture.imageAlt} 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-12">{about.culture.title}</h2>
            <div className="space-y-6">
              {about.culture.points.map((pt, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-2xl text-sidebar-foreground font-medium">{pt}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-background hover:text-foreground bg-transparent">
                <Link href={about.culture.btn.link}>{about.culture.btn.text}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. CTA — Primary Strip */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-white mb-8">{about.cta.title}</h2>
            <Button asChild size="lg" className="bg-black text-white hover:bg-background hover:text-foreground h-16 px-10 text-lg">
              <Link href={about.cta.btn.link}>{about.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}