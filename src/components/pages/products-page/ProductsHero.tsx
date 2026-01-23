// components/ProductsHero.jsx
"use client";

import { motion, Variants } from "framer-motion";
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

const ProductsHero = () => (
  <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 md:py-20 rounded-b-3xl shadow-lg">
    <motion.div
      className="container mx-auto px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md"
        variants={fadeUp}
      >
        Discover Fresh Local Products
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
        variants={fadeUp}
      >
        Browse our curated selection of goods directly from local producers.
      </motion.p>
    </motion.div>
  </section>
);

export default ProductsHero;
