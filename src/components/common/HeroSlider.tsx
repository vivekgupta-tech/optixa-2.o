import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, A11y } from 'swiper/modules';
import { Button } from './Button';
import { Link } from 'wouter';
import { ArrowRight, ArrowLeft as LucideArrowLeft, ArrowRight as LucideArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80',
    title: 'Building the Future of Software',
    subtitle: 'Leverage AI, cloud platforms, and custom development to drive operational excellence and scale your business.',
    primaryCta: 'Explore Solutions',
    primaryLink: '/solutions',
    secondaryCta: 'Contact Us',
    secondaryLink: '/contact',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80',
    title: 'Scalable Cloud Platforms for Modern Businesses',
    subtitle: 'Resilient architectures, automated deployments, and DevOps strategies that accelerate your time-to-market.',
    primaryCta: 'Our Services',
    primaryLink: '/services',
    secondaryCta: 'Read Insights',
    secondaryLink: '/insights',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
    title: 'Custom Software That Works the Way You Do',
    subtitle: 'Stop compromising with off-the-shelf software. We engineer scalable, secure, and intuitive custom software solutions.',
    primaryCta: 'View Portfolio',
    primaryLink: '/portfolio',
    secondaryCta: 'Our Process',
    secondaryLink: '/process',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80',
    title: 'AI-Powered Solutions for Real Business Challenges',
    subtitle: 'Transform your operations with machine learning, automation, and predictive analytics.',
    primaryCta: 'Get a Quote',
    primaryLink: '/contact',
    secondaryCta: 'About Optixa',
    secondaryLink: '/about',
  }
];

export const HeroSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-sidebar group">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination, A11y]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass: 'hero-dot',
          bulletActiveClass: 'hero-dot-active',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        loop
        className="w-full h-full"
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                  index === activeIndex ? 'scale-100' : 'scale-105'
                }`}
              />
              <div className="absolute inset-0 bg-image-overlay" />
            </div>
            
            <div className="relative z-10 w-full h-full flex items-center">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl">
                  <h1 
                    className={`text-shadow-hero text-4xl md:text-6xl lg:text-7xl font-bold text-sidebar-foreground mb-6 leading-tight transition-all duration-1000 delay-100 ${
                      index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className={`text-shadow-md text-lg md:text-xl text-sidebar-foreground/90 mb-10 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ${
                      index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {slide.subtitle}
                  </p>
                  <div 
                    className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
                      index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href={slide.primaryLink}>
                        {slide.primaryCta}
                        <ArrowRight className="w-5 h-5 ml-2 inline-flex" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-sidebar-foreground/30 text-sidebar-foreground hover:bg-sidebar-foreground hover:text-sidebar bg-transparent">
                      <Link href={slide.secondaryLink}>
                        {slide.secondaryCta}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 container mx-auto px-4 md:px-8 flex justify-between items-center pointer-events-none">
        <div className="hero-pagination flex gap-3 pointer-events-auto" />
        
        <div className="flex gap-2 pointer-events-auto">
          <button 
            className="hero-prev w-12 h-12 rounded-full border border-sidebar-foreground/30 text-sidebar-foreground flex items-center justify-center hover:bg-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-foreground"
            aria-label="Previous slide"
          >
            <LucideArrowLeft className="w-5 h-5" />
          </button>
          <button 
            className="hero-next w-12 h-12 rounded-full border border-sidebar-foreground/30 text-sidebar-foreground flex items-center justify-center hover:bg-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-foreground"
            aria-label="Next slide"
          >
            <LucideArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-dot {
          width: 48px;
          height: 3px;
          background: var(--hero-dot-bg);
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .hero-dot-active {
          background: var(--primary);
          width: 64px;
        }
      `}} />
    </div>
  );
};

