"use client";

import { Quote } from "lucide-react";
import { Farmer } from "@/data/farmers-page/farmer-data";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function FarmerPhilosophy({ farmer }: { farmer: Farmer }) {
  return (
    <motion.section
      className="bg-white p-6 rounded-xl shadow-lg"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4">
        <Quote size={24} className="text-green-600" />
        Our Philosophy
      </h3>
      <blockquote className="text-lg italic text-gray-600 border-l-4 border-green-500 pl-4">
        {farmer.philosophy}
      </blockquote>
    </motion.section>
  );
}
