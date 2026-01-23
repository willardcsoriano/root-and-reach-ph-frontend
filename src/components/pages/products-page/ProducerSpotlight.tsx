// src\components\pages\products-page\ProducerSpotlight.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { MOCK_FARMERS } from "@/data/produce-page/product-data";
import { fadeUp } from "@/lib/motion";

/* Motion variants */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ProducerSpotlight = () => {
  // For this example, we'll feature the first farmer in the mock data.
  const featuredFarmer = MOCK_FARMERS[0];

  if (!featuredFarmer) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12"
          variants={containerVariants}
        >
          {/* Avatar */}
          <motion.div className="flex-shrink-0" variants={imageVariant}>
            <Image
              src={featuredFarmer.avatar}
              alt={featuredFarmer.name}
              width={160}
              height={160}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-green-500 shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div className="text-center md:text-left" variants={fadeUp}>
            <p className="text-green-600 font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <Star size={18} /> Producer Spotlight
            </p>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              {featuredFarmer.name}
            </h3>

            <p className="text-lg text-gray-600 mb-6 max-w-xl">
              {featuredFarmer.bio}
            </p>

            <Link
              href={`/farmers/${featuredFarmer.id}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProducerSpotlight;
