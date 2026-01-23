// src/components/pages/nearby-farms/useNearbyFarms.ts
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function useNearbyFarms() {
  const router = useRouter();

  const [selectedLocation, setSelectedLocation] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const locations = [
    "Quezon City",
    "Makati",
    "Taguig",
    "Pasig",
    "Mandaluyong",
    "Manila",
  ];

  const handleGeolocate = () => {
    if (!navigator.geolocation) {
      setStatusMessage("Geolocation is not supported by your browser.");
      return;
    }

    setIsLoading(true);
    setStatusMessage("Fetching your location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Location found: Lat ${latitude}, Lon ${longitude}`);

        setSelectedLocation("Quezon City");
        setStatusMessage("Success! We found a serviceable area near you.");
        setIsLoading(false);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setStatusMessage(
            "Location access denied. Please select a location manually.",
          );
        } else {
          setStatusMessage(
            "Could not determine your location. Please select one.",
          );
        }
        setIsLoading(false);
      },
    );
  };

  const handleSearch = () => {
    if (!selectedLocation) {
      setStatusMessage("Please select a location first.");
      return;
    }

    router.push(`/products?location=${encodeURIComponent(selectedLocation)}`);
  };

  return {
    locations,
    selectedLocation,
    setSelectedLocation,
    statusMessage,
    isLoading,
    handleGeolocate,
    handleSearch,
  };
}
