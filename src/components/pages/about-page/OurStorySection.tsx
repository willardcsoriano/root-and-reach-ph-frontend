// src/components/pages/about-page/OurStorySection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/motion";

const OurStorySection = () => (
  <section className="py-16 md:py-24 bg-gray-100">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        className="md:w-1/2"
        variants={fadeInLeft}
        initial="hidden"
        animate="show"
      >
        <Image
          src="https://placehold.co/600x400/84cc16/ffffff?text=Our+Story"
          alt="People working in a farm"
          width={600}
          height={400}
          className="rounded-3xl shadow-xl w-full h-auto object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out"
        />
      </motion.div>

      <motion.div
        className="md:w-1/2 text-center md:text-left"
        variants={fadeInRight}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
          Our Journey So Far
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Root & Reach was born from a simple idea...
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          Starting as a small initiative, we&apos;ve grown into a thriving
          platform...
        </p>
      </motion.div>
    </div>
  </section>
);

export default OurStorySection;
