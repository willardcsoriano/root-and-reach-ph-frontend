"use client";

import React, { useState, useMemo } from "react";
import { Leaf, Search, Sprout, ChevronDown } from "lucide-react";
import Link from "next/link";
import { farmersData } from "@/data/farmers-page/farmer-data";
import FarmerCard from "@/components/pages/farmers-page/FarmerCard";

const FarmersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");

  const allSpecialties = useMemo(() => {
    const specialties = new Set<string>();
    farmersData.forEach((farmer) => {
      farmer.specialties.forEach((spec) => specialties.add(spec));
    });
    return Array.from(specialties).sort();
  }, []);

  const filteredFarmers = useMemo(() => {
    return farmersData
      .filter((farmer) =>
        farmer.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .filter((farmer) =>
        filterSpecialty ? farmer.specialties.includes(filterSpecialty) : true,
      );
  }, [searchTerm, filterSpecialty]);

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white text-center py-16 px-4">
        <Sprout size={48} className="mx-auto mb-4 text-green-300" />
        <h1 className="text-5xl font-extrabold font-inter tracking-tight">
          Meet Our Growers
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-green-200">
          The heart and soil of our community. Get to know the dedicated farmers
          who bring you fresh, sustainable, and locally-grown produce.
        </p>
      </section>

      {/* Filter and Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-1/2">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="search"
              placeholder="Search by farmer's name..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
            <select
              className="w-full appearance-none bg-white pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              onChange={(e) => setFilterSpecialty(e.target.value)}
              value={filterSpecialty}
            >
              <option value="">Filter by specialty...</option>
              {allSpecialties.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Farmer Grid Section */}
        {filteredFarmers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFarmers.map((farmer) => (
              <FarmerCard key={farmer.id} farmer={farmer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">
              No Farmers Found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filter to find our amazing partners.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action (CTA) Section */}
      <section className="bg-white mt-16">
        <div className="container mx-auto px-4 py-16 text-center">
          <Leaf size={40} className="mx-auto mb-4 text-green-600" />
          <h2 className="text-4xl font-bold font-inter text-gray-800">
            Are You a Farmer?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Join our mission to bring fresh, local produce to tables across the
            nation. We would love to help you grow your reach.
          </p>
          <Link
            href="/partner-application"
            className="mt-8 inline-block bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FarmersPage;
