// src/components/pages/about-page/MissionVisionSection.tsx
"use client";

import { Lightbulb, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, fadeUp, hoverCard } from "@/lib/motion";

const MissionVisionSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <motion.div
      className="container mx-auto px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6"
        variants={fadeUp}
      >
        Our Mission & Vision
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {[
          {
            title: "Our Mission",
            icon: <Lightbulb size={60} className="text-green-600 mb-6" />,
            text: "To empower local farmers and artisans by providing a direct, transparent, and fair marketplace...",
          },
          {
            title: "Our Vision",
            icon: <Globe size={60} className="text-green-600 mb-6" />,
            text: "To cultivate a vibrant, resilient, and equitable local food ecosystem...",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100 flex flex-col items-center"
            variants={fadeUp}
            whileHover={hoverCard}
          >
            {item.icon}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default MissionVisionSection;
