// C:\Users\Willard\root-and-reach-ph-frontend\src\components\sections\landing\HowItWorks.tsx
"use client";

import React from "react";
import { ShoppingCart, Truck, Award } from "lucide-react";

interface WorkStepProps {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WorkStep: React.FC<WorkStepProps> = ({
  step,
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-6">
      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full border-4 border-white shadow-md">
        {step}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-base max-w-xs">{description}</p>
  </div>
);

const HowItWorksSection = () => (
  <section className="py-16 md:py-24 bg-green-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-12">
        Simple Steps to Freshness
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <WorkStep
          step="1"
          icon={<ShoppingCart size={48} className="text-white" />}
          title="Discover & Select"
          description="Browse a curated selection of fresh produce, artisanal goods, and more from local producers."
        />
        <WorkStep
          step="2"
          icon={<Truck size={48} className="text-white" />}
          title="Order & Connect"
          description="Place your order directly with the producer. Enjoy transparent communication and delivery options."
        />
        <WorkStep
          step="3"
          icon={<Award size={48} className="text-white" />}
          title="Enjoy & Support"
          description="Receive high-quality, fresh products and feel good knowing you're supporting local businesses."
        />
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
