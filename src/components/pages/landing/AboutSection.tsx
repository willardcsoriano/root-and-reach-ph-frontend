// src/components/sections/landing/AboutSection.tsx
"use client";

import React from "react";
import { Leaf, Handshake, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface AboutCardProps {
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

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => (
  <motion.div
    variants={fadeUp}
    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out group"
  >
    <div className="flex justify-center mb-6 group-hover:animate-bounce-once">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </motion.div>
);

const AboutSection = () => (
  <section className="py-16 md:py-24 bg-white">
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
        Our Mission: Connecting Communities
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        variants={fadeUp}
      >
        At Root & Reach, we believe in the power of direct connections. We
        bridge the gap between dedicated local producers and conscious
        consumers, fostering a sustainable ecosystem where quality, fairness,
        and community thrive.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <AboutCard
          icon={<Leaf size={48} className="text-green-600" />}
          title="Fresh & Local"
          description="Direct from farm to table, ensuring unparalleled freshness and supporting local economies."
        />
        <AboutCard
          icon={<Handshake size={48} className="text-green-600" />}
          title="Fair & Transparent"
          description="Producers receive fair compensation, and consumers get transparent pricing and sourcing."
        />
        <AboutCard
          icon={<Heart size={48} className="text-green-600" />}
          title="Empowering Communities"
          description="Building stronger local food systems and fostering a sense of community around good food."
        />
      </motion.div>
    </motion.div>
  </section>
);

export default AboutSection;
