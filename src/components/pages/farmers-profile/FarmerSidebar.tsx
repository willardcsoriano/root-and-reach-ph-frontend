"use client";

import Image from "next/image";
import { Award, Sprout } from "lucide-react";
import { Farmer } from "@/data/farmers-page/farmer-data";
import { motion } from "framer-motion";
import {
  fadeInRight,
  containerVariants,
  tagPop,
  hoverImage,
} from "@/lib/motion";

export default function FarmerSidebar({ farmer }: { farmer: Farmer }) {
  return (
    <motion.aside
      className="lg:col-span-1 space-y-8"
      variants={fadeInRight}
      initial="hidden"
      animate="show"
    >
      {/* Specialties + Certifications */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <Sprout size={20} className="text-green-600" />
          Specializing In
        </h3>

        <motion.div
          className="flex flex-wrap gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {farmer.specialties.map((s) => (
            <motion.span
              key={s}
              variants={tagPop}
              className="bg-green-100 text-green-800 font-medium px-3 py-1 text-sm rounded-full"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        <hr className="my-6" />

        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <Award size={20} className="text-green-600" />
          Certifications
        </h3>

        <motion.div
          className="flex flex-wrap gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {farmer.certifications.map((c) => (
            <motion.span
              key={c}
              variants={tagPop}
              className="bg-blue-100 text-blue-800 font-medium px-3 py-1 text-sm rounded-full"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Farm Gallery</h3>

        <div className="grid grid-cols-2 gap-2">
          {farmer.gallery.map((img, i) => (
            <motion.div
              key={i}
              className="relative h-24 w-full rounded-md overflow-hidden"
              whileHover={hoverImage}
            >
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.aside>
  );
}
