import React from 'react';
import { cookies } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Cookies() {
  return (
    <div className="w-full pt-12 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionHeader 
          title={cookies.title} 
          subtitle={cookies.subtitle}
          align="left"
        />
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>{cookies.lastUpdated}</p>
          
          {cookies.sections.map((sec, i) => (
            <React.Fragment key={i}>
              <h2 className="text-foreground">{sec.heading}</h2>
              {sec.content && <p>{sec.content}</p>}
              {sec.listItems && (
                <ul>
                  {sec.listItems.map((item, j) => (
                    <li key={j}><strong>{item.strong}</strong>{item.text}</li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
