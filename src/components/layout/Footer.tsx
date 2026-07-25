import React from 'react';
import { Link } from 'wouter';
import { Twitter, Linkedin, Github, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <span className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                OPTIXA
              </span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm">
              We build custom software, AI solutions, and scalable cloud platforms for modern businesses and growing startups.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">Insights</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/custom-software" className="text-muted-foreground hover:text-primary transition-colors">Custom Software</Link></li>
              <li><Link href="/services/ai-automation" className="text-muted-foreground hover:text-primary transition-colors">AI Automation</Link></li>
              <li><Link href="/services/cloud-solutions" className="text-muted-foreground hover:text-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/saas-development" className="text-muted-foreground hover:text-primary transition-colors">SaaS Development</Link></li>
              <li><Link href="/services/mobile-applications" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="text-primary font-medium hover:text-foreground transition-colors inline-flex items-center">All Services <ArrowRight className="w-3 h-3 ml-1" /></Link></li>
            </ul>
          </div>

          {/* Col 4: Solutions & Company */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="/process" className="text-muted-foreground hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/technologies" className="text-muted-foreground hover:text-primary transition-colors">Technologies</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">Industries</Link></li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-foreground mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest technology insights.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-muted border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <Button type="submit" size="sm" className="w-full">Subscribe</Button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Optixa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
