import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Cookies() {
  return (
    <div className="w-full pt-12 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionHeader 
          title="Cookie Policy" 
          subtitle="Legal"
          align="left"
        />
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Last Updated: October 2024</p>
          
          <h2 className="text-foreground">1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
          </p>

          <h2 className="text-foreground">2. How We Use Cookies</h2>
          <p>
            Optixa uses cookies to understand how you interact with our website, to remember your preferences, and to improve your overall experience. We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until deleted).
          </p>

          <h2 className="text-foreground">3. Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the basic operation of our site.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics).</li>
            <li><strong>Preference Cookies:</strong> Allow us to remember choices you make.</li>
          </ul>

          <h2 className="text-foreground">4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
