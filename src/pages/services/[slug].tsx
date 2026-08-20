import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import NotFound from '../not-found';
import {
  ArrowRight, CheckCircle2, ChevronDown, Check,
  Zap, Lock, Eye, MessageSquare, Database, Shield,
  Layers, Layout, Box, Server, Cloud, Code,
  Activity, PieChart, RefreshCw, Cpu, GitBranch,
  Users, TrendingUp, Award, Globe, Clock,
  Star, Calendar, Mail, Phone, BarChart3, Smartphone
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ── Icon resolver ─────────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ElementType> = {
  Zap, Lock, Eye, MessageSquare, Database, Shield, Layers, Layout,
  Server, Cloud, Code, Activity, PieChart, RefreshCw, Cpu, GitBranch,
  BarChart3, Users, TrendingUp, Globe, Smartphone,
};
function Ico({ name, className = 'w-6 h-6' }: { name: string; className?: string }) {
  const C = ICON_MAP[name] ?? Box;
  return <C className={className} />;
}

/* ── Animated counter ──────────────────────────────────────────────── */
function useCountUp(target: string, active: boolean) {
  const [val, setVal] = useState('0');
  useEffect(() => {
    if (!active) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) { setVal(target); return; }
    const suffix = target.replace(/[0-9.]/g, '');
    let step = 0; const steps = 55;
    const t = setInterval(() => {
      step++;
      const pct = step / steps;
      const cur = num * (1 - Math.pow(1 - pct, 3));
      setVal((Number.isInteger(num) ? Math.round(cur) : cur.toFixed(1)) + suffix);
      if (step >= steps) clearInterval(t);
    }, 1800 / steps);
    return () => clearInterval(t);
  }, [target, active]);
  return val;
}

