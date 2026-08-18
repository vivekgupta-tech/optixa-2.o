import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { solutions } from '@/data/solutions';
import NotFound from '../not-found';
import {
  ArrowRight, CheckCircle2, ChevronDown,
  Shield, Server, Code, Cloud, Database, Lock,
  TrendingUp, Clock, Award, Users, Zap, Globe,
  Star, Phone, Mail, Calendar, Check,
  BarChart3, Cpu, Network, HardDrive, Layers, GitBranch
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Icon map ───────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
  Code: <Code className="w-7 h-7" />,
  Cloud: <Cloud className="w-7 h-7" />,
  Database: <Database className="w-7 h-7" />,
  Lock: <Lock className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Cpu: <Cpu className="w-7 h-7" />,
  Network: <Network className="w-7 h-7" />,
  HardDrive: <HardDrive className="w-7 h-7" />,
  Layers: <Layers className="w-7 h-7" />,
  GitBranch: <GitBranch className="w-7 h-7" />,
  BarChart3: <BarChart3 className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
};

// ─── Animated counter hook ──────────────────────────────────────────────────
function useCountUp(target: string, active: boolean) {
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (!active) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) { setDisplay(target); return; }
    const suffix = target.replace(/[0-9.]/g, '');
    const duration = 1800;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, num);
      const formatted = Number.isInteger(num) ? Math.round(current).toString() : current.toFixed(1);
      setDisplay(formatted + suffix);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, active]);
  return display;
}

