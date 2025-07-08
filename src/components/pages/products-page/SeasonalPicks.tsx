"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/produce-page/product-data";
import ProductCard from "./ProductCard";

const SeasonalPicks = () => {
  // Logic to select seasonal products (here we'll just take a few)
  const seasonalProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === "Fruits" || p.category === "Vegetables",
  ).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 flex items-center gap-3">
              <Sun size={40} className="text-yellow-500" />
              In Season Now
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Enjoy the best flavors of the season, harvested at peak freshness.
            </p>
          </div>
          <Link
            href="/products?sort=seasonal"
            className="mt-6 md:mt-0 inline-flex items-center text-green-600 font-bold hover:text-green-800 transition-colors"
          >
            View All Seasonal <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {seasonalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalPicks;
