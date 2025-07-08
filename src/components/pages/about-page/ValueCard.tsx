import React from "react";
import { Value } from "@/data/about-page/about-page-data";

// The props now include 'icon' separately
interface ValueCardProps {
  value: Value;
  icon: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out group">
    <div className="flex justify-center mb-6 group-hover:animate-bounce-once">
      {/* It now renders the 'icon' prop directly */}
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
    <p className="text-gray-600 text-base">{value.description}</p>
  </div>
);

export default ValueCard;
