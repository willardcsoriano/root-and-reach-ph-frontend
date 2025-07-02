// src/components/sections/about/HeroSection.tsx
import React from 'react';
import { Button } from '@/components/ui/Button';

const HeroSection: React.FC = () => (
  <section className="bg-green-50 py-20 px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
      Connecting Communities, Cultivating Trust
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
      Root and Reach PH bridges local producers and conscious consumers in the Philippines.
    </p>
    <Button href="/signup" variant="primary" className="mt-8 max-w-xs mx-auto">
      Get Started
    </Button>
  </section>
);

export default HeroSection;
