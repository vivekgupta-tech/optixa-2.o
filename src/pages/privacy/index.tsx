import React from 'react';
import { privacy } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Privacy() {
  return (
    <div className="w-full pt-12 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionHeader 
          title={privacy.title} 
          subtitle={privacy.subtitle}
          align="left"
        />
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>{privacy.lastUpdated}</p>
          
          {privacy.sections.map((sec, i) => (
            <React.Fragment key={i}>
              <h2 className="text-foreground">{sec.heading}</h2>
              <p>{sec.content}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
