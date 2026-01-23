// src/components/pages/contact-page/ContactInfo.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, fadeUp, hoverCard } from "@/lib/motion";

export default function ContactInfo() {
  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Contact Details */}
      <motion.div
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        variants={fadeUp}
        whileHover={hoverCard}
      >
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Our Contact Details
        </h2>

        <div className="space-y-5">
          <motion.div
            className="flex items-center text-gray-700 text-lg"
            variants={fadeUp}
          >
            <Mail size={24} className="text-green-600 mr-4 shrink-0" />
            <Link
              href="mailto:info@rootandreach.com"
              className="hover:text-green-700"
            >
              info@rootandreach.com
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center text-gray-700 text-lg"
            variants={fadeUp}
          >
            <Phone size={24} className="text-green-600 mr-4 shrink-0" />
            <Link href="tel:+1234567890" className="hover:text-green-700">
              +1 (234) 567-890
            </Link>
          </motion.div>

          <motion.div
            className="flex items-start text-gray-700 text-lg"
            variants={fadeUp}
          >
            <MapPin size={24} className="text-green-600 mr-4 shrink-0 mt-1" />
            <address className="not-italic">
              Root & Reach PH Headquarters <br />
              123 Green Valley St., Brgy. Harvest <br />
              Quezon City, Metro Manila, Philippines 1100
            </address>
          </motion.div>
        </div>
      </motion.div>

      {/* Map */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
        variants={fadeUp}
        whileHover={hoverCard}
      >
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Find Us on the Map
        </h2>

        <Image
          src="https://placehold.co/600x400/e0e0e0/333333?text=Map+Placeholder"
          alt="Location Map"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-md"
        />

        <p className="text-center text-gray-500 text-sm mt-4">
          (Map integration coming soon!)
        </p>
      </motion.div>
    </motion.div>
  );
}
