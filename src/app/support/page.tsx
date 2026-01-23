// src/app/support/page.tsx
"use client";

import { Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { pageFade, containerVariants } from "@/lib/motion";

import SupportHero from "@/components/pages/support-page/SupportHero";
import SupportItem from "@/components/pages/support-page/SupportItem";

export default function SupportPage() {
  return (
    <motion.div
      className="bg-gray-50 pb-16 pt-16"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto p-4 md:p-8">
        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <SupportHero />

          <motion.div className="mt-10 space-y-6" variants={containerVariants}>
            <SupportItem
              icon={<Phone size={28} className="text-green-600" />}
              title="Call Us"
              description="+63 (917) 123-4567"
              href="tel:+639171234567"
            />

            <SupportItem
              icon={<Mail size={28} className="text-green-600" />}
              title="Email Us"
              description="support@rootandreach.com"
              href="mailto:support@rootandreach.com"
            />

            <SupportItem
              icon={<Clock size={28} className="text-green-600" />}
              title="Business Hours"
              description="Monday - Friday, 9:00 AM - 6:00 PM (PHT)"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
