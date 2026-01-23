"use client";

import { ShoppingBasket } from "lucide-react";
import { Farmer } from "@/data/farmers-page/farmer-data";
import FarmerProductCard from "@/components/pages/farmers-page/FarmerProductCard";
import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "@/lib/motion";

export default function FarmerProducts({ farmer }: { farmer: Farmer }) {
  return (
    <motion.section
      className="bg-white p-6 rounded-xl shadow-lg"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4">
        <ShoppingBasket size={24} className="text-green-600" />
        Available Products
      </h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {farmer.products.map((product) => (
          <motion.div key={product.id} variants={fadeUp}>
            <FarmerProductCard product={product} farmerName={farmer.name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
