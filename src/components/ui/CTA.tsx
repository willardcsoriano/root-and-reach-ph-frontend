// src/components/ui/CTA.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, containerVariants } from "@/lib/motion";

interface CTAProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

const CTA: React.FC<CTAProps> = ({ title, text, buttonText, buttonLink }) => (
  <motion.section
    className="py-16 md:py-24 bg-linear-to-br from-green-700 to-green-900 text-white rounded-t-3xl shadow-xl mt-12"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md"
        variants={fadeUp}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12"
        variants={fadeUp}
      >
        {text}
      </motion.p>

      <motion.div variants={fadeUp}>
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          {buttonText} <ArrowRight className="ml-2" size={20} />
        </Link>
      </motion.div>
    </div>
  </motion.section>
);

export default CTA;
