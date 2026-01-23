// src/components/sections/landing/WhyChooseUsSection.tsx
"use client";

import React from "react";
import {
  UserCheck,
  MapPin,
  DollarSign,
  Award,
  Clock,
  MessageCircle,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/* Motion variants */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    variants={fadeUp}
    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </motion.div>
);

const WhyChooseUsSection = () => (
  <section className="py-16 md:py-24 bg-gray-100">
    <motion.div
      className="container mx-auto px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6"
        variants={fadeUp}
      >
        Why Choose Root & Reach?
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        variants={fadeUp}
      >
        We&apos;re more than just a marketplace; we&apos;re a movement towards a
        better, more connected food system.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <FeatureCard
          icon={<UserCheck size={40} className="text-green-600" />}
          title="Direct from Producers"
          description="No middlemen. Get your goods straight from the hands that grew or made them."
        />
        <FeatureCard
          icon={<MapPin size={40} className="text-green-600" />}
          title="Hyper-Local Sourcing"
          description="Support your community and reduce your carbon footprint by buying locally."
        />
        <FeatureCard
          icon={<DollarSign size={40} className="text-green-600" />}
          title="Fair Prices"
          description="Benefit from fair prices for consumers and equitable earnings for producers."
        />
        <FeatureCard
          icon={<Award size={40} className="text-green-600" />}
          title="Guaranteed Quality"
          description="Our producers are vetted for quality, ensuring you receive only the best."
        />
        <FeatureCard
          icon={<Clock size={40} className="text-green-600" />}
          title="Seasonal Freshness"
          description="Enjoy produce at its peak, aligned with natural growing seasons."
        />
        <FeatureCard
          icon={<MessageCircle size={40} className="text-green-600" />}
          title="Community Focused"
          description="Join a growing community passionate about sustainable living and local support."
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhyChooseUsSection;
