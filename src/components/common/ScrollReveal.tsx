import React, { useEffect, useRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  y = 30,
  duration = 0.7,
  delay = 0,
  as: _as,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    // Initial hidden state
    el.style.opacity = '0';
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [y, duration, delay, prefersReducedMotion]);

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
};
