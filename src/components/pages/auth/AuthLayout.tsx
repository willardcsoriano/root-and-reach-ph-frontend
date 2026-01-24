// src/components/pages/auth/AuthLayout.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/motion";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-gray-200 px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="w-full max-w-lg">{children}</div>
    </motion.div>
  );
}
