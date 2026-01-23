// src/components/pages/landing/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95, rotate: 6 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 3,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // ✅ valid easing
    },
  },
};

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-xl">
    {/* Background organic shapes */}
    <div className="absolute top-0 left-0 w-48 h-48 bg-green-400 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
    <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
    <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-blue-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />

    <motion.div
      className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Text content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          variants={fadeUp}
        >
          Rooted in Purpose, <br className="hidden md:inline" />
          Reaching Beyond.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 opacity-90"
          variants={fadeUp}
        >
          Connecting you directly to the heart of local produce. Fresh, fair,
          and empowering.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          variants={containerVariants}
        >
          <motion.div variants={fadeUp}>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Explore Products <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full shadow-lg hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        variants={imageVariant}
      >
        <div className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out overflow-hidden">
          <Image
            src="https://placehold.co/600x400/84cc16/ffffff?text=Fresh+Produce"
            alt="Fresh produce"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