function StatCard({ metric, label, delay }: { metric: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const display = useCountUp(metric, active);
  return (
    <div ref={ref} className="stat-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="stat-metric">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function SolutionDetail() {
  const params = useParams();
  const solution = solutions.find(s => s.slug === params.slug);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!solution) return <NotFound />;

  const tabLabels = solution.features.map(f => f.title);

  return (
    <div className="sol-page">

      {/* ══════════════════════════════════════════════
          1. HERO
         ══════════════════════════════════════════════ */}
      <section className="sol-hero">
        <div className="sol-hero-bg">
          <img src={solution.heroImage} alt={solution.title} className="sol-hero-img" />
          <div className="sol-hero-overlay" />
          <div className="sol-hero-grid" />
        </div>
        <div className="sol-hero-content container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="sol-badge">
              <span className="sol-badge-dot" />
              Enterprise Solution
            </div>
            <h1 className="sol-hero-title">{solution.title}</h1>
            <p className="sol-hero-desc">{solution.shortDescription}</p>
            <div className="sol-hero-btns">
              <Button asChild size="lg" className="sol-btn-primary">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="sol-btn-outline">
                <Link href="/contact">
                  <Phone className="mr-2 w-4 h-4" /> Talk to an Expert
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="sol-hero-stats">
            {solution.benefits.map((b, i) => (
              <div key={i} className="sol-hero-stat">
                <span className="sol-hero-stat-num">{b.metric}</span>
                <span className="sol-hero-stat-lbl">{b.label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
        <div className="sol-scroll-cue">
          <ChevronDown className="w-6 h-6 animate-bounce text-white/60" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. TRUST BAR
         ══════════════════════════════════════════════ */}
      <section className="sol-trust">
        <div className="container mx-auto px-4 md:px-8">
          <p className="sol-trust-label">Powered by industry-leading technologies</p>
          <div className="sol-trust-logos">
            {[...solution.technologies, ...solution.technologies].map((tech, i) => (
              <span key={i} className="sol-trust-tech">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. OVERVIEW
         ══════════════════════════════════════════════ */}
      <section className="sol-overview">
        <div className="container mx-auto px-4 md:px-8">
          <div className="sol-overview-grid">
            <ScrollReveal>
              <div className="sol-section-tag">Solution Overview</div>
              <h2 className="sol-section-title">
                Why{' '}
                <span className="sol-gradient-text">{solution.title}</span>{' '}
                Matters for Your Business
              </h2>
              <p className="sol-overview-desc">{solution.description}</p>
              {solution.overviewHighlights?.map((h, i) => (
                <div key={i} className="sol-highlight-row">
                  <CheckCircle2 className="sol-check-icon" />
                  <span>{h}</span>
                </div>
              ))}
              <Button asChild size="lg" className="sol-btn-primary mt-8">
                <Link href="/contact">Explore the Solution <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="sol-overview-visual">
              <img src={solution.heroImage} alt="Overview" className="sol-overview-img" />
              <div className="sol-floating-card">
                <div className="sol-floating-icon"><Award className="w-5 h-5 text-white" /></div>
                <div>
                  <p className="sol-floating-title">Enterprise Ready</p>
                  <p className="sol-floating-sub">SOC2 & ISO 27001 compliant</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. PROBLEMS
         ══════════════════════════════════════════════ */}
      <section className="sol-problems">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="sol-section-center">
            <div className="sol-section-tag-dark">Challenges We Solve</div>
            <h2 className="sol-section-title-light">The Bottlenecks Holding You Back</h2>
            <p className="sol-problems-sub">
              These are the critical pain-points our {solution.title} practice eliminates.
            </p>
          </ScrollReveal>
          <div className="sol-problems-grid">
            {solution.challenges.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.12} className="sol-problem-card">
                <div className="sol-problem-num">0{i + 1}</div>
                <h3 className="sol-problem-title">{c.title}</h3>
                <p className="sol-problem-desc">{c.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. FEATURES TABS
         ══════════════════════════════════════════════ */}
      <section className="sol-features">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="sol-section-center">
            <div className="sol-section-tag">What We Build</div>
            <h2 className="sol-section-title">Core Solution Architecture</h2>
          </ScrollReveal>
          <ScrollReveal className="sol-tabs">
            {tabLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn('sol-tab', activeTab === i && 'sol-tab-active')}
              >
                {label}
              </button>
            ))}
          </ScrollReveal>
          <div className="sol-tab-content">
            {solution.features.map((feat, i) => (
              <div key={i} className={cn('sol-tab-panel', activeTab === i && 'sol-tab-panel-active')}>
                <div className="sol-tab-left">
                  <div className="sol-feat-icon-wrap">
                    {iconMap[feat.icon] ?? <Zap className="w-7 h-7" />}
                  </div>
                  <h3 className="sol-feat-title">{feat.title}</h3>
                  <p className="sol-feat-desc">{feat.description}</p>
                  {feat.bullets?.map((b, j) => (
                    <div key={j} className="sol-feat-bullet">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <div className="sol-tab-right">
                  <img
                    src={feat.image ?? solution.heroImage}
                    alt={feat.title}
                    className="sol-feat-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. ANIMATED STATS
         ══════════════════════════════════════════════ */}
      <section className="sol-stats">
        <div className="sol-stats-bg" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="sol-section-center mb-16">
            <div className="sol-section-tag-dark">Proven Impact</div>
            <h2 className="sol-section-title-light">Results That Speak for Themselves</h2>
          </ScrollReveal>
          <div className="sol-stats-grid">
            {solution.benefits.map((b, i) => (
              <StatCard key={i} metric={b.metric} label={b.label} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. PROCESS TIMELINE
         ══════════════════════════════════════════════ */}
      {solution.process && (
        <section className="sol-process">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal className="sol-section-center">
              <div className="sol-section-tag">How We Work</div>
              <h2 className="sol-section-title">Our Delivery Process</h2>
            </ScrollReveal>
            <div className="sol-timeline">
              {solution.process.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="sol-timeline-item">
                  <div className="sol-timeline-left">
                    <div className="sol-timeline-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="sol-timeline-line" />
                  </div>
                  <div className="sol-timeline-body">
                    <h3 className="sol-timeline-title">{step.phase}</h3>
                    <p className="sol-timeline-desc">{step.description}</p>
                    <div className="sol-timeline-duration">
                      <Clock className="w-4 h-4 text-primary" /> {step.duration}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          8. TECH STACK
         ══════════════════════════════════════════════ */}
      <section className="sol-tech">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="sol-section-center">
            <div className="sol-section-tag">Technology Stack</div>
            <h2 className="sol-section-title">Powered by Modern Infrastructure</h2>
            <p className="sol-tech-sub">
              We are vendor-agnostic — we select the best tool for your unique requirements.
            </p>
          </ScrollReveal>
          <div className="sol-tech-grid">
            {solution.technologies.map((tech, i) => (
              <ScrollReveal key={i} delay={i * 0.06} className="sol-tech-card">
                <div className="sol-tech-icon-wrap">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <span className="sol-tech-name">{tech}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. WHY US
         ══════════════════════════════════════════════ */}
      <section className="sol-why">
        <div className="container mx-auto px-4 md:px-8">
          <div className="sol-why-grid">
            <ScrollReveal>
              <div className="sol-section-tag">Why Premium IT Solutions</div>
              <h2 className="sol-section-title">What Sets Our Practice Apart</h2>
              <p className="sol-why-desc">
                With 10+ years delivering mission-critical {solution.title.toLowerCase()} projects for Fortune 500 enterprises, our team brings depth of expertise you won't find at generic agencies.
              </p>
            </ScrollReveal>
            <div className="sol-why-cards">
              {[
                { icon: <Users className="w-5 h-5" />, title: 'Dedicated Team', desc: 'A named architect owns your engagement end to end.' },
                { icon: <Shield className="w-5 h-5" />, title: 'Security First', desc: 'Security review integrated in every sprint, not bolted on at the end.' },
                { icon: <TrendingUp className="w-5 h-5" />, title: 'ROI Focused', desc: 'We define success metrics upfront and report against them weekly.' },
                { icon: <Globe className="w-5 h-5" />, title: 'Global Scale', desc: 'Architectures tested at global scale with multi-region redundancy.' },
              ].map((card, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="sol-why-card">
                  <div className="sol-why-icon">{card.icon}</div>
                  <div>
                    <h4 className="sol-why-card-title">{card.title}</h4>
                    <p className="sol-why-card-desc">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          10. FAQ
         ══════════════════════════════════════════════ */}
      <section className="sol-faq">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="sol-section-center">
            <div className="sol-section-tag">FAQ</div>
            <h2 className="sol-section-title">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="sol-faq-list">
            {solution.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.07} className="sol-faq-item">
                <button
                  className="sol-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={cn('sol-faq-chevron', openFaq === i && 'rotate-180')} />
                </button>
                <div className={cn('sol-faq-a', openFaq === i && 'sol-faq-a-open')}>
                  <p>{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          11. CTA
         ══════════════════════════════════════════════ */}
      <section className="sol-cta">
        <div className="sol-cta-bg" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="sol-cta-stars">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <h2 className="sol-cta-title">Ready to Transform Your {solution.title}?</h2>
            <p className="sol-cta-sub">
              Join 200+ enterprise clients who chose Premium IT Solutions. Get a free architecture review and a tailored proposal within 48 hours.
            </p>
            <div className="sol-cta-btns">
              <Button asChild size="lg" className="sol-cta-btn-primary">
                <Link href="/contact">
                  <Calendar className="mr-2 w-5 h-5" /> Book a Free Strategy Call
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="sol-cta-btn-outline">
                <Link href="/contact">
                  <Mail className="mr-2 w-4 h-4" /> Send Us a Message
                </Link>
              </Button>
            </div>
            <p className="sol-cta-note">No commitment required · Response within 24 hours · Free initial consultation</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INLINE STYLES
         ══════════════════════════════════════════════ */}
      <style>{`
        .sol-page { width: 100%; overflow-x: hidden; }

        .sol-gradient-text {
          background: linear-gradient(135deg, hsl(29 60% 60%), hsl(29 90% 75%));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* HERO */
        .sol-hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center;
          padding-top: 140px; padding-bottom: 80px; overflow: hidden;
        }
        .sol-hero-bg { position: absolute; inset: 0; }
        .sol-hero-img { width: 100%; height: 100%; object-fit: cover; }
        .sol-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(15,23,42,0.72) 55%, rgba(29,58,82,0.6) 100%);
        }
        .sol-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .sol-hero-content { position: relative; z-index: 10; }
        .sol-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(29,78,216,0.12); border: 1px solid rgba(29,78,216,0.25);
          color: hsl(29 80% 70%); padding: 6px 16px; border-radius: 100px;
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 28px;
        }
        .sol-badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: hsl(29 80% 65%);
          animation: sol-pulse 2s infinite;
        }
        @keyframes sol-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .sol-hero-title {
          font-size: clamp(2.8rem, 7vw, 5.5rem); font-weight: 900; line-height: 1.06;
          letter-spacing: -0.025em; color: #fff; max-width: 860px;
          margin-bottom: 24px; text-shadow: 0 4px 24px rgba(0,0,0,0.5);
        }
        .sol-hero-desc {
          font-size: clamp(1.05rem, 2vw, 1.3rem); color: rgba(255,255,255,0.78);
          max-width: 640px; line-height: 1.78; margin-bottom: 40px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .sol-hero-btns { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 64px; }
        .sol-btn-primary {
          background: hsl(29 60% 56%) !important; color: #fff !important; border: none !important;
        }
        .sol-btn-primary:hover {
          background: hsl(29 60% 46%) !important; transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3) !important;
        }
        .sol-btn-outline {
          border: 1px solid rgba(255,255,255,0.3) !important; background: rgba(255,255,255,0.06) !important;
          color: #fff !important; backdrop-filter: blur(8px);
        }
        .sol-btn-outline:hover { background: rgba(255,255,255,0.14) !important; border-color: rgba(255,255,255,0.6) !important; }
        .sol-hero-stats {
          display: flex; flex-wrap: wrap; gap: 0;
          border-top: 1px solid rgba(255,255,255,0.1); padding-top: 32px;
        }
        .sol-hero-stat {
          display: flex; flex-direction: column; gap: 4px;
          padding: 0 40px 0 0; border-right: 1px solid rgba(255,255,255,0.1); margin-right: 40px;
        }
        .sol-hero-stat:last-child { border-right: none; }
        .sol-hero-stat-num { font-size: 2.1rem; font-weight: 900; color: hsl(29 80% 72%); line-height: 1; }
        .sol-hero-stat-lbl { font-size: 0.78rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }
        .sol-scroll-cue { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); z-index: 10; }

        /* TRUST BAR */
        .sol-trust { background: hsl(222 47% 8%); padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .sol-trust-label { text-align: center; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.3); font-weight: 700; margin-bottom: 16px; }
        .sol-trust-logos { display: flex; gap: 48px; overflow: hidden; }
        .sol-trust-tech { white-space: nowrap; font-size: 1rem; font-weight: 800; color: rgba(255,255,255,0.28); letter-spacing: 0.05em; flex-shrink: 0; transition: color 0.3s; }
        .sol-trust-tech:hover { color: hsl(29 80% 70%); }

        /* OVERVIEW */
        .sol-overview { padding: 100px 0; background: #fff; }
        .sol-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        @media (max-width: 900px) { .sol-overview-grid { grid-template-columns: 1fr; gap: 48px; } }

        .sol-section-tag {
          display: inline-block; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em;
          color: hsl(29 60% 50%); background: hsl(29 60% 50% / 0.08); border: 1px solid hsl(29 60% 50% / 0.2);
          padding: 4px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .sol-section-tag-dark {
          display: inline-block; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em;
          color: hsl(29 80% 72%); background: hsl(29 80% 72% / 0.12); border: 1px solid hsl(29 80% 72% / 0.22);
          padding: 4px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .sol-section-title {
          font-size: clamp(1.75rem, 3.2vw, 2.7rem); font-weight: 900; line-height: 1.15;
          color: hsl(222 47% 11%); margin-bottom: 22px; letter-spacing: -0.02em;
        }
        .sol-section-title-light {
          font-size: clamp(1.75rem, 3.2vw, 2.7rem); font-weight: 900; line-height: 1.15;
          color: #fff; margin-bottom: 22px; letter-spacing: -0.02em;
        }
        .sol-section-center { text-align: center; }
        .sol-overview-desc { font-size: 1.05rem; line-height: 1.85; color: hsl(222 30% 38%); margin-bottom: 28px; }
        .sol-highlight-row { display: flex; align-items: flex-start; gap: 12px; font-size: 0.97rem; color: hsl(222 40% 22%); margin-bottom: 12px; font-weight: 500; }
        .sol-check-icon { width: 20px; height: 20px; color: hsl(29 60% 50%); flex-shrink: 0; margin-top: 2px; }
        .sol-overview-visual { position: relative; }
        .sol-overview-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 20px; box-shadow: 0 32px 64px rgba(0,0,0,0.14); }
        .sol-floating-card {
          position: absolute; bottom: -20px; left: -20px; background: #fff;
          border: 1px solid hsl(0 0% 90%); border-radius: 16px; padding: 16px 20px;
          display: flex; align-items: center; gap: 14px; box-shadow: 0 16px 48px rgba(0,0,0,0.12);
        }
        .sol-floating-icon { width: 40px; height: 40px; border-radius: 10px; background: hsl(29 60% 50%); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sol-floating-title { font-weight: 700; font-size: 0.88rem; color: hsl(222 47% 11%); }
        .sol-floating-sub { font-size: 0.73rem; color: hsl(0 0% 50%); }

        /* PROBLEMS */
        .sol-problems { padding: 100px 0; background: hsl(222 47% 11%); }
        .sol-problems-sub { font-size: 1rem; color: rgba(255,255,255,0.5); max-width: 540px; margin: 0 auto 60px; line-height: 1.75; }
        .sol-problems-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 22px; }
        .sol-problem-card {
          background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 36px 30px; transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .sol-problem-card:hover { border-color: hsl(29 60% 56% / 0.35); background: rgba(255,255,255,0.06); transform: translateY(-4px); }
        .sol-problem-num { font-size: 2.8rem; font-weight: 900; color: hsl(29 60% 56% / 0.18); line-height: 1; margin-bottom: 18px; }
        .sol-problem-title { font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 12px; }
        .sol-problem-desc { font-size: 0.93rem; line-height: 1.75; color: rgba(255,255,255,0.52); }

        /* FEATURES TABS */
        .sol-features { padding: 100px 0; background: hsl(0 0% 98%); }
        .sol-tabs { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 40px 0 48px; }
        .sol-tab {
          padding: 10px 22px; border-radius: 100px; font-size: 0.88rem; font-weight: 700;
          border: 1px solid hsl(0 0% 88%); background: #fff; color: hsl(0 0% 42%); cursor: pointer; transition: all 0.25s;
        }
        .sol-tab:hover { border-color: hsl(29 60% 56%); color: hsl(29 60% 40%); }
        .sol-tab-active { background: hsl(29 60% 56%) !important; color: #fff !important; border-color: hsl(29 60% 56%) !important; box-shadow: 0 4px 16px hsl(29 60% 56% / 0.35); }
        .sol-tab-content { position: relative; min-height: 380px; }
        .sol-tab-panel { display: none; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        @media (max-width: 900px) { .sol-tab-panel { grid-template-columns: 1fr; gap: 32px; } }
        .sol-tab-panel-active { display: grid; }
        .sol-feat-icon-wrap {
          width: 58px; height: 58px; border-radius: 16px;
          background: hsl(29 60% 56% / 0.09); border: 1px solid hsl(29 60% 56% / 0.18);
          display: flex; align-items: center; justify-content: center; color: hsl(29 60% 48%); margin-bottom: 22px;
        }
        .sol-feat-title { font-size: 1.65rem; font-weight: 900; color: hsl(222 47% 11%); margin-bottom: 16px; letter-spacing: -0.02em; }
        .sol-feat-desc { font-size: 0.98rem; line-height: 1.82; color: hsl(0 0% 40%); margin-bottom: 24px; }
        .sol-feat-bullet { display: flex; align-items: flex-start; gap: 10px; font-size: 0.93rem; color: hsl(222 40% 22%); margin-bottom: 10px; font-weight: 500; }
        .sol-feat-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 18px; box-shadow: 0 24px 56px rgba(0,0,0,0.12); }

        /* STATS */
        .sol-stats { padding: 100px 0; position: relative; overflow: hidden; background: hsl(222 47% 10%); }
        .sol-stats-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 50%, hsl(29 60% 30% / 0.14) 0%, transparent 70%), radial-gradient(ellipse at 70% 50%, hsl(220 70% 40% / 0.09) 0%, transparent 70%);
        }
        .sol-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden; }
        .stat-card { padding: 48px 28px; text-align: center; background: rgba(255,255,255,0.028); border-right: 1px solid rgba(255,255,255,0.06); transition: background 0.3s; }
        .stat-card:last-child { border-right: none; }
        .stat-card:hover { background: rgba(255,255,255,0.055); }
        .stat-metric { font-size: clamp(2.4rem, 4.5vw, 3.8rem); font-weight: 900; color: hsl(29 80% 70%); line-height: 1; margin-bottom: 12px; letter-spacing: -0.03em; }
        .stat-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.42); }

        /* PROCESS TIMELINE */
        .sol-process { padding: 100px 0; background: #fff; }
        .sol-timeline { max-width: 780px; margin: 60px auto 0; display: flex; flex-direction: column; }
        .sol-timeline-item { display: flex; gap: 32px; }
        .sol-timeline-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 60px; }
        .sol-timeline-num {
          width: 46px; height: 46px; border-radius: 50%; background: hsl(29 60% 56%); color: #fff;
          font-weight: 900; font-size: 0.85rem; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-shadow: 0 4px 16px hsl(29 60% 56% / 0.35);
        }
        .sol-timeline-line { flex: 1; width: 2px; background: linear-gradient(to bottom, hsl(29 60% 56% / 0.35), transparent); margin: 8px 0; min-height: 40px; }
        .sol-timeline-body { padding-bottom: 48px; }
        .sol-timeline-title { font-size: 1.2rem; font-weight: 800; color: hsl(222 47% 11%); margin-bottom: 8px; }
        .sol-timeline-desc { font-size: 0.93rem; line-height: 1.78; color: hsl(0 0% 44%); margin-bottom: 12px; }
        .sol-timeline-duration {
          display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; font-weight: 700;
          color: hsl(29 60% 48%); background: hsl(29 60% 50% / 0.08); border: 1px solid hsl(29 60% 50% / 0.18);
          padding: 3px 12px; border-radius: 100px;
        }

        /* TECH STACK */
        .sol-tech { padding: 100px 0; background: hsl(0 0% 98%); border-top: 1px solid hsl(0 0% 92%); }
        .sol-tech-sub { font-size: 1rem; color: hsl(0 0% 44%); max-width: 500px; margin: 0 auto 56px; line-height: 1.7; }
        .sol-tech-grid { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
        .sol-tech-card {
          display: flex; align-items: center; gap: 12px; background: #fff;
          border: 1px solid hsl(0 0% 90%); border-radius: 14px; padding: 14px 22px;
          transition: all 0.25s; cursor: default; box-shadow: 0 2px 8px rgba(0,0,0,0.035);
        }
        .sol-tech-card:hover { border-color: hsl(29 60% 56%); box-shadow: 0 8px 24px hsl(29 60% 56% / 0.12); transform: translateY(-2px); }
        .sol-tech-icon-wrap { width: 36px; height: 36px; border-radius: 8px; background: hsl(29 60% 56% / 0.08); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sol-tech-name { font-size: 0.93rem; font-weight: 700; color: hsl(222 47% 14%); }

        /* WHY US */
        .sol-why { padding: 100px 0; background: #fff; border-top: 1px solid hsl(0 0% 92%); }
        .sol-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        @media (max-width: 900px) { .sol-why-grid { grid-template-columns: 1fr; gap: 48px; } }
        .sol-why-desc { font-size: 1.02rem; line-height: 1.82; color: hsl(0 0% 40%); margin-bottom: 32px; }
        .sol-why-cards { display: flex; flex-direction: column; gap: 18px; }
        .sol-why-card {
          display: flex; align-items: flex-start; gap: 18px; background: hsl(0 0% 98.5%);
          border: 1px solid hsl(0 0% 91%); border-radius: 16px; padding: 22px 24px; transition: all 0.25s;
        }
        .sol-why-card:hover { border-color: hsl(29 60% 56% / 0.3); box-shadow: 0 8px 24px rgba(0,0,0,0.055); transform: translateX(4px); }
        .sol-why-icon { width: 44px; height: 44px; border-radius: 12px; background: hsl(29 60% 56%); color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sol-why-card-title { font-size: 0.98rem; font-weight: 800; color: hsl(222 47% 11%); margin-bottom: 4px; }
        .sol-why-card-desc { font-size: 0.88rem; line-height: 1.65; color: hsl(0 0% 44%); }

        /* FAQ */
        .sol-faq { padding: 100px 0; background: hsl(0 0% 98%); border-top: 1px solid hsl(0 0% 92%); }
        .sol-faq-list { margin-top: 56px; display: flex; flex-direction: column; gap: 12px; }
        .sol-faq-item {
          background: #fff; border: 1px solid hsl(0 0% 90%); border-radius: 16px; overflow: hidden; transition: border-color 0.25s, box-shadow 0.25s;
        }
        .sol-faq-item:hover { border-color: hsl(29 60% 56% / 0.35); box-shadow: 0 4px 16px rgba(0,0,0,0.05); }
        .sol-faq-q {
          width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 22px 26px; text-align: left; font-size: 0.98rem; font-weight: 700; color: hsl(222 47% 11%);
          background: none; border: none; cursor: pointer; transition: color 0.2s;
        }
        .sol-faq-q:hover { color: hsl(29 60% 42%); }
        .sol-faq-chevron { width: 20px; height: 20px; color: hsl(29 60% 50%); transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); flex-shrink: 0; }
        .sol-faq-a { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.22,1,0.36,1); }
        .sol-faq-a-open { max-height: 400px; }
        .sol-faq-a p { padding: 0 26px 22px; font-size: 0.93rem; line-height: 1.82; color: hsl(0 0% 42%); border-top: 1px solid hsl(0 0% 93%); padding-top: 16px; margin: 0; }

        /* CTA */
        .sol-cta { position: relative; padding: 120px 0; overflow: hidden; background: hsl(222 47% 10%); }
        .sol-cta-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, hsl(29 60% 40% / 0.22) 0%, transparent 60%), radial-gradient(ellipse at 20% 100%, hsl(220 70% 50% / 0.09) 0%, transparent 60%);
        }
        .sol-cta-stars { display: flex; justify-content: center; gap: 4px; margin-bottom: 24px; }
        .sol-cta-title { font-size: clamp(1.9rem, 4vw, 3.1rem); font-weight: 900; color: #fff; margin-bottom: 20px; line-height: 1.15; letter-spacing: -0.025em; }
        .sol-cta-sub { font-size: 1.05rem; color: rgba(255,255,255,0.56); max-width: 560px; margin: 0 auto 48px; line-height: 1.78; }
        .sol-cta-btns { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin-bottom: 24px; }
        .sol-cta-btn-primary { background: hsl(29 60% 56%) !important; color: #fff !important; border: none !important; box-shadow: 0 8px 32px hsl(29 60% 56% / 0.32) !important; }
        .sol-cta-btn-primary:hover { background: hsl(29 60% 46%) !important; transform: translateY(-3px); box-shadow: 0 12px 40px hsl(29 60% 56% / 0.48) !important; }
        .sol-cta-btn-outline { border: 1px solid rgba(255,255,255,0.18) !important; background: rgba(255,255,255,0.055) !important; color: #fff !important; backdrop-filter: blur(8px); }
        .sol-cta-btn-outline:hover { background: rgba(255,255,255,0.11) !important; border-color: rgba(255,255,255,0.42) !important; }
        .sol-cta-note { font-size: 0.78rem; color: rgba(255,255,255,0.32); font-weight: 500; letter-spacing: 0.03em; }

        /* Responsive */
        @media (max-width: 640px) {
          .sol-hero-stat { padding: 0 18px 0 0; margin-right: 18px; }
          .sol-hero-stat-num { font-size: 1.5rem; }
          .stat-card { padding: 32px 18px; }
          .sol-timeline-item { gap: 14px; }
        }
      `}</style>
    </div>
  );
}