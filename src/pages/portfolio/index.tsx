import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { portfolio } from '@/data';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEPLOY_LOG = [
  { text: '$ nexora deploy --env production', delay: 35 },
  { text: '✓ Build compiled in 4.2s', delay: 20, dim: true },
  { text: '✓ 128/128 tests passed', delay: 20, dim: true },
  { text: '✓ Deployed to 12 edge regions', delay: 20, dim: true },
  { text: '✓ Live at 99.98% uptime', delay: 20, accent: true },
];

function DeployTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= DEPLOY_LOG.length) {
      const reset = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setDone(false);
      }, 2200);
      return () => clearTimeout(reset);
    }
    const current = DEPLOY_LOG[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), current.delay);
      return () => clearTimeout(t);
    }
    const next = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
      if (lineIndex === DEPLOY_LOG.length - 1) setDone(true);
    }, 450);
    return () => clearTimeout(next);
  }, [lineIndex, charIndex]);

  return (
    <div className="rounded-md border border-white/10 bg-black/40 overflow-hidden font-mono text-sm shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/40 text-xs tracking-wider">production — zsh</span>
      </div>
      <div className="p-5 min-h-[220px] flex flex-col justify-center gap-2.5">
        {DEPLOY_LOG.slice(0, lineIndex).map((line, i) => (
          <div
            key={i}
            className={cn(
              'text-white/50',
              line.accent && 'text-primary',
              !line.dim && !line.accent && 'text-white'
            )}
          >
            {line.text}
          </div>
        ))}
        {lineIndex < DEPLOY_LOG.length && (
          <div
            className={cn(
              DEPLOY_LOG[lineIndex].accent
                ? 'text-primary'
                : DEPLOY_LOG[lineIndex].dim
                ? 'text-white/50'
                : 'text-white'
            )}
          >
            {DEPLOY_LOG[lineIndex].text.slice(0, charIndex)}
            <span className="inline-block w-[7px] h-[15px] bg-primary/80 ml-0.5 align-middle animate-pulse" />
          </div>
        )}
        {done && lineIndex >= DEPLOY_LOG.length && (
          <div className="text-primary">✓ Live at 99.98% uptime</div>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="w-full bg-background">
      {/* 1. Hero — split layout, schematic panel replaces the dim photo */}
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-32 bg-sidebar text-sidebar-foreground overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
                  {portfolio.hero.subtitle}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[0.95]">
                {portfolio.hero.title}
              </h1>
              {portfolio.hero.description && (
                <p className="text-lg text-sidebar-foreground/60 max-w-xl mb-10 leading-relaxed">
                  {portfolio.hero.description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-white hover:text-sidebar h-14 px-8 text-base"
                >
                  <Link href={portfolio.showcaseBtn.link}>{portfolio.showcaseBtn.text}</Link>
                </Button>
                <Link
                  href="/contact"
                  className="font-mono text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Talk to us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Signature element — a live deploy terminal, animated on load */}
            <ScrollReveal delay={0.15} className="relative hidden lg:block">
              <DeployTerminal />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Intro — pull-quote style */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary block mb-4">// about</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 leading-tight">
              {portfolio.intro.title}
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-6">
              <p>{portfolio.intro.paragraphs[0]}</p>
              <p>{portfolio.intro.paragraphs[1]}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Capability showcases — alternating split layout, threaded signal line */}
      <section className="relative py-8 bg-background">
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 md:px-8 flex flex-col gap-24 py-16">
          {portfolio.showcases.map((showcase, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={i}
                className={cn(
                  'grid lg:grid-cols-2 gap-12 items-center',
                  reversed && 'lg:[&>*:first-child]:order-2'
                )}
              >
                <ScrollReveal>
                  <img
                    src={showcase.img}
                    alt={showcase.title}
                    className="w-full aspect-[4/3] object-cover rounded-sm"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <span className="font-mono text-xs tracking-widest text-primary block mb-4">
                    [ {String(i + 1).padStart(2, '0')} ] {showcase.tag}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 tracking-tight">
                    {showcase.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{showcase.desc}</p>

                  <div className="space-y-3 mb-10">
                    {showcase.bullets.map((bullet, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-base font-medium text-foreground">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild size="lg" variant="outline" className="h-12 px-6">
                    <Link href={portfolio.showcaseBtn.link}>{portfolio.showcaseBtn.text}</Link>
                  </Button>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Process — connected trace instead of plain circles */}
      <section className="py-24 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16 text-center">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary block mb-4">// process</span>
            <h2 className="text-3xl font-black text-foreground">{portfolio.process.title}</h2>
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" aria-hidden="true" />
            <div className="grid md:grid-cols-4 gap-8">
              {portfolio.process.steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-primary text-primary font-black text-xl flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-lg text-foreground">{step}</h4>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.4} className="mt-12 text-center">
            <Link
              href={portfolio.process.viewFullLink.link}
              className="text-primary font-bold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all"
            >
              {portfolio.process.viewFullLink.text} <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Advantage — split layout retained, mono labels added */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="relative">
              <img
                src={portfolio.advantage.image}
                alt={portfolio.advantage.imageAlt}
                className="w-full aspect-[4/3] object-cover rounded-sm shadow-xl"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary block mb-4">
                {portfolio.advantage.subtitle}
              </span>
              <h2 className="text-4xl font-black text-foreground mb-8">{portfolio.advantage.title}</h2>
              <p className="text-xl text-muted-foreground mb-10">{portfolio.advantage.description}</p>

              <div className="space-y-6">
                {portfolio.advantage.items.map((adv, i) => (
                  <div key={i} className="flex gap-4 border-b border-border pb-6 last:border-0 last:pb-0">
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

      {/* 6. CTA — subtle grid backdrop instead of flat dark panel */}
      <section className="relative py-24 bg-sidebar text-sidebar-foreground text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary block mb-4">
              // let's build
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{portfolio.cta.title}</h2>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-background hover:text-foreground h-16 px-10 text-lg"
            >
              <Link href={portfolio.cta.btn.link}>{portfolio.cta.btn.text}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}