import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { services } from '@/data/services';
import { solutions } from '@/data/solutions';
import { industries } from '@/data/industries';
import { navbar } from '@/data';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const { navLinks, megaMenu, actions, mobileMenu, logo } = navbar;


  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-background py-6 border-b border-border'
      )}
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <span className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
              {logo}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-1 xl:gap-4">
              {navLinks.map((link) => (
                <li 
                  key={link.href} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary px-3 py-2 rounded-md",
                      location === link.href || (location.startsWith(link.href) && link.href !== '/') 
                        ? "text-primary bg-primary/5" 
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                  </Link>

                  {/* Mega Menu Dropdowns */}
                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] z-50">
                      <div className="bg-background rounded-xl shadow-xl border border-border overflow-hidden flex animate-in slide-in-from-top-2 duration-200">
                        {/* Services Dropdown */}
                        {link.label === 'Services' && (
                          <div className="p-6 grid grid-cols-2 gap-4 w-full">
                            {services.slice(0, 6).map(service => (
                              <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item">
                                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:scale-110 transition-transform">
                                  <span className="font-bold text-sm">{service.title.charAt(0)}</span>
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">{service.title}</h4>
                                  <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{service.shortDescription}</p>
                                </div>
                              </Link>
                            ))}
                            <div className="col-span-2 pt-4 mt-2 border-t border-border flex justify-between items-center px-3">
                              <span className="text-sm font-medium text-muted-foreground">{megaMenu.services.exploreText}</span>
                              <Link href={megaMenu.services.viewAllLink} className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                                {megaMenu.services.viewAllText} <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                            </div>
                          </div>
                        )}

                        {/* Solutions Dropdown */}
                        {link.label === 'Solutions' && (
                          <div className="p-6 grid grid-cols-2 gap-4 w-full">
                            {solutions.slice(0, 4).map(solution => (
                              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item">
                                <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-foreground shrink-0 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                  <span className="font-bold text-sm">{solution.title.charAt(0)}</span>
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">{solution.title}</h4>
                                  <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{solution.shortDescription}</p>
                                </div>
                              </Link>
                            ))}
                            <div className="col-span-2 pt-4 mt-2 border-t border-border flex justify-between items-center px-3">
                              <span className="text-sm font-medium text-muted-foreground">{megaMenu.solutions.exploreText}</span>
                              <Link href={megaMenu.solutions.viewAllLink} className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                                {megaMenu.solutions.viewAllText} <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                            </div>
                          </div>
                        )}

                        {/* Industries Dropdown */}
                        {link.label === 'Industries' && (
                          <div className="p-6 grid grid-cols-2 gap-4 w-full">
                            {industries.slice(0, 6).map(industry => (
                              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item">
                                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover/item:border-primary group-hover/item:text-primary transition-colors">
                                  <ChevronRight className="w-4 h-4" />
                                </div>
                                <h4 className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">{industry.title}</h4>
                              </Link>
                            ))}
                            <div className="col-span-2 pt-4 mt-2 border-t border-border flex justify-end items-center px-3">
                              <Link href={megaMenu.industries.viewAllLink} className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                                {megaMenu.industries.viewAllText} <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild size="default" className="font-semibold shadow-md">
              <Link href={actions.getQuoteLink}>{actions.getQuote}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 z-50 relative text-foreground focus-visible:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 lg:hidden transition-transform duration-500 ease-in-out flex flex-col pt-24 pb-8 px-6 overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-2 mb-8 flex-1">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-border pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  className={cn(
                    "block py-3 text-xl font-bold transition-colors w-full",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className="p-3 text-muted-foreground hover:text-primary"
                  >
                    <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === link.label ? "rotate-180" : "")} />
                  </button>
                )}
              </div>
              
              {/* Mobile Dropdown */}
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="pl-4 pb-4 flex flex-col gap-3 animate-in slide-in-from-top-2">
                  {link.label === 'Services' && services.slice(0, 6).map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="text-muted-foreground font-medium py-1">{s.title}</Link>
                  ))}
                  {link.label === 'Solutions' && solutions.slice(0, 4).map(s => (
                    <Link key={s.slug} href={`/solutions/${s.slug}`} className="text-muted-foreground font-medium py-1">{s.title}</Link>
                  ))}
                  {link.label === 'Industries' && industries.slice(0, 6).map(i => (
                    <Link key={i.slug} href={`/industries/${i.slug}`} className="text-muted-foreground font-medium py-1">{i.title}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li className="pt-2">
            <Link
              href={mobileMenu.contactLink}
              className={cn(
                "block py-3 text-xl font-bold transition-colors w-full",
                location === mobileMenu.contactLink ? "text-primary" : "text-foreground"
              )}
            >
              {mobileMenu.contact}
            </Link>
          </li>
        </ul>
        <Button asChild size="lg" className="w-full h-14 text-lg">
          <Link href={actions.getQuoteLink}>{actions.getQuote}</Link>
        </Button>
      </div>
    </header>
  );
};