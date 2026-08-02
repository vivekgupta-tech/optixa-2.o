import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { solutions } from '@/data/solutions';
import { solutionsPage } from '@/data';
import { ArrowRight, CheckCircle2, ChevronRight, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Solutions() {
  const mainSolutions = solutions.slice(0, 4);
  const additionalSolutions = solutions.slice(4);

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={solutionsPage.hero.image} 
            alt={solutionsPage.hero.imageAlt} 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              {solutionsPage.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-sidebar-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              {solutionsPage.hero.description}
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <Link href={solutionsPage.hero.btn.link}>{solutionsPage.hero.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">{solutionsPage.intro.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {solutionsPage.intro.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Solutions Zigzag */}
<section className="relative overflow-hidden bg-muted/40">
  {mainSolutions.map((solution, index) => {
    const isEven = index % 2 === 0;

    return (
      <div
        key={solution.slug}
        className="border-b border-border last:border-0 overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8 py-20 lg:py-24">
          <div
            className={cn(
              "grid lg:grid-cols-2 gap-12 xl:gap-16 items-center",
              !isEven && "lg:grid-flow-col-dense"
            )}
          >
            {/* IMAGE */}
            <ScrollReveal
              className={cn(
                "relative group",
                isEven ? "lg:col-start-1" : "lg:col-start-2"
              )}
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-[36px]
                  bg-gradient-to-br
                  from-sky-500/15
                  via-primary/10
                  to-indigo-500/15
                  translate-x-4
                  translate-y-4
                  blur-sm
                  -z-10
                  transition-all
                  duration-500
                  group-hover:translate-x-6
                  group-hover:translate-y-6
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-border/60
                  bg-background
                  shadow-[0_30px_70px_rgba(15,23,42,.16)]
                  transition-all
                  duration-500
                  group-hover:-translate-y-2
                  group-hover:shadow-[0_40px_90px_rgba(15,23,42,.20)]
                "
              >
                <img
                  src={solution.heroImage}
                  alt={solution.title}
                  className="
                    w-full
                    h-[520px]
                    lg:h-[560px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </ScrollReveal>

            {/* CONTENT */}
            <ScrollReveal
              delay={0.2}
              className={cn(
                "flex items-center",
                isEven ? "lg:col-start-2" : "lg:col-start-1"
              )}
            >
              <div className="max-w-xl">

                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-primary/10
                    px-4
                    py-1.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-primary
                    mb-5
                  "
                >
                  {solutionsPage.labels.integratedSolution}
                </span>

                <h3 className="text-3xl md:text-4xl xl:text-5xl font-black leading-tight mb-5">
                  {solution.title}
                </h3>

                <div className="space-y-3 text-base md:text-lg leading-7 text-muted-foreground mb-7">
                  <p>{solution.description}</p>

                  {solution.overview && (
                    <p>{solution.overview.substring(0, 110)}...</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-7">
                  {solution.features.slice(0, 4).map((feat, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border
                        border-border
                        bg-background
                        p-3.5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md
                      "
                    >
                      <div
                        className="
                          h-8
                          w-8
                          rounded-full
                          bg-primary/10
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {feat.title}
                        </p>

                        {feat.description && (
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {feat.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {solution.technologies && (
                  <div className="flex flex-wrap gap-2.5 mb-7">
                    {solution.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-sky-200
                          bg-sky-50
                          px-4
                          py-1.5
                          text-xs
                          font-semibold
                          text-sky-700
                          transition-all
                          duration-300
                          hover:bg-primary
                          hover:text-white
                          hover:border-primary
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <Button
                  asChild
                  className="
                    h-12
                    px-7
                    rounded-xl
                    bg-primary
                    text-white
                    hover:bg-primary/90
                  "
                >
                  <Link href={`/solutions/${solution.slug}`}>
                    {solutionsPage.labels.exploreSolution}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    );
  })}
</section>

      {/* 4. Additional solutions list */}
     <section className="relative py-24 md:py-32 bg-background overflow-hidden">
  {/* Background Blur */}
  <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

  <div className="container relative mx-auto px-4 md:px-8">
    <ScrollReveal className="text-center mb-16">
      <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary mb-5">
        Explore More
      </span>

      <h2 className="text-4xl md:text-5xl font-black text-foreground">
        {solutionsPage.labels.moreSolutionsTitle}
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
        Discover more enterprise solutions designed to simplify operations,
        improve efficiency, and accelerate business growth.
      </p>
    </ScrollReveal>

    <div className="max-w-5xl mx-auto space-y-6">
      {additionalSolutions.map((solution, i) => (
        <ScrollReveal key={solution.slug} delay={i * 0.08}>
          <Link
            href={`/solutions/${solution.slug}`}
            className="
              group
              relative
              flex
              flex-col
              md:flex-row
              items-start
              md:items-center
              gap-6
              overflow-hidden
              rounded-[30px]
              border
              border-border
              bg-card
              p-8
              shadow-[0_10px_35px_rgba(15,23,42,0.08)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#0F172A]
              hover:bg-[#0F172A]
              hover:shadow-[0_25px_60px_rgba(15,23,42,0.25)]
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <div
              className="
                relative
                flex
                h-18
                w-18
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-border
                bg-muted
                transition-all
                duration-500
                group-hover:bg-white
                group-hover:border-white
                group-hover:rotate-6
                group-hover:scale-105
              "
            >
              <Box className="h-8 w-8 text-foreground group-hover:text-[#0F172A]" />
            </div>

            {/* Content */}
            <div className="relative flex-1">
              <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                {solution.title}
              </h3>

              <p className="mt-2 text-lg leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-slate-300">
                {solution.shortDescription}
              </p>
            </div>

            {/* Arrow */}
            <div
              className="
                relative
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-muted
                transition-all
                duration-500
                group-hover:bg-primary
                group-hover:translate-x-2
                group-hover:scale-110
              "
            >
              <ChevronRight className="h-6 w-6 text-foreground group-hover:text-white" />
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>

      {/* 5. CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{solutionsPage.cta.title}</h2>
            <Button asChild size="lg" className="bg-black text-white hover:bg-background hover:text-foreground h-16 px-10 text-lg border-2 border-black">
              <Link href={solutionsPage.cta.btn.link}>{solutionsPage.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}