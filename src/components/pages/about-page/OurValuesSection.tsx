"use client";

import React from "react";
import { valuesData } from "@/data/about-page/about-page-data";
import ValueCard from "./ValueCard";
import { Leaf, Handshake, Heart, Award, Users, Lightbulb } from "lucide-react";

// Helper function to get the correct icon based on the title
const getIconForValue = (title: string) => {
  const iconProps = { size: 48, className: "text-green-600" };
  switch (title) {
    case "Sustainability":
      return <Leaf {...iconProps} />;
    case "Fairness":
      return <Handshake {...iconProps} />;
    case "Community":
      return <Heart {...iconProps} />;
    case "Quality":
      return <Award {...iconProps} />;
    case "Empowerment":
      return <Users {...iconProps} />;
    case "Innovation":
      return <Lightbulb {...iconProps} />;
    default:
      return null;
  }
};

const OurValuesSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
        Values That Guide Us
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        Every decision at Root & Reach is driven by our core principles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valuesData.map((value) => (
          <ValueCard
            key={value.title}
            value={value}
            icon={getIconForValue(value.title)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default OurValuesSection;
