"use client";

import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
}) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800 text-left flex flex-col items-center md:items-start transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <Image
      src={avatar}
      alt={name}
      width={100}
      height={100}
      className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-green-200 shadow-md"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/100x100/9ca3af/ffffff?text=User";
      }}
    />
    <p className="text-lg italic mb-6 text-center md:text-left">
      &quot;{quote}&quot;
    </p>
    <div className="font-semibold text-center md:text-left">
      <p className="text-green-700 text-xl">{name}</p>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-t-3xl shadow-xl">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
        What Our Community Says
      </h2>
      <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12">
        Hear from happy consumers and thriving producers who are part of the
        Root & Reach family.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard
          quote="Root & Reach has transformed the way I buy groceries! The produce is incredibly fresh, and I love knowing exactly where my food comes from. Supporting local farmers has never been easier."
          name="Maria S."
          role="Happy Consumer"
          avatar="https://placehold.co/100x100/9ca3af/ffffff?text=MS"
        />
        <TestimonialCard
          quote="As a small farmer, Root & Reach has been a game-changer. I can connect directly with customers, get fair prices for my hard work, and focus on what I do best – growing amazing food!"
          name="Mang Tonyo"
          role="Local Producer"
          avatar="https://placehold.co/100x100/9ca3af/ffffff?text=MT"
        />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
