"use client";

import Link from "next/link";
import { Factory, ShoppingCart, ArrowRight } from "lucide-react";

const CallToActionSection = () => (
  <section className="py-16 md:py-24 bg-green-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
        Join the Root & Reach Movement!
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        Whether you&apos;re a consumer seeking fresh, local goods or a producer
        looking to connect directly with your market, Root & Reach is for you.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Factory size={60} className="text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            For Producers
          </h3>
          <p className="text-gray-600 mb-6">
            Expand your reach, get fair prices, and simplify your sales process.
          </p>
          <Link
            href="/producers/signup"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300"
          >
            Register as a Producer <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <ShoppingCart size={60} className="text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            For Consumers
          </h3>
          <p className="text-gray-600 mb-6">
            Access fresh, high-quality local products directly from the source.
          </p>
          <Link
            href="/consumer/signup"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300"
          >
            Start Shopping Now <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CallToActionSection;
