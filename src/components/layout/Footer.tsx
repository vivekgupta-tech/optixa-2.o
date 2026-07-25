import React from 'react';
import { Link } from 'wouter';
import { Twitter, Linkedin, Github, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { footer } from '@/data';

export const Footer: React.FC = () => {
  const { brand, social, columns, newsletter, bottom } = footer;

  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <span className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                {brand.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm">
              {brand.description}
            </p>
            <div className="flex gap-4">
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Github className="w-4 h-4" />
              </a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{columns.quickLinks.title}</h4>
            <ul className="flex flex-col gap-3">
              {columns.quickLinks.links.map((link, idx) => (
                <li key={idx}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{columns.services.title}</h4>
            <ul className="flex flex-col gap-3">
              {columns.services.links.map((link, idx) => (
                <li key={idx}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
              <li><Link href={columns.services.viewAll.href} className="text-primary font-medium hover:text-foreground transition-colors inline-flex items-center">{columns.services.viewAll.label} <ArrowRight className="w-3 h-3 ml-1" /></Link></li>
            </ul>
          </div>

          {/* Col 4: Solutions & Company */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{columns.company.title}</h4>
            <ul className="flex flex-col gap-3">
              {columns.company.links.map((link, idx) => (
                <li key={idx}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-foreground mb-6">{newsletter.title}</h4>
            <p className="text-sm text-muted-foreground mb-4">{newsletter.description}</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={newsletter.placeholder} 
                className="w-full bg-muted border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <Button type="submit" size="sm" className="w-full">{newsletter.buttonText}</Button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {bottom.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            {bottom.links.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
