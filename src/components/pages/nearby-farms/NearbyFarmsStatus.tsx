"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function NearbyFarmsStatus({ message }: { message: string }) {
  if (!message) return null;

  return (
    <motion.p
      className="text-sm text-gray-600 mt-4 h-5"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      {message}
    </motion.p>
  );
}
