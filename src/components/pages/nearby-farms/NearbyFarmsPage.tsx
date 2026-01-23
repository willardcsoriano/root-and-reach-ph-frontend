"use client";

import NearbyFarmsHeader from "./NearbyFarmsHeader";
import NearbyFarmsForm from "./NearbyFarmsForm";
import NearbyFarmsStatus from "./NearbyFarmsStatus";
import { useNearbyFarms } from "./useNearbyFarms";
import { motion } from "framer-motion";
import { pageFade } from "@/lib/motion";

export default function NearbyFarmsPage() {
  const {
    locations,
    selectedLocation,
    setSelectedLocation,
    statusMessage,
    isLoading,
    handleGeolocate,
    handleSearch,
  } = useNearbyFarms();

  return (
    <motion.div
      className="flex grow items-center justify-center bg-gray-300 px-4 py-16 md:py-24"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <NearbyFarmsHeader />

        <NearbyFarmsForm
          locations={locations}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          isLoading={isLoading}
          handleGeolocate={handleGeolocate}
          handleSearch={handleSearch}
          clearStatus={() => {}}
        />

        <NearbyFarmsStatus message={statusMessage} />
      </div>
    </motion.div>
  );
}
