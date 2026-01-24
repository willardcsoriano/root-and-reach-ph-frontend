// src/components/pages/auth/AuthHeader.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface Props {
  title: string;
  subtitle: string;
}

export default function AuthHeader({ title, subtitle }: Props) {
  return (
    <motion.div className="text-center mb-10" variants={fadeUp}>
      <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
        {title}
      </h1>
      <p className="text-gray-500 mt-2">{subtitle}</p>
    </motion.div>
  );
}
