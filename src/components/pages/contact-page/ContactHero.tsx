// src/components/pages/contact-page/ContactHero.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, pageFade } from "@/lib/motion";

const ContactHero = () => (
  <motion.section
    className="relative bg-linear-to-br from-green-600 to-green-800 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-xl"
    variants={pageFade}
    initial="hidden"
    animate="show"
  >
    <div className="absolute top-0 left-0 w-48 h-48 bg-green-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
        variants={fadeUp}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
        variants={fadeUp}
      >
        Have questions, feedback, or just want to say hello? We&apos;d love to
        hear from you!
      </motion.p>
    </div>
  </motion.section>
);

export default ContactHero;
