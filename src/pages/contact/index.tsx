import React from 'react';
import { useLocation } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
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
    <div className="w-full bg-white">
      {/* 1. Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Start a Conversation
            </h1>
            <p className="text-xl text-gray-400">
              Ready to engineer your next digital platform? Reach out to our technical team to discuss architecture, process, and feasibility.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Split Layout — Contact Info + Form */}
      <section className="py-0 relative">
        <div className="grid lg:grid-cols-2">
          
          {/* Left Side (Info) */}
          <div className="bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-black mb-8">Let's Build Together</h2>
              <div className="space-y-6 text-lg text-gray-600 mb-12">
                <p>
                  We typically begin engagements with a thorough discovery phase or a technical audit of your existing infrastructure.
                </p>
                <p>
                  Fill out the form with your project details, and a senior architect or engineering manager will be in touch within 24 hours. No salespeople.
                </p>
              </div>

              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-primary flex items-center justify-center rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Email Us</h4>
                    <a href="mailto:hello@optixa.io" className="text-xl font-bold text-black hover:text-primary transition-colors">hello@optixa.io</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-primary flex items-center justify-center rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Location</h4>
                    <p className="text-xl font-bold text-black">Lahore, Pakistan<br/><span className="text-base text-gray-500 font-medium">Remote-First Global Team</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-primary flex items-center justify-center rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Working Hours</h4>
                    <p className="text-xl font-bold text-black">Mon–Fri, 9am–6pm PKT<br/><span className="text-base text-gray-500 font-medium">Flexible timezone overlap</span></p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side (Form) */}
          <div className="bg-[#F7F7F8] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto w-full">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Full Name *</label>
                    <input type="text" required className="w-full bg-white border border-gray-300 p-4 text-black focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Email Address *</label>
                    <input type="email" required className="w-full bg-white border border-gray-300 p-4 text-black focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Company (Optional)</label>
                    <input type="text" className="w-full bg-white border border-gray-300 p-4 text-black focus:outline-none focus:border-primary transition-colors" placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Phone (Optional)</label>
                    <input type="tel" className="w-full bg-white border border-gray-300 p-4 text-black focus:outline-none focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">Service Interested In *</label>
                  <select required className="w-full bg-white border border-gray-300 p-4 text-black focus:outline-none focus:border-primary transition-colors appearance-none rounded-none">
                    <option value="">Select a service...</option>
                    <option value="ai">AI Development</option>
                    <option value="custom">Custom Software</option>
                    <option value="web">Web Application</option>
                    <option value="cloud">Cloud Engineering</option>
                    <option value="mobile">Mobile App</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="consulting">Architecture Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">Project Budget *</label>
                  <select required className="w-full bg-white border border-gray-300 p-4 text-black focus:outline-none focus:border-primary transition-colors appearance-none rounded-none">
                    <option value="">Select budget range...</option>
                    <option value="under5k">Under $5k (Consulting Only)</option>
                    <option value="5k-20k">$5k – $20k</option>
                    <option value="20k-50k">$20k – $50k</option>
                    <option value="50k+">$50k+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">Project Details *</label>
                  <textarea required minLength={50} rows={5} className="w-full bg-white border border-gray-300 p-4 text-black focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your business goals and technical requirements... (min 50 chars)"></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full h-16 text-lg bg-primary hover:bg-black text-white">
                  Send Message
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">We respect your privacy. No spam, ever.</p>
              </form>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. Why Contact Us */}
      <section className="py-24 bg-[#111] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
            {[
              { title: "No Salespeople", desc: "You will speak directly to a technical leader who understands architecture." },
              { title: "Rapid Response", desc: "We review inquiries daily and respond within 24 hours." },
              { title: "Honest Assessment", desc: "If we aren't the right fit for your tech stack, we will tell you immediately." },
              { title: "NDA Ready", desc: "We are happy to sign standard NDAs before discussing proprietary details." }
            ].map((feat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2">{feat.title}</h4>
                <p className="text-gray-400">{feat.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-black">Engagement FAQ</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: "What happens after I fill out this form?", a: "A technical lead will review your submission and email you to schedule a 30-minute introductory call. During that call, we'll discuss your business goals, tech stack, and determine if there's a mutual fit." },
              { q: "Do you offer fixed-price contracts?", a: "Yes, for projects with highly rigid and pre-defined scopes. However, we generally recommend Agile retainers (Time & Materials) as it allows for much greater flexibility and faster time-to-market." },
              { q: "Can we hire a single developer or do we need a full team?", a: "We primarily deploy full cross-functional pods (e.g., 1 Lead, 2 Frontend, 1 Backend, 1 QA). However, we do offer staff augmentation for specific senior roles if you already have an established engineering culture." },
              { q: "Do you work with startups seeking equity exchanges?", a: "We generally operate on a standard fee-for-service model. We do not accept equity in lieu of payment, ensuring you keep full ownership of your company." },
              { q: "Where is your team located?", a: "We are a remote-first team headquartered in Lahore, Pakistan, with engineers across multiple time zones to ensure overlap with US, European, and MENA clients." },
              { q: "Will you sign our NDA?", a: "Absolutely. We can use your standard NDA or provide our own mutual NDA before discussing any sensitive IP." }
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-gray-50 border border-gray-200 p-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xl text-black">
                    {faq.q}
                    <ChevronDown className="w-6 h-6 text-primary group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-gray-600 mt-4 text-lg leading-relaxed border-t border-gray-200 pt-4">
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