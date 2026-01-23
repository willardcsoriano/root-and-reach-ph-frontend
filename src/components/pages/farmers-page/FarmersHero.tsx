// src\components\pages\farmers-page\FarmersHero.tsx
"use client";

import { Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "@/lib/motion";

const FarmersHero = () => (
  <section className="bg-gradient-to-r from-green-700 to-green-900 text-white text-center py-16 px-4">
    <motion.div
      className="container mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeUp}>
        <Sprout size={48} className="mx-auto mb-4 text-green-300" />
      </motion.div>

      <motion.h1
        className="text-5xl font-extrabold font-inter tracking-tight"
        variants={fadeUp}
      >
        Meet Our Growers
      </motion.h1>

      <motion.p
        className="mt-4 max-w-2xl mx-auto text-lg text-green-200"
        variants={fadeUp}
      >
        The heart and soil of our community. Get to know the dedicated farmers
        who bring you fresh, sustainable, and locally-grown produce.
      </motion.p>
    </motion.div>
  </section>
);

export default FarmersHero;
