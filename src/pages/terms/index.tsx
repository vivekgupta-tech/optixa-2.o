import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Terms() {
  return (
    <div className="w-full pt-12 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionHeader 
          title="Terms & Conditions" 
          subtitle="Legal"
          align="left"
        />
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Last Updated: October 2024</p>
          
          <h2 className="text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Optixa website and our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-foreground">2. Description of Services</h2>
          <p>
            Optixa provides software development, cloud architecture, AI integration, and technology consulting services. The specific deliverables, timelines, and costs for any project will be detailed in a separate Statement of Work (SOW) or contract.
          </p>

          <h2 className="text-foreground">3. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, all intellectual property rights in the custom software we develop for you will be transferred to you upon full payment of all related fees. Pre-existing frameworks or open-source tools utilized in the project remain the property of their respective owners.
          </p>

          <h2 className="text-foreground">4. Limitation of Liability</h2>
          <p>
            In no event shall Optixa be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.
          </p>

          <h2 className="text-foreground">5. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
}
