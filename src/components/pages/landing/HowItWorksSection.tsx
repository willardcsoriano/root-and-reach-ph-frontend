// src/components/sections/landing/HowItWorksSection.tsx
"use client";

import React from "react";
import { ShoppingCart, Truck, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface WorkStepProps {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

/* Motion variants */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const WorkStep: React.FC<WorkStepProps> = ({
  step,
  icon,
  title,
  description,
}) => (
  <motion.div
    variants={fadeUp}
    className="flex flex-col items-center text-center"
  >
    <div className="relative mb-6">
      <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <span className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full border-4 border-white shadow-md">
        {step}
      </span>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

    <p className="text-gray-600 text-base max-w-xs">{description}</p>
  </motion.div>
);

const HowItWorksSection = () => (
  <section className="py-16 md:py-24 bg-green-50 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dotted"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#a7f3d0" cx="2" cy="2" r="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted)" />
      </svg>
    </div>

    <motion.div
      className="container mx-auto px-6 text-center relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-800 mb-16"
        variants={fadeUp}
      >
        Simple Steps to Freshness
      </motion.h2>

      <motion.div
        className="relative grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8"
        variants={containerVariants}
      >
        {/* Dotted lines for desktop view */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-1">
          <svg width="100%" height="100%" className="overflow-visible">
            <line
              x1="20%"
              y1="0"
              x2="80%"
              y2="0"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeDasharray="5, 10"
            />
          </svg>
        </div>

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
      </motion.div>
    </motion.div>
  </section>
);

export default HowItWorksSection;
