import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/common/Button';
import { thankYou } from '@/data';

export default function ThankYou() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-gray-50 pt-32 pb-20">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="w-24 h-24 bg-red-100 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-5xl font-black text-black mb-6 tracking-tight">{thankYou.title}</h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          {thankYou.description}
        </p>
        <Button asChild size="lg" className="h-14 px-8">
          <Link href={thankYou.btn.link}>{thankYou.btn.text}</Link>
        </Button>
      </div>
    </div>
  );
}