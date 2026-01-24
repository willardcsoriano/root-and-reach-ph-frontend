// src\components\pages\products-page\ProductGrid.tsx
"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/produce-page/product-data";
import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "@/lib/motion";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <motion.div
        className="text-center py-20 bg-white rounded-xl shadow-md"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          No products found matching your criteria.
        </p>
        <p className="text-lg text-gray-500">
          Try adjusting your filters or search query.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={fadeUp}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
