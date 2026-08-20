import React, { useState } from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import { servicesList } from '@/data';
import {
  ArrowRight, CheckCircle2, ChevronDown, ChevronRight,
  Bot, Code2, Layout, Cloud, Smartphone, PenTool,
  Zap, Shield, Award, Users, TrendingUp, Globe,
  Clock, Star, Mail, Calendar, Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Icon map ──────────────────────────────────────────────────────── */
const SvcIcon: Record<string, React.ReactNode> = {
  Bot:        <Bot className="w-6 h-6" />,
  Code2:      <Code2 className="w-6 h-6" />,
  Layout:     <Layout className="w-6 h-6" />,
  Cloud:      <Cloud className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  PenTool:    <PenTool className="w-6 h-6" />,
};

/* ─── Fresh image map ───────────────────────────────────────────────── */
const serviceImages: Record<string, string> = {
  'ai-automation':      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
  'custom-software':    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
  'web-applications':   'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=900&q=80',
  'cloud-engineering':  'https://images.unsplash.com/photo-1667984390527-850f63192709?auto=format&fit=crop&w=900&q=80',
  'mobile-applications':'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=80',
  'ui-ux-design':       'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80',
};

/* ─── Accent colours per service ───────────────────────────────────── */
const accentColors: Record<string, string> = {
  'ai-automation':      '#7C3AED',
  'custom-software':    '#0EA5E9',
  'web-applications':   '#10B981',
  'cloud-engineering':  '#F59E0B',
  'mobile-applications':'#EF4444',
  'ui-ux-design':       '#EC4899',
};

/* ─── Why-us cards ──────────────────────────────────────────────────── */
const whyCards = [
  { icon: <Award className="w-5 h-5" />,     title: '10+ Years Experience',      desc: '300+ projects delivered across 18 industries, from seed-stage startups to Fortune 500 enterprises.' },
  { icon: <Shield className="w-5 h-5" />,    title: 'Security by Default',       desc: 'Every system is built on zero-trust principles, OWASP standards, and passes a third-party security audit before go-live.' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'ROI-First Mindset',        desc: 'Measurable success metrics are defined before code is written. We report against KPIs every week.' },
  { icon: <Users className="w-5 h-5" />,     title: 'Dedicated Engineering Squad',desc: 'You get a named team — architect, tech lead, PM — not an anonymous ticket queue.' },
  { icon: <Globe className="w-5 h-5" />,     title: 'Global Scale Architecture', desc: 'Systems designed for millions of concurrent users from day one, with multi-region failover built in.' },
  { icon: <Clock className="w-5 h-5" />,     title: '94% On-Time Delivery',      desc: 'Agile sprints with weekly live demos keep scopes honest and delivery dates real.' },
];

/* ─── FAQ ───────────────────────────────────────────────────────────── */
const faqs = [
  { q: 'Do you offer full-cycle development from idea to production?', a: 'Yes. Strategy, UX, architecture, engineering, cloud deployment, and ongoing DevOps — all under one roof.' },
  { q: 'How do you price your services?', a: 'Fixed-bid for well-defined scopes; monthly dedicated squad retainers for evolving, agile requirements.' },
  { q: 'Who owns the intellectual property and source code?', a: 'You do — 100%. All source code, designs, and IP are legally transferred on final payment.' },
  { q: 'Can you rescue an existing failing project?', a: 'Yes. We audit failing codebases, stabilize the architecture, and execute a structured modernization plan.' },
  { q: 'How do you handle integrations with our existing systems?', a: 'We build custom API layers, ETL pipelines, and middleware connectors bridging modern apps to legacy ERPs, CRMs, and SaaS tools.' },
  { q: 'What happens after the project launches?', a: 'SLA-backed retainers cover monitoring, security patches, and continuous feature development. Launch is the start, not the end.' },
];

/* ══════════════════════════════════════════════════════════════════════ */
export default function ServicesList() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const current = services[active];
  const img = serviceImages[current?.slug] ?? current?.heroImage;
  const accent = accentColors[current?.slug] ?? 'hsl(29 60% 56%)';

  return (
    <div className="svl-page">

      {/* ════════════════════════════════════════
          1. HERO
         ════════════════════════════════════════ */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={servicesList.hero.image}
            alt={servicesList.hero.imageAlt}
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sidebar/95 via-sidebar/80 to-transparent" />
          {/* grid */}
          <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'60px 60px'}} />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="svl-badge">
              <span className="svl-badge-dot" />
              End-to-End Technology Services
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.06]">
              {servicesList.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-sidebar-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              {servicesList.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-base bg-primary text-white hover:bg-white hover:text-foreground transition-all">
                <Link href={servicesList.hero.btn.link}>{servicesList.hero.btn.text}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-white/25 bg-white/08 text-white hover:bg-white/15 backdrop-blur-sm">
                <Link href="/portfolio"><Eye className="mr-2 w-4 h-4" />View Our Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. INTRO
         ════════════════════════════════════════ */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">

          {/* ── Centered heading block ── */}
          <ScrollReveal className="text-center mb-14">
            <div className="svl-tag">Our Engineering Philosophy</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight max-w-3xl mx-auto">
              {servicesList.intro.title}
            </h2>
          </ScrollReveal>

          {/* ── Stats row ── */}
          <ScrollReveal delay={0.1} className="svl-intro-stats">
            {[
              { num: '300+',  lbl: 'Projects Delivered' },
              { num: '18',    lbl: 'Industries Served'  },
              { num: '10+',   lbl: 'Years of Expertise' },
              { num: '98%',   lbl: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.lbl} className="svl-intro-stat">
                <span className="svl-intro-stat-num">{s.num}</span>
                <span className="svl-intro-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </ScrollReveal>

          {/* ── Body paragraphs ── */}
          <ScrollReveal delay={0.2} className="svl-intro-body">
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              {servicesList.intro.description}
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed mb-8">
              Every engagement starts with understanding your business model and
              the outcomes you need — then we architect the right technical
              solution, not the most technically impressive one. We pair deep
              domain expertise with pragmatic engineering to deliver systems that
              scale with your ambitions and stay maintainable long after launch.
            </p>

            {/* highlight pills */}
            <div className="svl-intro-pills">
              {[
                'Outcome-Driven Engineering',
                'Agile & Transparent',
                'Zero-Trust Security',
                'Full IP Ownership',
                'Dedicated Named Team',
                'SLA-Backed Support',
              ].map((pill) => (
                <span key={pill} className="svl-intro-pill">{pill}</span>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ════════════════════════════════════════
          3. SERVICES — VERTICAL TAB EXPLORER
             (brand-new layout, nowhere else used)
         ════════════════════════════════════════ */}
      <section className="svl-explorer">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="svl-tag">What We Build</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Our Core Services
            </h2>
          </ScrollReveal>

          <div className="svl-explorer-layout">

            {/* ── LEFT: service tab list ── */}
            <div className="svl-tab-list">
              {services.map((svc, i) => {
                const a = accentColors[svc.slug] ?? 'hsl(29 60% 56%)';
                const isA = i === active;
                return (
                  <button
                    key={svc.slug}
                    onClick={() => setActive(i)}
                    className={cn('svl-tab-btn', isA && 'svl-tab-btn-active')}
                    style={isA ? { '--acc': a } as React.CSSProperties : undefined}
                  >
                    <span className="svl-tab-num">0{i + 1}</span>
                    <span className="svl-tab-icon" style={isA ? { background: a, color: '#fff' } : {}}>
                      {SvcIcon[svc.icon] ?? <Zap className="w-6 h-6" />}
                    </span>
                    <span className="svl-tab-name">{svc.title}</span>
                    <ChevronRight className={cn('svl-tab-arrow', isA && 'svl-tab-arrow-active')} />
                  </button>
                );
              })}
            </div>

            {/* ── RIGHT: detail panel ── */}
            {current && (
              <div className="svl-panel" key={current.slug}>

                {/* Top: image full-width */}
                <div className="svl-panel-img-wrap">
                  <img src={img} alt={current.title} className="svl-panel-img" />
                  <div className="svl-panel-img-overlay" style={{ background: `linear-gradient(to right, ${accent}22, transparent)` }} />
                  {/* accent bar top */}
                  <div className="svl-panel-accent-bar" style={{ background: accent }} />
                  {/* floating service badge */}
                  <div className="svl-panel-badge" style={{ background: accent }}>
                    {SvcIcon[current.icon] ?? <Zap className="w-6 h-6" />}
                    <span>{current.title}</span>
                  </div>
                  {/* metrics row overlaying bottom */}
                  <div className="svl-panel-metrics">
                    {current.benefits.slice(0, 3).map((b, i) => (
                      <div key={i} className="svl-panel-metric">
                        <div className="svl-panel-metric-num" style={{ color: accent }}>{b.metric}</div>
                        <div className="svl-panel-metric-lbl">{b.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="svl-panel-body">

                  {/* Description */}
                  <p className="svl-panel-desc">{current.description}</p>

                  {/* 2-col: capabilities + industries */}
                  <div className="svl-panel-cols">
                    <div>
                      <h4 className="svl-panel-col-title">Key Capabilities</h4>
                      <div className="svl-cap-list">
                        {current.features.map((f, i) => (
                          <div key={i} className="svl-cap-row">
                            <CheckCircle2 className="svl-cap-check" style={{ color: accent }} />
                            <div>
                              <span className="svl-cap-feat">{f.title}</span>
                              <span className="svl-cap-text"> — {f.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="svl-panel-col-title">Technology Stack</h4>
                      <div className="svl-chips">
                        {current.technologies.map((t) => (
                          <span key={t} className="svl-chip" style={{ borderColor: `${accent}30`, color: accent, background: `${accent}08` }}>{t}</span>
                        ))}
                      </div>
                      <h4 className="svl-panel-col-title mt-6">Industries Served</h4>
                      <div className="svl-chips">
                        {current.industries.map((ind) => (
                          <span key={ind} className="svl-chip-alt">{ind}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Process steps */}
                  <div className="svl-steps">
                    <h4 className="svl-panel-col-title mb-4">How We Deliver It</h4>
                    <div className="svl-steps-grid">
                      {current.steps.map((step, i) => (
                        <div key={i} className="svl-step">
                          <div className="svl-step-num" style={{ background: accent }}>
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <p className="svl-step-title">{step.title}</p>
                            <p className="svl-step-desc">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="svl-panel-cta">
                    <Button asChild size="lg" className="svl-panel-btn" style={{ background: accent }}>
                      <Link href={`/services/${current.slug}`}>
                        Explore {current.title} in Depth <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="svl-panel-btn-outline">
                      <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. WHY CHOOSE US
         ════════════════════════════════════════ */}
      <section className="svl-why">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="svl-tag">Why Premium IT Solutions</div>
            <h2 className="text-4xl font-black text-foreground">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              We are not a vendor. We are an extension of your team — accountable to your KPIs and invested in your success.
            </p>
          </ScrollReveal>
          <div className="svl-why-grid">
            {whyCards.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="svl-why-card">
                <div className="svl-why-icon">{c.icon}</div>
                <h3 className="svl-why-title">{c.title}</h3>
                <p className="svl-why-desc">{c.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. FAQ
         ════════════════════════════════════════ */}
      <section className="svl-faq">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-14">
            <div className="svl-tag">{servicesList.faq.title}</div>
            <h2 className="text-4xl font-black text-foreground">Common Questions</h2>
            <p className="text-lg text-muted-foreground mt-4">{servicesList.faq.description}</p>
          </ScrollReveal>
          <div className="svl-faq-list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06} className="svl-faq-item">
                <button className="svl-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown className={cn('svl-faq-chevron', openFaq === i && 'rotate-180')} />
                </button>
                <div className={cn('svl-faq-a', openFaq === i && 'svl-faq-a-open')}>
                  <p>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          6. CTA
         ════════════════════════════════════════ */}
      <section className="svl-cta">
        <div className="svl-cta-bg" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="svl-cta-stars">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <h2 className="svl-cta-title">{servicesList.cta.title}</h2>
            <p className="svl-cta-sub">
              Tell us about your project. We'll respond within 24 hours with a tailored technical proposal — no commitment required.
            </p>
            <div className="svl-cta-btns">
              <Button asChild size="lg" className="svl-cta-btn-primary">
                <Link href={servicesList.cta.btn.link}>
                  <Calendar className="mr-2 w-5 h-5" /> {servicesList.cta.btn.text}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="svl-cta-btn-outline">
                <Link href="/contact"><Mail className="mr-2 w-4 h-4" />Send Us a Brief</Link>
              </Button>
            </div>
            <p className="svl-cta-note">Free consultation · No commitment · Reply within 24 hours</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STYLES
         ════════════════════════════════════════ */}
      <style>{`
        .svl-page { width:100%; overflow-x:hidden; }

        /* badge */
        .svl-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18);
          color:hsl(29 80% 75%); padding:6px 18px; border-radius:100px;
          font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:0.12em;
          margin-bottom:28px; backdrop-filter:blur(10px);
        }
        .svl-badge-dot {
          width:8px; height:8px; border-radius:50%; background:hsl(29 80% 65%);
          animation:svlPulse 2s infinite;
        }
        @keyframes svlPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }

        /* section tag */
        .svl-tag {
          display:inline-block; font-size:0.7rem; font-weight:800; text-transform:uppercase;
          letter-spacing:0.14em; color:hsl(29 60% 50%); background:hsl(29 60% 50%/0.08);
          border:1px solid hsl(29 60% 50%/0.2); padding:4px 14px; border-radius:100px; margin-bottom:18px;
        }

        /* 2. INTRO */
        .svl-intro-grid { display:grid; grid-template-columns:1fr 1.5fr; gap:80px; align-items:start; }
        @media(max-width:860px){ .svl-intro-grid{ grid-template-columns:1fr; gap:32px; } }

        /* stats row */
        .svl-intro-stats {
          display:grid; grid-template-columns:repeat(4,1fr);
          gap:0; border:1px solid hsl(0 0% 90%); border-radius:20px;
          overflow:hidden; margin-bottom:48px;
          box-shadow:0 4px 24px rgba(0,0,0,0.05);
        }
        @media(max-width:700px){ .svl-intro-stats{ grid-template-columns:repeat(2,1fr); } }
        .svl-intro-stat {
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          padding:32px 16px; text-align:center;
          border-right:1px solid hsl(0 0% 90%); background:#fff;
          transition:background 0.25s;
        }
        .svl-intro-stat:last-child { border-right:none; }
        .svl-intro-stat:hover { background:hsl(29 60% 56%/0.04); }
        .svl-intro-stat-num {
          font-size:2.2rem; font-weight:900; line-height:1;
          color:hsl(29 60% 44%); margin-bottom:6px; letter-spacing:-0.03em;
        }
        .svl-intro-stat-lbl {
          font-size:0.78rem; font-weight:700; text-transform:uppercase;
          letter-spacing:0.1em; color:hsl(222 47% 35%);
        }

        /* intro body + pills */
        .svl-intro-body { max-width:780px; margin:0 auto; text-align:center; }
        .svl-intro-pills { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
        .svl-intro-pill {
          padding:6px 16px; border-radius:100px;
          font-size:0.78rem; font-weight:700;
          background:hsl(29 60% 56%/0.08); border:1px solid hsl(29 60% 56%/0.22);
          color:hsl(29 60% 36%); transition:all 0.22s;
        }
        .svl-intro-pill:hover {
          background:hsl(29 60% 56%); color:#fff;
          border-color:hsl(29 60% 56%);
          transform:translateY(-1px); box-shadow:0 4px 12px hsl(29 60% 56%/0.28);
        }

        /* ═══ 3. EXPLORER ═══ */
        .svl-explorer { padding:100px 0; background:hsl(0 0% 97%); }

        .svl-explorer-layout {
          display:grid; grid-template-columns:340px 1fr; gap:32px; align-items:start;
        }
        @media(max-width:1024px){ .svl-explorer-layout{ grid-template-columns:1fr; } }

        /* Tab list */
        .svl-tab-list {
          display:flex; flex-direction:column; gap:6px;
          position:sticky; top:100px;
        }
        @media(max-width:1024px){ .svl-tab-list{ position:static; flex-direction:row; flex-wrap:wrap; margin-bottom:24px; } }

        .svl-tab-btn {
          display:flex; align-items:center; gap:12px;
          padding:14px 16px; border-radius:16px;
          background:transparent; border:1px solid transparent;
          cursor:pointer; width:100%; text-align:left;
          transition:all 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .svl-tab-btn:hover {
          background:#fff; border-color:hsl(0 0% 90%);
          box-shadow:0 4px 16px rgba(0,0,0,0.06);
        }
        .svl-tab-btn-active {
          background:#fff !important;
          border-color:var(--acc, hsl(29 60% 56%)) !important;
          box-shadow:0 8px 24px rgba(0,0,0,0.1) !important;
        }
        @media(max-width:1024px){
          .svl-tab-btn { width:auto; padding:10px 14px; }
          .svl-tab-name { display:none; }
        }

        .svl-tab-num {
          font-size:0.7rem; font-weight:800; color:hsl(0 0% 65%);
          min-width:24px; letter-spacing:0.05em;
        }
        .svl-tab-btn-active .svl-tab-num { color:var(--acc,hsl(29 60% 56%)); }

        .svl-tab-icon {
          width:40px; height:40px; border-radius:12px; flex-shrink:0;
          background:hsl(0 0% 94%); color:hsl(0 0% 50%);
          display:flex; align-items:center; justify-content:center;
          transition:all 0.25s;
        }
        .svl-tab-name {
          flex:1; font-size:0.9rem; font-weight:700; color:hsl(222 47% 15%);
          line-height:1.3;
        }
        .svl-tab-arrow {
          width:16px; height:16px; color:hsl(0 0% 70%);
          transition:transform 0.25s, color 0.25s; flex-shrink:0;
        }
        .svl-tab-arrow-active { transform:translateX(3px); color:var(--acc,hsl(29 60% 56%)); }

        /* Panel */
        .svl-panel {
          background:#fff; border:1px solid hsl(0 0% 90%);
          border-radius:24px; overflow:hidden;
          box-shadow:0 24px 56px rgba(0,0,0,0.08);
          animation:svlFade 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes svlFade { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

        /* Panel image */
        .svl-panel-img-wrap {
          position:relative; overflow:hidden;
          height:280px;
        }
        .svl-panel-img {
          width:100%; height:100%; object-fit:cover;
          transition:transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .svl-panel:hover .svl-panel-img { transform:scale(1.04); }
        .svl-panel-img-overlay {
          position:absolute; inset:0;
        }
        .svl-panel-accent-bar {
          position:absolute; top:0; left:0; right:0; height:4px;
        }
        .svl-panel-badge {
          position:absolute; top:20px; left:20px;
          display:inline-flex; align-items:center; gap:10px;
          color:#fff; padding:10px 18px; border-radius:100px;
          font-size:0.85rem; font-weight:800;
          box-shadow:0 8px 24px rgba(0,0,0,0.25); backdrop-filter:blur(4px);
        }
        .svl-panel-metrics {
          position:absolute; bottom:0; left:0; right:0;
          display:flex;
          background:linear-gradient(to top, rgba(0,0,0,0.65), transparent);
          padding:24px 24px 20px;
          gap:0;
        }
        .svl-panel-metric {
          flex:1; text-align:center; border-right:1px solid rgba(255,255,255,0.2); padding:0 16px;
        }
        .svl-panel-metric:last-child { border-right:none; }
        .svl-panel-metric-num { font-size:1.6rem; font-weight:900; line-height:1; margin-bottom:4px; }
        .svl-panel-metric-lbl { font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:rgba(255,255,255,0.65); }

        /* Panel body */
        .svl-panel-body { padding:32px; }
        .svl-panel-desc { font-size:1rem; line-height:1.82; color:hsl(0 0% 42%); margin-bottom:28px; }

        .svl-panel-cols { display:grid; grid-template-columns:1fr 1fr; gap:32px; margin-bottom:28px; }
        @media(max-width:700px){ .svl-panel-cols{ grid-template-columns:1fr; } }

        .svl-panel-col-title {
          font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.12em;
          color:hsl(222 47% 11%); margin-bottom:14px;
        }

        .svl-cap-list { display:flex; flex-direction:column; gap:10px; }
        .svl-cap-row { display:flex; align-items:flex-start; gap:10px; font-size:0.88rem; }
        .svl-cap-check { width:16px; height:16px; flex-shrink:0; margin-top:2px; }
        .svl-cap-feat { font-weight:700; color:hsl(222 47% 11%); }
        .svl-cap-text { color:hsl(0 0% 48%); }

        .svl-chips { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:8px; }
        .svl-chip {
          padding:5px 13px; border-radius:100px; font-size:0.78rem; font-weight:700;
          border:1px solid; transition:all 0.22s;
        }
        .svl-chip:hover { transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,0,0,0.1); }
        .svl-chip-alt {
          padding:5px 13px; border-radius:100px; font-size:0.78rem; font-weight:700;
          background:hsl(222 47% 11%/0.06); border:1px solid hsl(222 47% 11%/0.12); color:hsl(222 47% 20%);
        }

        /* Process steps inside panel */
        .svl-steps { border-top:1px solid hsl(0 0% 92%); padding-top:24px; margin-bottom:28px; }
        .svl-steps-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        @media(max-width:700px){ .svl-steps-grid{ grid-template-columns:repeat(2,1fr); } }
        .svl-step { display:flex; align-items:flex-start; gap:12px; }
        .svl-step-num {
          width:32px; height:32px; border-radius:50%; color:#fff;
          font-size:0.72rem; font-weight:900; display:flex; align-items:center; justify-content:center;
          flex-shrink:0;
        }
        .svl-step-title { font-size:0.82rem; font-weight:700; color:hsl(222 47% 11%); margin-bottom:3px; }
        .svl-step-desc  { font-size:0.75rem; line-height:1.55; color:hsl(0 0% 50%); }

        /* Panel CTA */
        .svl-panel-cta { display:flex; flex-wrap:wrap; gap:12px; border-top:1px solid hsl(0 0% 93%); padding-top:24px; }
        .svl-panel-btn {
          color:#fff !important; border:none !important;
          transition:filter 0.25s, transform 0.25s !important;
        }
        .svl-panel-btn:hover { filter:brightness(0.88) !important; transform:translateY(-2px) !important; }
        .svl-panel-btn-outline {
          border:1px solid hsl(0 0% 85%) !important; background:#fff !important; color:hsl(222 47% 11%) !important;
        }
        .svl-panel-btn-outline:hover { border-color:hsl(222 47% 11%) !important; background:hsl(222 47% 11%) !important; color:#fff !important; }

        /* ═══ 4. WHY US ═══ */
        .svl-why { padding:100px 0; background:#fff; border-top:1px solid hsl(0 0% 92%); }
        .svl-why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        @media(max-width:1024px){ .svl-why-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:600px){ .svl-why-grid{ grid-template-columns:1fr; } }
        .svl-why-card {
          background:hsl(0 0% 98.5%); border:1px solid hsl(0 0% 91%); border-radius:20px;
          padding:30px 26px; transition:all 0.28s;
        }
        .svl-why-card:hover {
          border-color:hsl(29 60% 56%/0.35); box-shadow:0 16px 40px rgba(0,0,0,0.08); transform:translateY(-4px);
        }
        .svl-why-icon {
          width:46px; height:46px; border-radius:13px; background:hsl(29 60% 56%); color:#fff;
          display:flex; align-items:center; justify-content:center; margin-bottom:18px;
          box-shadow:0 6px 16px hsl(29 60% 56%/0.3);
        }
        .svl-why-title { font-size:0.98rem; font-weight:800; color:hsl(222 47% 11%); margin-bottom:8px; }
        .svl-why-desc  { font-size:0.88rem; line-height:1.72; color:hsl(0 0% 46%); }

        /* ═══ 5. FAQ ═══ */
        .svl-faq { padding:100px 0; background:hsl(0 0% 97%); border-top:1px solid hsl(0 0% 92%); }
        .svl-faq-list { display:flex; flex-direction:column; gap:10px; }
        .svl-faq-item { background:#fff; border:1px solid hsl(0 0% 90%); border-radius:16px; overflow:hidden; transition:border-color 0.25s, box-shadow 0.25s; }
        .svl-faq-item:hover { border-color:hsl(29 60% 56%/0.35); box-shadow:0 4px 16px rgba(0,0,0,0.05); }
        .svl-faq-q {
          width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px;
          padding:20px 24px; text-align:left; font-size:0.97rem; font-weight:700;
          color:hsl(222 47% 11%); background:none; border:none; cursor:pointer; transition:color 0.2s;
        }
        .svl-faq-q:hover { color:hsl(29 60% 42%); }
        .svl-faq-chevron { width:20px; height:20px; color:hsl(29 60% 50%); transition:transform 0.3s cubic-bezier(0.22,1,0.36,1); flex-shrink:0; }
        .svl-faq-a { max-height:0; overflow:hidden; transition:max-height 0.4s cubic-bezier(0.22,1,0.36,1); }
        .svl-faq-a-open { max-height:400px; }
        .svl-faq-a p { padding:0 24px 20px; font-size:0.92rem; line-height:1.82; color:hsl(0 0% 43%); border-top:1px solid hsl(0 0% 93%); padding-top:16px; margin:0; }

        /* ═══ 6. CTA ═══ */
        .svl-cta { position:relative; padding:120px 0; overflow:hidden; background:hsl(222 47% 10%); }
        .svl-cta-bg {
          position:absolute; inset:0;
          background:radial-gradient(ellipse at 50% 0%,hsl(29 60% 40%/0.24) 0%,transparent 60%),
                      radial-gradient(ellipse at 80% 100%,hsl(220 70% 50%/0.09) 0%,transparent 60%);
        }
        .svl-cta-stars { display:flex; justify-content:center; gap:4px; margin-bottom:24px; }
        .svl-cta-title { font-size:clamp(2rem,4vw,3rem); font-weight:900; color:#fff; margin-bottom:20px; line-height:1.15; letter-spacing:-0.025em; }
        .svl-cta-sub { font-size:1.05rem; color:rgba(255,255,255,0.56); max-width:560px; margin:0 auto 48px; line-height:1.78; }
        .svl-cta-btns { display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-bottom:24px; }
        .svl-cta-btn-primary { background:hsl(29 60% 56%)!important; color:#fff!important; border:none!important; box-shadow:0 8px 32px hsl(29 60% 56%/0.35)!important; }
        .svl-cta-btn-primary:hover { background:hsl(29 60% 46%)!important; transform:translateY(-3px); box-shadow:0 12px 40px hsl(29 60% 56%/0.5)!important; }
        .svl-cta-btn-outline { border:1px solid rgba(255,255,255,0.2)!important; background:rgba(255,255,255,0.06)!important; color:#fff!important; backdrop-filter:blur(8px); }
        .svl-cta-btn-outline:hover { background:rgba(255,255,255,0.12)!important; border-color:rgba(255,255,255,0.45)!important; }
        .svl-cta-note { font-size:0.78rem; color:rgba(255,255,255,0.32); font-weight:500; letter-spacing:0.03em; }

        /* extra */
        .mt-6 { margin-top:24px; }
      `}</style>
    </div>
  );
}