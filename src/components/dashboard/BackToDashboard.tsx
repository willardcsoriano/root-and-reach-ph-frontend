// src/components/dashboard/BackToDashboard.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, buttonHover, buttonTap } from "@/lib/motion";

export default function BackToDashboard() {
  return (
    <motion.div variants={fadeUp} whileHover={buttonHover} whileTap={buttonTap}>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-green-700 transition"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>
    </motion.div>
  );
}
