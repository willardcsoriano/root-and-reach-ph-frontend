"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Truck, Award } from "lucide-react";
import CTA from "@/components/ui/CTA";

// --- FIX: Create a specific interface for the component's props ---
interface HowItWorksStepProps {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean; // Optional prop
}

// Use the new interface to type the props
const HowItWorksStep = ({
  step,
  icon,
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
}: HowItWorksStepProps) => {
  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const textVariants = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
    >
      <motion.div
        variants={imageVariants}
        className={`relative w-full h-80 rounded-2xl shadow-xl overflow-hidden ${reverse ? "md:order-last" : ""}`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <motion.div variants={textVariants} className="text-center md:text-left">
        <span className="inline-block bg-green-200 text-green-800 font-bold px-4 py-1 rounded-full mb-4">
          Step {step}
        </span>
        <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
          <div className="bg-green-600 text-white p-3 rounded-full">{icon}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

// The main page component
const HowItWorksPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 text-center py-20 md:py-24 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold font-inter tracking-tight text-green-800">
          From Farm to Your Table
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          Our process is simple, transparent, and designed with community at its
          heart.
        </p>
      </section>

      {/* Main content with alternating layout */}
      <div className="py-24 px-6 space-y-24 md:space-y-32 relative">
        {/* Decorative SVG line connecting the steps */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-px">
          <svg height="100%" width="100%" className="overflow-visible">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
        </div>

        <HowItWorksStep
          step="1"
          icon={<ShoppingCart size={28} />}
          title="Discover & Select"
          description="Browse a curated selection of fresh produce, artisanal goods, and more. Read stories about the producers and find items you love."
          imageUrl="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="A person shopping for fresh vegetables at a market."
        />

        <HowItWorksStep
          step="2"
          icon={<Truck size={28} />}
          title="Order & Connect"
          description="Place your order directly. We facilitate a seamless connection, so producers get your order instantly and can prepare it for you with care."
          imageUrl="https://images.pexels.com/photos/4393433/pexels-photo-4393433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="A farmer packing a box of fresh produce."
          reverse={true}
        />

        <HowItWorksStep
          step="3"
          icon={<Award size={28} />}
          title="Enjoy & Support"
          description="Receive high-quality, fresh products at your doorstep. Feel good knowing every purchase directly supports local families and sustainable farming."
          imageUrl="https://images.pexels.com/photos/6625121/pexels-photo-6625121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="A family enjoying a healthy meal together."
        />
      </div>

      <CTA
        title="Ready to Try It Yourself?"
        text="Explore our wide range of products and experience the freshness firsthand."
        buttonText="Browse Products"
        buttonLink="/products"
      />
    </div>
  );
};

export default HowItWorksPage;
