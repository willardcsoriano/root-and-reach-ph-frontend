"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { MOCK_PRODUCTS } from "@/data/produce-page/product-data";
import ProductCard from "./ProductCard";
import { fadeUp } from "@/lib/motion";

/* Motion variants */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const SeasonalPicks = () => {
  // Logic to select seasonal products (example)
  const seasonalProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === "Fruits" || p.category === "Vegetables",
  ).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-green-50">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-12"
          variants={containerVariants}
        >
          <motion.div className="text-center md:text-left" variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 flex items-center gap-3 justify-center md:justify-start">
              <Sun size={40} className="text-yellow-500" />
              In Season Now
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Enjoy the best flavors of the season, harvested at peak freshness.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="/products?sort=seasonal"
              className="mt-6 md:mt-0 inline-flex items-center text-green-600 font-bold hover:text-green-800 transition-colors"
            >
              View All Seasonal <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Products */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {seasonalProducts.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SeasonalPicks;
