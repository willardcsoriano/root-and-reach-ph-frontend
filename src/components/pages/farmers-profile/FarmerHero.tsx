"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import { Farmer } from "@/data/farmers-page/farmer-data";
import { motion } from "framer-motion";
import { containerVariants, fadeUp, hoverImage } from "@/lib/motion";

export default function FarmerHero({ farmer }: { farmer: Farmer }) {
  return (
    <>
      {/* Back link */}
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <Link
          href="/farmers"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 font-semibold transition-colors"
        >
          <ArrowLeft size={18} /> Back to All Farmers
        </Link>
      </motion.div>

      {/* Hero container */}
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Image */}
          <motion.div
            className="relative h-64 md:h-full w-full overflow-hidden"
            whileHover={hoverImage}
          >
            <Image
              src={farmer.imageUrl}
              alt={`Profile of ${farmer.name}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text content */}
          <div className="md:col-span-2 p-6 md:p-8">
            <motion.h1
              className="text-4xl lg:text-5xl font-extrabold text-green-800"
              variants={fadeUp}
            >
              {farmer.name}
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 mt-4"
              variants={fadeUp}
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} /> <span>{farmer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  Joined on{" "}
                  {new Date(farmer.joinDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-700 mt-6 text-lg leading-relaxed"
              variants={fadeUp}
            >
              {farmer.bio}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
