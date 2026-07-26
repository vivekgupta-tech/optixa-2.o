import React from 'react';
import { useLocation } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { contact } from '@/data';
import { Mail, MapPin, Clock, Twitter, Linkedin, Github, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setLocation('/thank-you');
    }, 500);
  };

  return (
    <div className="w-full bg-background">
      {/* 1. Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-sidebar">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              {contact.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {contact.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Split Layout — Contact Info + Form */}
      <section className="py-0 relative">
        <div className="grid lg:grid-cols-2">
          
          {/* Left Side (Info) */}
          <div className="bg-background p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-foreground mb-8">{contact.info.title}</h2>
              <div className="space-y-6 text-lg text-muted-foreground mb-12">
                <p>
                  {contact.info.paragraphs[0]}
                </p>
                <p>
                  {contact.info.paragraphs[1]}
                </p>
              </div>

              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">{contact.info.contactCards[0].label}</h4>
                    <a href={contact.info.contactCards[0].href} className="text-xl font-bold text-foreground hover:text-primary transition-colors">{contact.info.contactCards[0].value}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">{contact.info.contactCards[1].label}</h4>
                    <p className="text-xl font-bold text-foreground">{contact.info.contactCards[1].value}<br/><span className="text-base text-muted-foreground font-medium">{contact.info.contactCards[1].subValue}</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">{contact.info.contactCards[2].label}</h4>
                    <p className="text-xl font-bold text-foreground">{contact.info.contactCards[2].value}<br/><span className="text-base text-muted-foreground font-medium">{contact.info.contactCards[2].subValue}</span></p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">{contact.info.followLabel}</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:bg-foreground hover:text-background transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:bg-foreground hover:text-background transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:bg-foreground hover:text-background transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side (Form) */}
          <div className="bg-muted p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto w-full">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">{contact.form.fields.fullName.label}</label>
                    <input type="text" required className="w-full bg-background border border-border p-4 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder={contact.form.fields.fullName.placeholder} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">{contact.form.fields.email.label}</label>
                    <input type="email" required className="w-full bg-background border border-border p-4 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder={contact.form.fields.email.placeholder} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">{contact.form.fields.company.label}</label>
                    <input type="text" className="w-full bg-background border border-border p-4 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder={contact.form.fields.company.placeholder} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">{contact.form.fields.phone.label}</label>
                    <input type="tel" className="w-full bg-background border border-border p-4 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder={contact.form.fields.phone.placeholder} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">{contact.form.fields.service.label}</label>
                  <select required className="w-full bg-background border border-border p-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none rounded-none">
                    <option value="">{contact.form.fields.service.placeholder}</option>
                    {contact.form.fields.service.options.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">{contact.form.fields.budget.label}</label>
                  <select required className="w-full bg-background border border-border p-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none rounded-none">
                    <option value="">{contact.form.fields.budget.placeholder}</option>
                    {contact.form.fields.budget.options.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">{contact.form.fields.details.label}</label>
                  <textarea required minLength={50} rows={5} className="w-full bg-background border border-border p-4 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder={contact.form.fields.details.placeholder}></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full h-16 text-lg bg-primary hover:bg-foreground text-white">
                  {contact.form.submitBtn}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">{contact.form.privacyNote}</p>
              </form>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. Why Contact Us */}
      <section className="py-24 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
            {contact.whyContact.map((feat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2">{feat.title}</h4>
                <p className="text-muted-foreground">{feat.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground">{contact.faq.title}</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {contact.faq.items.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-muted border border-border p-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xl text-foreground">
                    {faq.q}
                    <ChevronDown className="w-6 h-6 text-primary group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4 text-lg leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}