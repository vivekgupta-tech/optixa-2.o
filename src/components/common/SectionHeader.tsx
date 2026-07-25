import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}) => {
  return (
    <ScrollReveal
      className={cn(
        'mb-12 md:mb-20',
        {
          'text-left': align === 'left',
          'text-center mx-auto': align === 'center',
          'text-right': align === 'right',
        },
        className
      )}
      y={30}
    >
      {subtitle && (
        <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
};
