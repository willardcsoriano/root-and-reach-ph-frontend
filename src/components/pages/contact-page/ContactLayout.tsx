"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/motion";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="container mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}
