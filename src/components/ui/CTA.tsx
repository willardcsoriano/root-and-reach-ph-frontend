"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

const CTA: React.FC<CTAProps> = ({ title, text, buttonText, buttonLink }) => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-t-3xl shadow-xl mt-12">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
        {title}
      </h2>
      <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12">
        {text}
      </p>
      <Link
        href={buttonLink}
        className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        {buttonText} <ArrowRight className="ml-2" size={20} />
      </Link>
    </div>
  </section>
);

export default CTA;
