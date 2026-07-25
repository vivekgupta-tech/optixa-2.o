import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  slug: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  shortDescription,
  description,
  icon,
  image,
  slug,
  className
}) => {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("group perspective-[1000px] h-[400px] w-full cursor-pointer", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-[550ms] ease-out preserve-3d shadow-md rounded-2xl",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-card">
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white w-full">
            {Icon && <Icon className="w-8 h-8 mb-4 text-primary" />}
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-200 line-clamp-2">{shortDescription}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white p-8 flex flex-col border border-border">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <Link href={`/services/${slug}`} className="inline-flex items-center text-primary font-semibold hover:text-foreground transition-colors group/link mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
            Learn More <LucideIcons.ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
