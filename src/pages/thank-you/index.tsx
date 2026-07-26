import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/common/Button';

export default function ThankYou() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-muted pt-32 pb-20">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-5xl font-black text-foreground mb-6 tracking-tight">Message Received</h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          Thank you for reaching out. A senior engineer will review your project details and contact you within 24 hours to schedule our discovery call.
        </p>
        <Button asChild size="lg" className="h-14 px-8">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}