// src/components/pages/farmers-page/FarmerCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Farmer } from "@/data/farmers-page/farmer-data";

const FarmerCard: React.FC<{ farmer: Farmer }> = ({ farmer }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group flex flex-col">
    <div className="relative h-48 w-full">
      <Image
        src={farmer.imageUrl}
        alt={`A photo of ${farmer.name}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        className="group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4 md:p-5 flex flex-col flex-grow">
      {" "}
      {/* Adjusted padding */}
      {/* Changed font size to be responsive */}
      <h3 className="text-xl md:text-2xl font-bold font-inter text-green-800">
        {farmer.name}
      </h3>
      <div className="flex items-center text-gray-500 mt-1 mb-3">
        <MapPin size={16} className="mr-2 flex-shrink-0" />
        <span className="text-sm">{farmer.location}</span>
      </div>
      {/* Removed fixed height (h-20) and added line-clamp for responsive truncation */}
      <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">
        {farmer.bio}
      </p>
      <div className="mb-4 mt-auto">
        <h4 className="font-semibold text-gray-800 mb-2 text-sm">
          Specialties:
        </h4>
        <div className="flex flex-wrap gap-2">
          {farmer.specialties.map((specialty) => (
            <span
              key={specialty}
              className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={`/farmers/${farmer.id ?? ""}`}
        className="mt-auto inline-block w-full text-center bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        View Profile
      </Link>
    </div>
  </div>
);

export default FarmerCard;
