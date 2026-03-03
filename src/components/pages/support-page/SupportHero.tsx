// src/components/pages/support-page/SupportHero.tsx

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function SupportHero() {
  return (
    <motion.div
      className="text-center"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-4xl font-extrabold text-green-800">Support Center</h1>
      <p className="mt-2 text-lg text-gray-600">
        We&apos;re here to help you with any questions or issues.
      </p>
    </motion.div>
  );
}
