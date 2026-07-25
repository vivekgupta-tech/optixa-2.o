import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { ArrowRight, Code, Laptop, Heart, Map, Clock, Shield, Plane, Zap } from 'lucide-react';

export default function Careers() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80" 
            alt="Careers Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>Careers at Optixa</span>
            <h1 className="text-5xl md:text-7xl font-black text-sidebar-foreground mb-8 tracking-tight" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)' }}>
              Build the Future With Us
            </h1>
            <p className="text-xl md:text-2xl text-sidebar-foreground/90 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>
              We are a team of passionate engineers and designers. Join us in building high-performance software for the world's most innovative companies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Why Join Optixa — 3 Wide Rows */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black">Why Join Optixa</h2>
          </ScrollReveal>

          <div className="space-y-16 max-w-5xl mx-auto">
            {[
              {
                icon: <Code className="w-12 h-12 text-primary" />,
                title: "Accelerated Technical Growth",
                desc: "Forget maintaining legacy 10-year-old codebases. Here, you will build greenfield projects using the latest stacks (Next.js, Go, Rust, AWS). You will learn more in your first 6 months here than you would in 2 years at a massive corporation."
              },
              {
                icon: <Laptop className="w-12 h-12 text-primary" />,
                title: "Creative Freedom",
                desc: "We don't micromanage. If you find a better architectural pattern or a faster way to solve a problem, we want you to implement it. We hire smart people and get out of their way."
              },
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: "Real Impact",
                desc: "You aren't a cog in a machine. Your code will ship to production constantly, directly impacting our clients' businesses. You will see the immediate results of your engineering efforts."
              }
            ].map((row, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                <div className="w-24 h-24 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  {row.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black mb-4">{row.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{row.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits — 2-column list */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">The Perks</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { icon: <Map />, title: "Remote-First", desc: "Work from anywhere. We care about your output, not your location." },
              { icon: <Heart />, title: "Health Coverage", desc: "Comprehensive medical benefits for you and your dependents." },
              { icon: <Clock />, title: "Flexible Hours", desc: "Set your own schedule as long as core team hours are met." },
              { icon: <Laptop />, title: "Top-Tier Gear", desc: "MacBook Pro, 4K monitors, and whatever software you need to succeed." },
              { icon: <Plane />, title: "Generous PTO", desc: "Take the time you need to recharge. Burnout serves no one." },
              { icon: <Shield />, title: "Learning Budget", desc: "Annual stipend for courses, conferences, and certifications." }
            ].map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 shrink-0 text-primary">
                  {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-1">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Culture Section — Full-width image background */}
      <section className="relative py-32 bg-sidebar text-sidebar-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
            alt="Team Culture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-sidebar-foreground mb-6" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)' }}>No Egos. Just Engineering.</h2>
            <p className="text-xl text-sidebar-foreground/90 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>
              We foster a culture of intense curiosity and mutual respect. The best idea wins, regardless of whose title is highest. We debate architecture passionately, write clean code, and celebrate our launches together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Hiring Process — Numbered Horizontal Steps */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">How We Hire</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gray-100" />
            
            {[
              { step: "1", title: "Introduction Call", desc: "A 30-minute chat to align on culture and expectations." },
              { step: "2", title: "Technical Screen", desc: "A practical pairing session. No whiteboard riddles." },
              { step: "3", title: "Architecture Chat", desc: "Discussing systems design with our lead engineers." },
              { step: "4", title: "Offer", desc: "We move fast and present a fair, transparent offer." }
            ].map((stage, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative z-10 bg-white pt-4">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6 border-4 border-white shadow-sm">
                  {stage.step}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg text-black mb-2">{stage.title}</h4>
                  <p className="text-gray-500 text-sm">{stage.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Open Positions — HONEST EMPTY STATE */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center bg-white p-12 md:p-16 border border-gray-200 shadow-sm rounded-xl">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <Code className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-black mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 mb-8">
              We are currently scaling our engineering teams, but do not have public listings available at this exact moment. Check back soon.
            </p>
            <div className="bg-red-50 p-6 rounded-lg text-left">
              <h4 className="font-bold text-primary mb-2">Think you'd be a great fit anyway?</h4>
              <p className="text-gray-700 mb-4">We are always eager to meet exceptional Senior React/Next.js Engineers and Cloud Architects.</p>
              <a href="mailto:careers@optixa.io" className="text-black font-bold flex items-center gap-2 hover:text-primary transition-colors">
                Send your CV to careers@optixa.io <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}