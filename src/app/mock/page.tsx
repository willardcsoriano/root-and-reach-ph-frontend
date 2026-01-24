// src/app/mock/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeUp,
  pageFade,
  buttonHover,
  buttonTap,
  hoverCard,
} from "@/lib/motion";

export default function MockNoticePage() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-gray-100 p-6"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="max-w-lg w-full bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-100 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        whileHover={hoverCard}
      >
        {/* Icon / Badge */}
        <motion.div
          className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl"
          variants={fadeUp}
        >
          🚧
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4"
          variants={fadeUp}
        >
          Demo Mode
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-600 mb-8 leading-relaxed"
          variants={fadeUp}
        >
          This authentication flow is a{" "}
          <span className="font-semibold text-gray-700">UI/UX mockup</span>{" "}
          created for a portfolio project. No real accounts are created or
          stored.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeUp}
        >
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link
              href="/profile"
              className="block px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-700 hover:bg-gray-200 transition"
            >
              ← Back to Sign In
            </Link>
          </motion.div>

          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link
              href="/dashboard"
              className="block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 shadow-md transition"
            >
              Go to Dashboard →
            </Link>
          </motion.div>
        </motion.div>

        {/* Subtle footer hint */}
        <motion.p className="mt-8 text-xs text-gray-400" variants={fadeUp}>
          Root & Reach • Portfolio Demo
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
