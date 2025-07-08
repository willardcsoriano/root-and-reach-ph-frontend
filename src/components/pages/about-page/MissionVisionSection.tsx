"use client";

import React from "react";
import { Lightbulb, Globe } from "lucide-react";

const MissionVisionSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
        Our Mission & Vision
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100 flex flex-col items-center">
          <Lightbulb size={60} className="text-green-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To empower local farmers and artisans by providing a direct,
            transparent, and fair marketplace for their goods, while connecting
            consumers to fresh, high-quality, sustainably sourced products.
          </p>
        </div>
        <div className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100 flex flex-col items-center">
          <Globe size={60} className="text-green-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To cultivate a vibrant, resilient, and equitable local food
            ecosystem that benefits communities, supports sustainable practices,
            and nourishes both people and the planet.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
