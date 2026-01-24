// src/components/pages/about-page/OurValuesSection.tsx
"use client";

import { valuesData } from "@/data/about-page/about-page-data";
import ValueCard from "./ValueCard";
import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "@/lib/motion";
import { Leaf, Handshake, Heart, Award, Users, Lightbulb } from "lucide-react";

const getIconForValue = (title: string) => {
  const iconProps = { size: 48, className: "text-green-600" };
  switch (title) {
    case "Sustainability":
      return <Leaf {...iconProps} />;
    case "Fairness":
      return <Handshake {...iconProps} />;
    case "Community":
      return <Heart {...iconProps} />;
    case "Quality":
      return <Award {...iconProps} />;
    case "Empowerment":
      return <Users {...iconProps} />;
    case "Innovation":
      return <Lightbulb {...iconProps} />;
    default:
      return null;
  }
};

const OurValuesSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <motion.div
      className="container mx-auto px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6"
        variants={fadeUp}
      >
        Values That Guide Us
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        variants={fadeUp}
      >
        Every decision at Root & Reach is driven by our core principles.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {valuesData.map((value) => (
          <motion.div key={value.title} variants={fadeUp}>
            <ValueCard value={value} icon={getIconForValue(value.title)} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default OurValuesSection;
