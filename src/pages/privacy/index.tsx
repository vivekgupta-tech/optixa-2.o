import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Privacy() {
  return (
    <div className="w-full pt-12 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionHeader 
          title="Privacy Policy" 
          subtitle="Legal"
          align="left"
        />
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Last Updated: October 2024</p>
          
          <h2 className="text-foreground">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you fill out a contact form, request a quote, or subscribe to our newsletter. This may include your name, email address, phone number, and any other details you choose to provide.
          </p>

          <h2 className="text-foreground">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, communicate with you, respond to your inquiries, and send you technical insights if you have opted into our newsletter.
          </p>

          <h2 className="text-foreground">3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
          </p>

          <h2 className="text-foreground">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-foreground">5. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at privacy@optixa.io.
          </p>
        </div>
      </div>
    </div>
  );
}
