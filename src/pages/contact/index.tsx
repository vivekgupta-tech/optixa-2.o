import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { contact } from '@/data';
import {
  Mail,
  Clock,
  Phone,
  Send,
  MessageSquare,
  Handshake,
  Globe,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setLocation('/thank-you');
    }, 500);
  };

  return (
    <div className="w-full bg-background min-h-screen text-foreground">
      {/* 1. HERO BANNER SECTION (Matched with Careers Hero styling) */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-sidebar text-sidebar-foreground overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          {/* <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000"
            alt="Contact Our Team"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          /> */}
          <img
            src="https://plus.unsplash.com/premium_photo-1661371394983-42485fed3a58?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact Our Team"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
              Get a Fast Quote
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Contact <span className="text-primary">Our Team</span> Today
            </h1>
            <p className="text-xl md:text-2xl text-sidebar-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Have questions about our software development or need a custom engineering quote? We&apos;re here to help with your global project requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. MAIN SPLIT SECTION (INFO LEFT | FORM RIGHT) */}
      <section id="inquiry-form" className="py-16 md:py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN - REACH OUT & COMPANY INFO */}
            <div className="lg:col-span-5 space-y-10">
              <ScrollReveal>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Reach Out</span>
                  <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-6">
                    Let&apos;s Start a <span className="text-primary">Conversation</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    Whether you're planning a new software product, modernizing existing systems, or expanding your digital capabilities, our team is ready to help. We work closely with businesses of all sizes to understand their goals, recommend the right technology solutions, and deliver reliable, scalable results
                  </p>

                </div>
              </ScrollReveal>

              {/* COMPANY INFORMATION GRID */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Building className="w-4 h-4" />
                    <span>Company Information</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-card border border-border p-4 rounded-xl">
                      <span className="text-xs font-semibold uppercase text-muted-foreground block mb-1">Company Name</span>
                      <p className="font-bold text-foreground text-sm">Optixa Global</p>
                    </div>

                    <div className="bg-card border border-border p-4 rounded-xl">
                      <span className="text-xs font-semibold uppercase text-muted-foreground block mb-1">Business Type</span>
                      <p className="font-bold text-foreground text-sm">AI & Custom Engineering</p>
                    </div>

                    <div className="bg-card border border-border p-4 rounded-xl">
                      <span className="text-xs font-semibold uppercase text-muted-foreground block mb-1">Location</span>
                      <p className="font-bold text-foreground text-sm">{contact.info.contactCards[1].value}</p>
                      <span className="text-xs text-muted-foreground">{contact.info.contactCards[1].subValue}</span>
                    </div>

                    <div className="bg-card border border-border p-4 rounded-xl">
                      <span className="text-xs font-semibold uppercase text-muted-foreground block mb-1">Working Hours</span>
                      <p className="font-bold text-foreground text-sm">{contact.info.contactCards[2].value}</p>
                      <span className="text-xs text-muted-foreground">{contact.info.contactCards[2].subValue}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* DIRECT CONTACT LIST */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    Share your project requirements, business challenges, or technology questions with us. From the initial consultation to project delivery and ongoing support, we focus on transparent communication, practical solutions, and long-term partnerships that drive measurable business value.                  </p>
                  {/* <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Phone className="w-4 h-4" />
                    <span>Direct Contact</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-card/60 border border-border p-4 rounded-xl flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase text-muted-foreground block">Phone / WhatsApp</span>
                        <a href="tel:+923001234567" className="font-bold text-foreground hover:text-primary transition-colors text-sm">+92 300 1234567</a>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <a href="tel:+15550000000" className="font-bold text-foreground hover:text-primary transition-colors text-sm">+1 (555) 000-0000</a>
                      </div>
                    </div>

                    <div className="bg-card/60 border border-border p-4 rounded-xl flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase text-muted-foreground block">Email Address</span>
                        <a href={contact.info.contactCards[0].href} className="font-bold text-foreground hover:text-primary transition-colors text-sm">
                          {contact.info.contactCards[0].value}
                        </a>
                      </div>
                    </div>

                    <div className="bg-card/60 border border-border p-4 rounded-xl flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase text-muted-foreground block">Response Time</span>
                        <p className="font-bold text-foreground text-sm">Within 24 business hours</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN - INQUIRY FORM CARD */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">

                  {/* FORM HEADER */}
                  <div className="flex items-center gap-3 pb-6 mb-8 border-b border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-md">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">Send Us Your Inquiry</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Request a Quote & Project Estimate</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* ROW 1: FULL NAME & COMPANY NAME */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* ROW 2: COUNTRY & EMAIL ADDRESS */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Country *</label>
                        <input
                          type="text"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* ROW 3: PHONE / WHATSAPP & SERVICE TYPE */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Product / Service Type</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        >
                          <option value="">Select service type...</option>
                          {contact.form.fields.service.options.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* ROW 4: BUDGET & TIMELINE */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        >
                          <option value="">Select budget range...</option>
                          {contact.form.fields.budget.options.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Timeline / Urgency</label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          placeholder="e.g. Immediate, 1-2 months"
                          className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* ROW 5: SPECIFICATIONS & DETAILS */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Custom Specifications or Requirements</label>
                      <textarea
                        name="details"
                        rows={4}
                        required
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Describe any custom specifications, architecture reference, or additional requirements..."
                        className="w-full bg-muted/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      />
                    </div>

                    {/* NOTICE NOTE */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                      <span>Providing detailed specifications helps us respond quickly and efficiently.</span>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 bg-primary text-primary-foreground hover:brightness-110 font-bold tracking-wider uppercase text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      <Send className="w-4 h-4" />
                      Send Inquiry / Request Quote
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GLOBAL HQ & MAP SECTION (Full width, rounded-none) */}
      {/* <section className="w-full py-16 md:py-24 bg-card border-y border-border rounded-none">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ScrollReveal>
       
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Our Global HQ</h3>
                  <p className="text-xs text-muted-foreground">Ghaziabad, Uttar Pradesh, India • Global Headquarters</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Ghaziabad,Uttar+Pradesh,India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shrink-0"
              >
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            
            <div className="w-full h-[360px] md:h-[450px] rounded-none overflow-hidden border border-border relative bg-muted">
              <iframe
                title="Optixa HQ Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.502905187747!2d77.41724835!3d28.6691565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f065dc9f0d5f22!2sGhaziabad%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* 4. CALL TO ACTION (CTA) BANNER (Full width, rounded-none) */}
      {/* <section className="w-full py-20 md:py-28 bg-sidebar text-sidebar-foreground border-y border-sidebar-border rounded-none text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Let&apos;s Build a Strong Business Relationship
            </h2>
            
            <p className="text-sidebar-foreground/70 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              If you are looking for a reliable software & AI partner, we would be pleased to discuss your requirements and provide a competitive quote tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+923001234567" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>

              <a 
                href="https://wa.me/923001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 font-bold uppercase text-xs tracking-widest transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* 5. FAQ ACCORDION SECTION */}
      {/* <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{contact.faq.title}</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {contact.faq.items.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="bg-card border border-border p-6 rounded-xl">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg md:text-xl text-foreground">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}