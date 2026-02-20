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
    // ... empty state (this part looks fine!)
    return <div>...</div>;
  }

  return (
    <motion.div
      className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={fadeUp} className="w-full">
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
