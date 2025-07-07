// C:\Users\Willard\root-and-reach-ph-frontend\src\components\sections\landing\HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-xl">
    {/* Background organic shapes for visual interest */}
    <div className="absolute top-0 left-0 w-48 h-48 bg-green-400 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-blue-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Rooted in Purpose, <br className="hidden md:inline" />
          Reaching Beyond.
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Connecting you directly to the heart of local produce. Fresh, fair,
          and empowering.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Products <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full shadow-lg hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out overflow-hidden">
          <Image
            src="https://placehold.co/600x400/84cc16/ffffff?text=Fresh+Produce"
            alt="Fresh produce"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
