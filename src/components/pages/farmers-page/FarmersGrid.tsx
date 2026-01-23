// src/components/pages/farmers-page/FarmersGrid.tsx
"use client";

import { motion } from "framer-motion";
import FarmerCard from "./FarmerCard";
import { Farmer } from "@/data/farmers-page/farmer-data";
import { containerVariants, fadeUp } from "@/lib/motion";

interface FarmersGridProps {
  farmers: Farmer[];
}

const FarmersGrid: React.FC<FarmersGridProps> = ({ farmers }) => {
  if (farmers.length === 0) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-gray-700">
          No Farmers Found
        </h3>
        <p className="text-gray-500 mt-2">
          Try adjusting your search or filter to find our amazing partners.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {farmers.map((farmer) => (
        <motion.div key={farmer.id} variants={fadeUp}>
          <FarmerCard farmer={farmer} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FarmersGrid;
