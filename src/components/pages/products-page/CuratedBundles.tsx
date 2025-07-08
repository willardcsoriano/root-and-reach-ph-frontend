"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBasket } from "lucide-react";
import { MOCK_BUNDLES } from "@/data/produce-page/product-data"; // <-- Import the data

const CuratedBundles = () => {
  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 flex items-center justify-center gap-3">
          <ShoppingBasket size={40} />
          Curated Bundles & Deals
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Save time and money with our hand-picked selections of fresh goods.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_BUNDLES.map(
            (
              bundle, // <-- Use the imported data
            ) => (
              <div
                key={bundle.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={bundle.image}
                  alt={bundle.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {bundle.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {bundle.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-green-700 font-bold text-lg">
                      ₱{bundle.price.toFixed(2)}
                    </span>
                    <Link
                      href={`/products/bundles/${bundle.id}`}
                      className="text-green-600 hover:text-green-800 font-semibold flex items-center"
                    >
                      View Bundle <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default CuratedBundles;
