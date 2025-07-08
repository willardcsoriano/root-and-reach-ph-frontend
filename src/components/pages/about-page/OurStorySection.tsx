"use client";

import React from "react";
import Image from "next/image";

const OurStorySection = () => (
  <section className="py-16 md:py-24 bg-gray-100">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <Image
          src="https://placehold.co/600x400/84cc16/ffffff?text=Our+Story"
          alt="People working in a farm"
          width={600}
          height={400}
          className="rounded-3xl shadow-xl w-full h-auto object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400/cccccc/333333?text=Image+Error";
          }}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
          Our Journey So Far
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Root & Reach was born from a simple idea: that good food should be
          accessible, and those who produce it should be fairly compensated. We
          saw a disconnect between bustling city markets and the hardworking
          local farms, and we set out to build a bridge.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          Starting as a small initiative, we&apos;ve grown into a thriving
          platform connecting hundreds of producers with thousands of consumers
          across Metro Manila and nearby provinces. Every order tells a story of
          community, sustainability, and dedication.
        </p>
      </div>
    </div>
  </section>
);

export default OurStorySection;
