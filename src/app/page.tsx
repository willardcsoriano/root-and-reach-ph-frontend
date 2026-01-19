// src\app\page.tsx
"use client";

import AboutSection from "@/components/pages/landing/AboutSection";
import CallToActionSection from "@/components/pages/landing/CallToActionSection";
import FAQSection from "@/components/pages/landing/FAQSection";
import FeaturedProductsSection from "@/components/pages/landing/FeaturedProductsSection";
import HeroSection from "@/components/pages/landing/HeroSection";
import HowItWorksSection from "@/components/pages/landing/HowItWorksSection";
import TestimonialsSection from "@/components/pages/landing/TestimonialsSection";
import WhyChooseUsSection from "@/components/pages/landing/WhyChooseUsSection";

const HomePage = () => {
  return (
    <div className="bg-gray-50 font-inter text-gray-800">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
