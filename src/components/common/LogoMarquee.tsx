import React from 'react';
import { cn } from '@/lib/utils';

export const LogoMarquee: React.FC = () => {
  const logos = [
    { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Python', url: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonwebservices/232F3E' },
    { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Kubernetes', url: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
    { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'Google Cloud', url: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { name: 'Figma', url: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Tailwind CSS', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  ];

  return (
    <div className="w-full overflow-hidden bg-muted py-12 relative flex items-center">
      {/* Gradients for smooth fade out at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />

      <div className="flex w-[200%] animate-marquee">
        {/* First set */}
        <div className="flex w-1/2 justify-around items-center px-4">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 px-8">
              <img src={logo.url} alt={`${logo.name} logo`} className="h-10 w-auto object-contain mb-2" />
              <span className="text-xs font-medium text-muted-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
        {/* Duplicated set for infinite loop */}
        <div className="flex w-1/2 justify-around items-center px-4">
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 px-8">
              <img src={logo.url} alt={`${logo.name} logo`} className="h-10 w-auto object-contain mb-2" />
              <span className="text-xs font-medium text-muted-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};
