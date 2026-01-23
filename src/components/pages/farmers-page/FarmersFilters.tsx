// src\components\pages\farmers-page\FarmersFilters.tsx
"use client";

import { Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface FarmersFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filterSpecialty: string;
  setFilterSpecialty: (value: string) => void;
  specialties: string[];
}

const FarmersFilters: React.FC<FarmersFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  filterSpecialty,
  setFilterSpecialty,
  specialties,
}) => (
  <motion.div
    className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <div className="relative w-full md:w-1/2">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
      <input
        type="search"
        placeholder="Search by farmer's name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                    text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />
    </div>

    <div className="relative w-full md:w-1/2">
      <ChevronDown
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
      <select
        value={filterSpecialty}
        onChange={(e) => setFilterSpecialty(e.target.value)}
        className="w-full appearance-none bg-white pl-4 pr-10 py-2 border border-gray-300 rounded-lg
                    text-gray-900
                    focus:ring-2 focus:ring-green-500 focus:border-green-500"
      >
        <option value="">Filter by specialty...</option>
        {specialties.map((spec) => (
          <option key={spec} value={spec}>
            {spec}
          </option>
        ))}
      </select>
    </div>
  </motion.div>
);

export default FarmersFilters;
