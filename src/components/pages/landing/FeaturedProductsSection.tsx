// src/components/sections/landing/FeaturedProductsSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeUp,
  hoverCard,
  hoverImage,
  buttonHover,
  buttonTap,
} from "@/lib/motion";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  link,
}) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
    variants={fadeUp}
    whileHover={hoverCard}
  >
    <motion.div whileHover={hoverImage}>
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/400x300/cccccc/333333?text=Image+Unavailable";
        }}
      />
    </motion.div>

    <div className="p-6 text-left">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-green-700 font-bold text-lg">{price}</span>
        <Link
          href={link}
          className="text-green-600 hover:text-green-800 font-semibold flex items-center"
        >
          Details <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const FeaturedProductsSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <motion.div
      className="container mx-auto px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6"
        variants={fadeUp}
      >
        Our Bestsellers
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        variants={fadeUp}
      >
        Discover the freshest and most popular items directly from our local
        producers.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <ProductCard
          image="https://placehold.co/400x300/84cc16/ffffff?text=Organic+Vegetables"
          title="Organic Seasonal Vegetables"
          description="Farm-fresh, chemical-free vegetables harvested daily."
          price="₱150/kg"
          link="/products/vegetables"
        />
        <ProductCard
          image="https://placehold.co/400x300/facc15/ffffff?text=Artisanal+Bread"
          title="Artisanal Sourdough Bread"
          description="Hand-baked with natural starters for a perfect crust."
          price="₱250/loaf"
          link="/products/bread"
        />
        <ProductCard
          image="https://placehold.co/400x300/34d399/ffffff?text=Local+Honey"
          title="Pure Local Honey"
          description="Sweet, raw honey from local bee farms, rich in flavor."
          price="₱300/jar"
          link="/products/honey"
        />
      </motion.div>

      <motion.div className="mt-12" variants={fadeUp}>
        <motion.div whileHover={buttonHover} whileTap={buttonTap}>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            View All Products <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default FeaturedProductsSection;