function StatCard({ metric, label, description }: { metric: string; label: string; description: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const d = useCountUp(metric, on);
  return (
    <div ref={ref} className="sd-stat-card">
      <div className="sd-stat-metric">{d}</div>
      <div className="sd-stat-label">{label}</div>
      <div className="sd-stat-desc">{description}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════ */
export default function ServiceDetail() {
  const params = useParams();
  const service = services.find(s => s.slug === params.slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  if (!service) return <NotFound />;

  return (
    <div className="sd-page">

      {/* ══════════════════════════════════════════
          1. HERO — full-viewport cinematic
         ══════════════════════════════════════════ */}
      <section className="sd-hero">
        <div className="sd-hero-bg">
          <img src={service.heroImage} alt={service.title} className="sd-hero-img" />
          <div className="sd-hero-overlay" />
          <div className="sd-hero-grid" />
          <div className="sd-hero-orb sd-hero-orb1" />
          <div className="sd-hero-orb sd-hero-orb2" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <div className="sd-hero-breadcrumb">
              <Link href="/services" className="sd-breadcrumb-link">Services</Link>
              <span className="sd-breadcrumb-sep">/</span>
              <span className="sd-breadcrumb-current">{service.title}</span>
            </div>
            <div className="sd-hero-badge">
              <span className="sd-badge-dot" />
              Service Capability
            </div>
            <h1 className="sd-hero-title">{service.title}</h1>
            <p className="sd-hero-desc">{service.shortDescription}</p>

            {/* quick feature pills */}
            <div className="sd-hero-pills">
              {service.features.slice(0, 4).map((f, i) => (
                <span key={i} className="sd-hero-pill">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" />
                  {f.title}
                </span>
              ))}
            </div>

            <div className="sd-hero-btns">
              <Button asChild size="lg" className="sd-btn-primary">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="sd-btn-ghost">
                <a href="#overview">
                  <Eye className="mr-2 w-4 h-4" /> See How It Works
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* bottom metrics bar */}
        <div className="sd-hero-metrics-bar">
          {service.benefits.map((b, i) => (
            <div key={i} className="sd-hero-metric">
              <span className="sd-hero-metric-num">{b.metric}</span>
              <span className="sd-hero-metric-lbl">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. OVERVIEW — split with floating card
         ══════════════════════════════════════════ */}
      <section id="overview" className="sd-overview">
        <div className="container mx-auto px-4 md:px-8">
          <div className="sd-overview-grid">
            <ScrollReveal>
              <div className="sd-section-tag">Solution Overview</div>
              <h2 className="sd-section-title">
                Architected for <span className="sd-gradient-text">Business Impact</span>
              </h2>
              <p className="sd-overview-p">{service.description}</p>
              <p className="sd-overview-p">{service.overview}</p>
              <div className="sd-overview-highlights">
                {service.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="sd-highlight">
                    <CheckCircle2 className="sd-check" />
                    <span><strong>{f.title}</strong> — {f.description}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18} className="sd-overview-visual">
              <img src={service.heroImage} alt="Overview" className="sd-overview-img" />
              <div className="sd-overview-float-card">
                <div className="sd-float-icon"><Award className="w-5 h-5 text-white" /></div>
                <div>
                  <p className="sd-float-title">Enterprise Ready</p>
                  <p className="sd-float-sub">Trusted by 50+ enterprise clients</p>
                </div>
              </div>
              <div className="sd-overview-float-stat">
                <span className="sd-float-stat-num">{service.benefits[0]?.metric}</span>
                <span className="sd-float-stat-lbl">{service.benefits[0]?.label}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. CHALLENGES — dark numbered cards
         ══════════════════════════════════════════ */}
      <section className="sd-challenges">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="sd-section-tag-dark">The Problem Space</div>
            <h2 className="sd-section-title-light">Business Challenges We Eliminate</h2>
            <p className="sd-challenges-sub">
              If any of these resonate, our {service.title} practice is built specifically to solve them.
            </p>
          </ScrollReveal>
          <div className="sd-challenges-grid">
            {service.challenges.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.12} className="sd-challenge-card">
                <div className="sd-challenge-num">0{i + 1}</div>
                <h3 className="sd-challenge-title">{c.title}</h3>
                <p className="sd-challenge-desc">{c.description}</p>
                <div className="sd-challenge-bar" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. FEATURES — interactive toggle cards
         ══════════════════════════════════════════ */}
      <section className="sd-features">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="sd-section-tag">Technical Capabilities</div>
            <h2 className="sd-section-title">What We Build for You</h2>
          </ScrollReveal>

          <div className="sd-features-layout">
            {/* selector */}
            <div className="sd-feat-selector">
              {service.features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={cn('sd-feat-tab', activeFeature === i && 'sd-feat-tab-active')}
                >
                  <div className="sd-feat-tab-icon">
                    <Ico name={f.icon} className="w-5 h-5" />
                  </div>
                  <span>{f.title}</span>
                  <ChevronDown className={cn('sd-feat-tab-arrow', activeFeature === i && 'rotate-180')} />
                </button>
              ))}
            </div>

            {/* detail panel */}
            <div className="sd-feat-panel" key={activeFeature}>
              <div className="sd-feat-panel-icon">
                <Ico name={service.features[activeFeature]?.icon} className="w-10 h-10" />
              </div>
              <h3 className="sd-feat-panel-title">{service.features[activeFeature]?.title}</h3>
              <p className="sd-feat-panel-desc">{service.features[activeFeature]?.description}</p>
              <div className="sd-feat-panel-img-wrap">
                <img src={service.heroImage} alt={service.features[activeFeature]?.title} className="sd-feat-panel-img" />
                <div className="sd-feat-panel-img-overlay" />
              </div>
              <Button asChild size="lg" className="sd-btn-primary mt-6">
                <Link href="/contact">Discuss This Capability <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. RESULTS / STATS — animated counters
         ══════════════════════════════════════════ */}
      <section className="sd-stats">
        <div className="sd-stats-bg" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <div className="sd-section-tag-dark">Measurable Outcomes</div>
            <h2 className="sd-section-title-light">Results That Speak for Themselves</h2>
          </ScrollReveal>
          <div className="sd-stats-grid">
            {service.benefits.map((b, i) => (
              <StatCard key={i} metric={b.metric} label={b.label} description={b.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. PROCESS — horizontal timeline
         ══════════════════════════════════════════ */}
      <section className="sd-process">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="sd-section-tag">How We Deliver</div>
            <h2 className="sd-section-title">Our Execution Process</h2>
            <p className="sd-process-sub">
              A structured, sprint-based workflow with a live demo every two weeks — so you always know exactly where things stand.
            </p>
          </ScrollReveal>
          <div className="sd-process-steps">
            {service.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="sd-process-step">
                <div className="sd-process-step-top">
                  <div className="sd-process-num">{String(i + 1).padStart(2, '0')}</div>
                  {i < service.steps.length - 1 && <div className="sd-process-connector" />}
                </div>
                <h3 className="sd-process-title">{step.title}</h3>
                <p className="sd-process-desc">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. TECH STACK — pill grid
         ══════════════════════════════════════════ */}
      <section className="sd-tech">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="sd-section-tag">Technology Stack</div>
            <h2 className="sd-section-title">Enterprise-Grade Tools</h2>
            <p className="sd-tech-sub">
              Vendor-agnostic — we select the right technology for your specific requirements, not what's trendy.
            </p>
          </ScrollReveal>
          <div className="sd-tech-grid">
            {service.technologies.map((tech, i) => (
              <ScrollReveal key={i} delay={i * 0.06} className="sd-tech-card">
                <div className="sd-tech-icon"><Cpu className="w-5 h-5 text-primary" /></div>
                <span className="sd-tech-name">{tech}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. INDUSTRIES — chips row
         ══════════════════════════════════════════ */}
      <section className="sd-industries">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <p className="sd-industries-label">Industries We Serve With This Capability</p>
            <div className="sd-industries-chips">
              {service.industries.map((ind, i) => (
                <span key={i} className="sd-industry-chip">{ind}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. FAQ — styled accordion
         ══════════════════════════════════════════ */}
      <section className="sd-faq">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-14">
            <div className="sd-section-tag">Common Questions</div>
            <h2 className="sd-section-title">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="sd-faq-list">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06} className="sd-faq-item">
                <button className="sd-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.question}</span>
                  <ChevronDown className={cn('sd-faq-chevron', openFaq === i && 'rotate-180')} />
                </button>
                <div className={cn('sd-faq-a', openFaq === i && 'sd-faq-a-open')}>
                  <p>{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. CTA — premium dark
         ══════════════════════════════════════════ */}
      <section className="sd-cta">
        <div className="sd-cta-bg" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="sd-cta-stars">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <h2 className="sd-cta-title">
              Ready to Elevate Your {service.title}?
            </h2>
            <p className="sd-cta-sub">
              Join 200+ enterprise clients who trust Premium IT Solutions. Get a free technical review and a tailored proposal within 48 hours.
            </p>
            <div className="sd-cta-btns">
              <Button asChild size="lg" className="sd-cta-btn-primary">
                <Link href="/contact">
                  <Calendar className="mr-2 w-5 h-5" /> Book a Free Strategy Call
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="sd-cta-btn-outline">
                <Link href="/contact">
                  <Mail className="mr-2 w-4 h-4" /> Send Us a Brief
                </Link>
              </Button>
            </div>
            <p className="sd-cta-note">No commitment required · Response within 24 hours · Free initial consultation</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STYLES
         ══════════════════════════════════════════ */}
      <style>{`
        .sd-page { width:100%; overflow-x:hidden; }

        .sd-gradient-text {
          background:linear-gradient(135deg,hsl(29 70% 62%),hsl(29 95% 78%));
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
        }
        .sd-section-tag {
          display:inline-block; font-size:0.7rem; font-weight:800; text-transform:uppercase;
          letter-spacing:0.14em; color:hsl(29 60% 50%); background:hsl(29 60% 50%/0.08);
          border:1px solid hsl(29 60% 50%/0.2); padding:4px 14px; border-radius:100px; margin-bottom:18px;
        }
        .sd-section-tag-dark {
          display:inline-block; font-size:0.7rem; font-weight:800; text-transform:uppercase;
          letter-spacing:0.14em; color:hsl(29 80% 72%); background:hsl(29 80% 72%/0.12);
          border:1px solid hsl(29 80% 72%/0.22); padding:4px 14px; border-radius:100px; margin-bottom:18px;
        }
        .sd-section-title {
          font-size:clamp(1.8rem,3.2vw,2.7rem); font-weight:900; line-height:1.15;
          color:hsl(222 47% 11%); margin-bottom:20px; letter-spacing:-0.02em;
        }
        .sd-section-title-light {
          font-size:clamp(1.8rem,3.2vw,2.7rem); font-weight:900; line-height:1.15;
          color:#fff; margin-bottom:20px; letter-spacing:-0.02em;
        }

        /* ── HERO ── */
        .sd-hero {
          position:relative; min-height:100vh; display:flex; flex-direction:column;
          justify-content:center; padding:140px 0 160px; overflow:hidden;
        }
        .sd-hero-bg { position:absolute; inset:0; }
        .sd-hero-img { width:100%; height:100%; object-fit:cover; }
        .sd-hero-overlay {
          position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(15,23,42,0.97) 0%,rgba(15,23,42,0.78) 55%,rgba(29,60,90,0.65) 100%);
        }
        .sd-hero-grid {
          position:absolute; inset:0;
          background-image:linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px);
          background-size:64px 64px;
        }
        .sd-hero-orb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; }
        .sd-hero-orb1 { width:500px;height:500px;top:-100px;left:-100px;background:hsl(29 60% 40%/0.12); }
        .sd-hero-orb2 { width:400px;height:400px;bottom:60px;right:-80px;background:hsl(220 70% 50%/0.08); }

        .sd-hero-breadcrumb {
          display:flex; align-items:center; gap:8px; margin-bottom:20px;
          font-size:0.82rem; font-weight:600;
        }
        .sd-breadcrumb-link { color:rgba(255,255,255,0.5); text-decoration:none; transition:color 0.2s; }
        .sd-breadcrumb-link:hover { color:hsl(29 80% 72%); }
        .sd-breadcrumb-sep { color:rgba(255,255,255,0.3); }
        .sd-breadcrumb-current { color:hsl(29 80% 72%); }

        .sd-hero-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.15);
          color:hsl(29 80% 75%); padding:6px 16px; border-radius:100px;
          font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:0.12em;
          margin-bottom:24px; backdrop-filter:blur(10px);
        }
        .sd-badge-dot {
          width:8px;height:8px;border-radius:50%;background:hsl(29 80% 65%);
          animation:sdPulse 2s infinite;
        }
        @keyframes sdPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }

        .sd-hero-title {
          font-size:clamp(2.8rem,7vw,5.5rem); font-weight:900; line-height:1.06;
          letter-spacing:-0.025em; color:#fff; max-width:860px; margin-bottom:20px;
          text-shadow:0 4px 24px rgba(0,0,0,0.5);
        }
        .sd-hero-desc {
          font-size:clamp(1.05rem,2vw,1.3rem); color:rgba(255,255,255,0.75);
          max-width:640px; line-height:1.8; margin-bottom:28px;
          text-shadow:0 2px 8px rgba(0,0,0,0.3);
        }
        .sd-hero-pills { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:36px; }
        .sd-hero-pill {
          display:inline-flex; align-items:center; gap:6px; font-size:0.78rem; font-weight:700;
          background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16);
          color:rgba(255,255,255,0.85); padding:5px 14px; border-radius:100px; backdrop-filter:blur(8px);
        }
        .sd-hero-btns { display:flex; flex-wrap:wrap; gap:14px; }
        .sd-btn-primary {
          background:hsl(29 60% 56%)!important; color:#fff!important; border:none!important;
          box-shadow:0 8px 28px hsl(29 60% 56%/0.35)!important;
        }
        .sd-btn-primary:hover { background:hsl(29 60% 46%)!important; transform:translateY(-2px); }
        .sd-btn-ghost {
          border:1px solid rgba(255,255,255,0.25)!important; background:rgba(255,255,255,0.07)!important;
          color:#fff!important; backdrop-filter:blur(8px);
        }
        .sd-btn-ghost:hover { background:rgba(255,255,255,0.14)!important; border-color:rgba(255,255,255,0.5)!important; }

        .sd-hero-metrics-bar {
          position:absolute; bottom:0; left:0; right:0; z-index:10;
          display:flex;
          background:rgba(255,255,255,0.04); backdrop-filter:blur(16px);
          border-top:1px solid rgba(255,255,255,0.09);
        }
        .sd-hero-metric {
          flex:1; padding:20px 16px; text-align:center;
          border-right:1px solid rgba(255,255,255,0.07); transition:background 0.25s;
        }
        .sd-hero-metric:last-child { border-right:none; }
        .sd-hero-metric:hover { background:rgba(255,255,255,0.06); }
        .sd-hero-metric-num { display:block; font-size:clamp(1.4rem,2.5vw,2rem); font-weight:900; color:hsl(29 80% 72%); line-height:1; margin-bottom:4px; }
        .sd-hero-metric-lbl { font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.09em; color:rgba(255,255,255,0.42); }

        /* ── OVERVIEW ── */
        .sd-overview { padding:100px 0; background:#fff; }
        .sd-overview-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
        @media(max-width:900px){ .sd-overview-grid{ grid-template-columns:1fr; gap:48px; } }
        .sd-overview-p { font-size:1.02rem; line-height:1.85; color:hsl(222 30% 38%); margin-bottom:16px; }
        .sd-overview-highlights { display:flex; flex-direction:column; gap:12px; margin-top:20px; }
        .sd-highlight { display:flex; align-items:flex-start; gap:12px; font-size:0.95rem; color:hsl(222 40% 22%); font-weight:500; }
        .sd-check { width:18px;height:18px;color:hsl(29 60% 50%);flex-shrink:0;margin-top:2px; }
        .sd-overview-visual { position:relative; }
        .sd-overview-img { width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:22px; box-shadow:0 32px 64px rgba(0,0,0,0.13); }
        .sd-overview-float-card {
          position:absolute; bottom:-20px; left:-20px; background:#fff;
          border:1px solid hsl(0 0% 90%); border-radius:16px; padding:14px 18px;
          display:flex; align-items:center; gap:13px; box-shadow:0 16px 40px rgba(0,0,0,0.12);
        }
        .sd-float-icon { width:38px;height:38px;border-radius:10px;background:hsl(29 60% 50%);display:flex;align-items:center;justify-content:center;flex-shrink:0; }
        .sd-float-title { font-weight:700; font-size:0.85rem; color:hsl(222 47% 11%); }
        .sd-float-sub { font-size:0.72rem; color:hsl(0 0% 50%); }
        .sd-overview-float-stat {
          position:absolute; top:20px; right:-16px; background:hsl(29 60% 56%);
          border-radius:16px; padding:16px 20px; text-align:center;
          box-shadow:0 12px 32px hsl(29 60% 56%/0.4); color:#fff;
        }
        .sd-float-stat-num { display:block; font-size:1.6rem; font-weight:900; line-height:1; margin-bottom:4px; }
        .sd-float-stat-lbl { font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; opacity:0.8; }

        /* ── CHALLENGES ── */
        .sd-challenges { padding:100px 0; background:hsl(222 47% 11%); }
        .sd-challenges-sub { font-size:1rem; color:rgba(255,255,255,0.5); max-width:540px; margin:0 auto 0; line-height:1.75; }
        .sd-challenges-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:20px; }
        .sd-challenge-card {
          background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.07);
          border-radius:20px; padding:32px 28px; position:relative; overflow:hidden;
          transition:border-color 0.3s,background 0.3s,transform 0.3s;
        }
        .sd-challenge-card:hover { border-color:hsl(29 60% 56%/0.35); background:rgba(255,255,255,0.06); transform:translateY(-4px); }
        .sd-challenge-num { font-size:2.8rem; font-weight:900; color:hsl(29 60% 56%/0.18); line-height:1; margin-bottom:18px; }
        .sd-challenge-title { font-size:1.15rem; font-weight:800; color:#fff; margin-bottom:10px; }
        .sd-challenge-desc { font-size:0.92rem; line-height:1.75; color:rgba(255,255,255,0.52); }
        .sd-challenge-bar {
          position:absolute; bottom:0; left:0; right:0; height:3px;
          background:linear-gradient(to right,hsl(29 60% 56%/0.6),transparent);
          transition:opacity 0.3s;
        }
        .sd-challenge-card:hover .sd-challenge-bar { opacity:1; }

        /* ── FEATURES TOGGLE ── */
        .sd-features { padding:100px 0; background:hsl(0 0% 97%); }
        .sd-features-layout { display:grid; grid-template-columns:320px 1fr; gap:28px; align-items:start; }
        @media(max-width:900px){ .sd-features-layout{ grid-template-columns:1fr; } }
        .sd-feat-selector { display:flex; flex-direction:column; gap:6px; position:sticky; top:100px; }
        @media(max-width:900px){ .sd-feat-selector{ position:static; } }
        .sd-feat-tab {
          display:flex; align-items:center; gap:12px; padding:14px 16px; border-radius:14px;
          background:transparent; border:1px solid transparent; cursor:pointer; text-align:left;
          font-size:0.9rem; font-weight:700; color:hsl(0 0% 45%); transition:all 0.25s;
        }
        .sd-feat-tab:hover { background:#fff; border-color:hsl(0 0% 88%); color:hsl(222 47% 11%); }
        .sd-feat-tab-active {
          background:#fff!important; border-color:hsl(29 60% 56%/0.4)!important;
          color:hsl(222 47% 11%)!important; box-shadow:0 6px 20px rgba(0,0,0,0.08)!important;
        }
        .sd-feat-tab-icon {
          width:36px; height:36px; border-radius:10px; background:hsl(0 0% 92%);
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
          color:hsl(0 0% 50%); transition:all 0.25s;
        }
        .sd-feat-tab-active .sd-feat-tab-icon { background:hsl(29 60% 56%); color:#fff; }
        .sd-feat-tab-arrow { width:16px;height:16px;color:hsl(0 0% 70%);transition:transform 0.25s;margin-left:auto;flex-shrink:0; }
        .sd-feat-tab-active .sd-feat-tab-arrow { transform:rotate(-90deg); color:hsl(29 60% 50%); }

        .sd-feat-panel {
          background:#fff; border:1px solid hsl(0 0% 90%); border-radius:22px; padding:36px;
          box-shadow:0 16px 48px rgba(0,0,0,0.07);
          animation:sdFade 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes sdFade { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .sd-feat-panel-icon {
          width:64px; height:64px; border-radius:18px;
          background:hsl(29 60% 56%/0.1); border:1px solid hsl(29 60% 56%/0.2);
          display:flex; align-items:center; justify-content:center; color:hsl(29 60% 48%);
          margin-bottom:22px;
        }
        .sd-feat-panel-title { font-size:1.7rem; font-weight:900; color:hsl(222 47% 11%); margin-bottom:14px; letter-spacing:-0.02em; }
        .sd-feat-panel-desc { font-size:1rem; line-height:1.82; color:hsl(0 0% 42%); margin-bottom:24px; }
        .sd-feat-panel-img-wrap { position:relative; border-radius:16px; overflow:hidden; margin-bottom:4px; }
        .sd-feat-panel-img { width:100%; aspect-ratio:16/5; object-fit:cover; border-radius:16px; display:block; }
        .sd-feat-panel-img-overlay {
          position:absolute; inset:0; border-radius:16px;
          background:linear-gradient(to top,rgba(15,23,42,0.2),transparent);
        }

        /* ── STATS ── */
        .sd-stats { padding:100px 0; position:relative; overflow:hidden; background:hsl(222 47% 10%); }
        .sd-stats-bg {
          position:absolute; inset:0;
          background:radial-gradient(ellipse at 30% 50%,hsl(29 60% 30%/0.14) 0%,transparent 70%),
                      radial-gradient(ellipse at 70% 50%,hsl(220 70% 40%/0.09) 0%,transparent 70%);
        }
        .sd-stats-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); border:1px solid rgba(255,255,255,0.06); border-radius:24px; overflow:hidden; }
        .sd-stat-card { padding:48px 24px; text-align:center; background:rgba(255,255,255,0.027); border-right:1px solid rgba(255,255,255,0.06); transition:background 0.3s; }
        .sd-stat-card:last-child { border-right:none; }
        .sd-stat-card:hover { background:rgba(255,255,255,0.055); }
        .sd-stat-metric { font-size:clamp(2.2rem,4vw,3.4rem); font-weight:900; color:hsl(29 80% 70%); line-height:1; margin-bottom:10px; letter-spacing:-0.03em; }
        .sd-stat-label { font-size:0.78rem; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,0.55); margin-bottom:8px; }
        .sd-stat-desc { font-size:0.8rem; color:rgba(255,255,255,0.32); line-height:1.5; }

        /* ── PROCESS ── */
        .sd-process { padding:100px 0; background:#fff; border-top:1px solid hsl(0 0% 92%); }
        .sd-process-sub { font-size:1rem; color:hsl(0 0% 45%); max-width:520px; margin:0 auto 60px; line-height:1.75; }
        .sd-process-steps { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:0; }
        .sd-process-step { padding:0 20px; position:relative; }
        .sd-process-step-top { display:flex; align-items:center; margin-bottom:18px; }
        .sd-process-num {
          width:52px; height:52px; border-radius:50%; background:hsl(29 60% 56%); color:#fff;
          font-size:0.9rem; font-weight:900; display:flex; align-items:center; justify-content:center;
          flex-shrink:0; box-shadow:0 6px 18px hsl(29 60% 56%/0.38); z-index:2;
        }
        .sd-process-connector { flex:1; height:2px; background:linear-gradient(to right,hsl(29 60% 56%/0.4),transparent); margin-left:12px; }
        .sd-process-title { font-size:0.95rem; font-weight:800; color:hsl(222 47% 11%); margin-bottom:8px; }
        .sd-process-desc { font-size:0.82rem; line-height:1.7; color:hsl(0 0% 46%); }

        /* ── TECH ── */
        .sd-tech { padding:80px 0; background:hsl(0 0% 97%); border-top:1px solid hsl(0 0% 92%); }
        .sd-tech-sub { font-size:1rem; color:hsl(0 0% 45%); max-width:480px; margin:0 auto 52px; line-height:1.7; }
        .sd-tech-grid { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; }
        .sd-tech-card {
          display:flex; align-items:center; gap:10px; background:#fff;
          border:1px solid hsl(0 0% 90%); border-radius:14px; padding:12px 20px;
          transition:all 0.25s; box-shadow:0 2px 8px rgba(0,0,0,0.03);
        }
        .sd-tech-card:hover { border-color:hsl(29 60% 56%); box-shadow:0 8px 22px hsl(29 60% 56%/0.12); transform:translateY(-2px); }
        .sd-tech-icon { width:34px;height:34px;border-radius:8px;background:hsl(29 60% 56%/0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0; }
        .sd-tech-name { font-size:0.9rem; font-weight:700; color:hsl(222 47% 14%); }

        /* ── INDUSTRIES ── */
        .sd-industries { padding:40px 0 60px; background:#fff; border-top:1px solid hsl(0 0% 92%); }
        .sd-industries-label { font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.14em; color:hsl(0 0% 55%); margin-bottom:16px; }
        .sd-industries-chips { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
        .sd-industry-chip {
          padding:8px 20px; border-radius:100px; font-size:0.85rem; font-weight:700;
          background:hsl(222 47% 11%/0.05); border:1px solid hsl(222 47% 11%/0.12); color:hsl(222 47% 20%);
          transition:all 0.22s;
        }
        .sd-industry-chip:hover { background:hsl(222 47% 11%); color:#fff; }

        /* ── FAQ ── */
        .sd-faq { padding:80px 0; background:hsl(0 0% 97%); border-top:1px solid hsl(0 0% 92%); }
        .sd-faq-list { display:flex; flex-direction:column; gap:10px; }
        .sd-faq-item { background:#fff; border:1px solid hsl(0 0% 90%); border-radius:16px; overflow:hidden; transition:border-color 0.25s,box-shadow 0.25s; }
        .sd-faq-item:hover { border-color:hsl(29 60% 56%/0.35); box-shadow:0 4px 16px rgba(0,0,0,0.05); }
        .sd-faq-q {
          width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px;
          padding:20px 24px; text-align:left; font-size:0.97rem; font-weight:700;
          color:hsl(222 47% 11%); background:none; border:none; cursor:pointer; transition:color 0.2s;
        }
        .sd-faq-q:hover { color:hsl(29 60% 42%); }
        .sd-faq-chevron { width:20px;height:20px;color:hsl(29 60% 50%);transition:transform 0.3s cubic-bezier(0.22,1,0.36,1);flex-shrink:0; }
        .sd-faq-a { max-height:0; overflow:hidden; transition:max-height 0.4s cubic-bezier(0.22,1,0.36,1); }
        .sd-faq-a-open { max-height:400px; }
        .sd-faq-a p { padding:0 24px 20px; font-size:0.92rem; line-height:1.82; color:hsl(0 0% 42%); border-top:1px solid hsl(0 0% 93%); padding-top:16px; margin:0; }

        /* ── CTA ── */
        .sd-cta { position:relative; padding:120px 0; overflow:hidden; background:hsl(222 47% 10%); }
        .sd-cta-bg {
          position:absolute; inset:0;
          background:radial-gradient(ellipse at 50% 0%,hsl(29 60% 40%/0.24) 0%,transparent 60%),
                      radial-gradient(ellipse at 20% 100%,hsl(220 70% 50%/0.09) 0%,transparent 60%);
        }
        .sd-cta-stars { display:flex; justify-content:center; gap:4px; margin-bottom:24px; }
        .sd-cta-title { font-size:clamp(2rem,4vw,3rem); font-weight:900; color:#fff; margin-bottom:20px; line-height:1.15; letter-spacing:-0.025em; }
        .sd-cta-sub { font-size:1.05rem; color:rgba(255,255,255,0.56); max-width:560px; margin:0 auto 48px; line-height:1.78; }
        .sd-cta-btns { display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-bottom:24px; }
        .sd-cta-btn-primary { background:hsl(29 60% 56%)!important; color:#fff!important; border:none!important; box-shadow:0 8px 32px hsl(29 60% 56%/0.35)!important; }
        .sd-cta-btn-primary:hover { background:hsl(29 60% 46%)!important; transform:translateY(-3px); box-shadow:0 12px 40px hsl(29 60% 56%/0.5)!important; }
        .sd-cta-btn-outline { border:1px solid rgba(255,255,255,0.2)!important; background:rgba(255,255,255,0.06)!important; color:#fff!important; backdrop-filter:blur(8px); }
        .sd-cta-btn-outline:hover { background:rgba(255,255,255,0.12)!important; border-color:rgba(255,255,255,0.45)!important; }
        .sd-cta-note { font-size:0.78rem; color:rgba(255,255,255,0.32); font-weight:500; letter-spacing:0.03em; }

        /* ── Responsive ── */
        @media(max-width:640px){
          .sd-hero-metric { padding:14px 10px; }
          .sd-hero-metric-num { font-size:1.3rem; }
          .sd-stat-card { padding:32px 16px; }
          .sd-process-step { padding:0 8px 40px; }
          .sd-process-connector { display:none; }
        }
        .mt-6 { margin-top:24px; }
      `}</style>
    </div>
  );
}