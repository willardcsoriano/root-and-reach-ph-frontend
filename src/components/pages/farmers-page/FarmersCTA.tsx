"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "@/lib/motion";

const FarmersCTA = () => (
  <section className="bg-white mt-16">
    <motion.div
      className="container mx-auto px-4 py-16 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeUp}>
        <Leaf size={40} className="mx-auto mb-4 text-green-600" />
      </motion.div>

      <motion.h2
        className="text-4xl font-bold font-inter text-gray-800"
        variants={fadeUp}
      >
        Are You a Farmer?
      </motion.h2>

      <motion.p
        className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
        variants={fadeUp}
      >
        Join our mission to bring fresh, local produce to tables across the
        nation. We would love to help you grow your reach.
      </motion.p>

      <motion.div variants={fadeUp}>
        <Link
          href="/producers/signup"
          className="mt-8 inline-block bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Become a Partner
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default FarmersCTA;
