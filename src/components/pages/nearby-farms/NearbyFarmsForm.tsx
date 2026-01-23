"use client";

import { Crosshair, Search, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeUp,
  buttonHover,
  buttonTap,
} from "@/lib/motion";

interface Props {
  locations: string[];
  selectedLocation: string;
  setSelectedLocation: (v: string) => void;
  isLoading: boolean;
  handleGeolocate: () => void;
  handleSearch: () => void;
  clearStatus: () => void;
}

export default function NearbyFarmsForm({
  locations,
  selectedLocation,
  setSelectedLocation,
  isLoading,
  handleGeolocate,
  handleSearch,
  clearStatus,
}: Props) {
  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Dropdown */}
      <motion.div className="relative w-full" variants={fadeUp}>
        <select
          value={selectedLocation}
          onChange={(e) => {
            setSelectedLocation(e.target.value);
            clearStatus();
          }}
          className="w-full text-lg text-gray-800 appearance-none bg-white pl-4 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="" disabled>
            -- Select your city --
          </option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </motion.div>

      {/* OR divider */}
      <motion.div className="relative flex items-center" variants={fadeUp}>
        <hr className="w-full border-t border-gray-300" />
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-sm text-gray-500">
          OR
        </span>
      </motion.div>

      {/* Geolocate button */}
      <motion.button
        onClick={handleGeolocate}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 text-lg bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-300"
        variants={fadeUp}
        whileHover={buttonHover}
        whileTap={buttonTap}
      >
        {isLoading ? (
          <LoaderCircle size={24} className="animate-spin" />
        ) : (
          <Crosshair size={24} />
        )}
        Use My Current Location
      </motion.button>

      {/* Search button */}
      <motion.div className="mt-8" variants={fadeUp}>
        <motion.button
          onClick={handleSearch}
          disabled={!selectedLocation}
          className="w-full bg-green-600 text-white font-bold text-xl py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          <div className="flex justify-center gap-2">
            <Search size={28} />
            Find Farms
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
