// src\components\pages\about-page\CallToActionSection.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, buttonHover, buttonTap } from "@/lib/motion";

const CallToActionSection = () => (
  <section className="py-16 md:py-24 bg-linear-to-br from-green-700 to-green-900 text-white rounded-t-3xl shadow-xl">
    <motion.div
      className="container mx-auto px-6 text-center"
      initial="hidden"
      animate="show"
      variants={fadeUp}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
        Join Our Growing Community!
      </h2>

      <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12">
        Become a part of the Root & Reach family...
      </p>

      <motion.div whileHover={buttonHover} whileTap={buttonTap}>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Get In Touch <ArrowRight className="ml-2" size={20} />
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default CallToActionSection;
