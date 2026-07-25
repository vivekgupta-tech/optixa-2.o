import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(options = { y: 50, duration: 0.8, stagger: 0.1, delay: 0 }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    const children = element.children;
    const targets = children.length > 0 ? Array.from(children) : element;

    gsap.set(targets, { opacity: 0, y: options.y });

    const tx = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: options.duration,
      stagger: options.stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      if (tx.scrollTrigger) {
        tx.scrollTrigger.kill();
      }
      tx.kill();
    };
  }, [options.y, options.duration, options.stagger]);

  return ref;
}
