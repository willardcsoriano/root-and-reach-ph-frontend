"use client"; // 👈 1. Mark as a Client Component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Sprout,
  ArrowLeft,
  Award,
  Quote,
  ShoppingBasket,
} from "lucide-react";
import { farmersData, Farmer } from "@/data/farmers-page/farmer-data"; // Import Farmer type
import FarmerProductCard from "@/components/pages/farmers-page/FarmerProductCard";

// This interface defines the props for the page
interface FarmerProfilePageProps {
  params: {
    id: string;
  };
}

// This is now a Client Component
export default function FarmerProfilePage({ params }: FarmerProfilePageProps) {
  const [farmer, setFarmer] = useState<Farmer | null | undefined>(undefined);

  // 2. Find the farmer on the client side after the component mounts
  useEffect(() => {
    const foundFarmer = farmersData.find(
      (f) => f.id === parseInt(params.id, 10),
    );
    setFarmer(foundFarmer || null); // Set to null if not found
  }, [params.id]);

  // 3. Show a loading state while we're finding the farmer
  if (farmer === undefined) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Loading Farmer Profile...</h1>
      </div>
    );
  }

  // 4. Show a "Not Found" message if the farmer doesn't exist
  if (farmer === null) {
    // In a client component, we can't use notFound() directly,
    // so we render a "not found" state.
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Farmer Not Found</h1>
        <Link
          href="/farmers"
          className="text-green-600 hover:underline mt-4 inline-block"
        >
          Return to All Farmers
        </Link>
      </div>
    );
  }

  // 5. Render the page once the farmer data is available
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <Link
          href="/farmers"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 font-semibold transition-colors"
        >
          <ArrowLeft size={18} />
          Back to All Farmers
        </Link>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src={farmer.imageUrl}
                  alt={`Profile of ${farmer.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:col-span-2 p-6 md:p-8">
              <h1 className="text-4xl lg:text-5xl font-extrabold font-inter text-green-800">
                {farmer.name}
              </h1>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{farmer.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    Joined on{" "}
                    {new Date(farmer.joinDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mt-6 text-lg leading-relaxed">
                {farmer.bio}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4">
                <ShoppingBasket size={24} className="text-green-600" />
                Available Products
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {farmer.products.map((product) => (
                  <FarmerProductCard
                    key={product.id}
                    product={product}
                    farmerName={farmer.name}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4">
                <Quote size={24} className="text-green-600" />
                Our Philosophy
              </h3>
              <blockquote className="text-lg italic text-gray-600 border-l-4 border-green-500 pl-4">
                {farmer.philosophy}
              </blockquote>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Sprout size={20} className="text-green-600" />
                Specializing In
              </h3>
              <div className="flex flex-wrap gap-2">
                {farmer.specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-green-100 text-green-800 font-medium px-3 py-1 text-sm rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <hr className="my-6" />
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Award size={20} className="text-green-600" />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {farmer.certifications.map((c) => (
                  <span
                    key={c}
                    className="bg-blue-100 text-blue-800 font-medium px-3 py-1 text-sm rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Farm Gallery
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {farmer.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-24 w-full rounded-md overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Farm gallery image ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
