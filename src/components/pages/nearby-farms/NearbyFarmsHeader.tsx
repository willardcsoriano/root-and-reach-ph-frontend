"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function NearbyFarmsHeader() {
  return (
    <>
      <motion.div
        className="flex justify-center mb-4"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <div className="p-3 bg-green-100 rounded-full">
          <MapPin size={40} className="text-green-600" />
        </div>
      </motion.div>

      <motion.h1
        className="text-3xl md:text-4xl font-bold font-inter text-gray-800"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        Find Local Farms
      </motion.h1>

      <motion.p
        className="text-gray-600 mt-2 mb-8"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        Discover fresh produce right in your neighborhood.
      </motion.p>
    </>
  );
}
