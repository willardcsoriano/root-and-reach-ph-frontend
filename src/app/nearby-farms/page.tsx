"use client"; // This component uses state and browser APIs, so it's a Client Component.

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Crosshair, Search, LoaderCircle } from "lucide-react";

const NearbyFarmsPage = () => {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // A predefined list of serviceable areas.
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
        // In a real app, you would use these coordinates to perform a reverse-geocode
        // lookup to find the city or send them to your backend.
        const { latitude, longitude } = position.coords;
        console.log(`Location found: Lat ${latitude}, Lon ${longitude}`);

        // For this demo, we'll simulate finding a nearby major city.
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
    // Navigate to a products or farmers page filtered by the selected location.
    router.push(`/products?location=${encodeURIComponent(selectedLocation)}`);
  };

  return (
    <div className="flex flex-grow items-center justify-center bg-gray-300 px-4 py-16 md:py-24">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-green-100 rounded-full">
            <MapPin size={40} className="text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-inter text-gray-800">
          Find Local Farms
        </h1>
        <p className="text-gray-600 mt-2 mb-8">
          Discover fresh produce right in your neighborhood.
        </p>

        {/* Action Buttons & Inputs */}
        <div className="space-y-4">
          <div className="relative w-full">
            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setStatusMessage("");
              }}
              className="w-full text-lg appearance-none bg-white pl-4 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
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
          </div>

          <div className="relative flex items-center">
            <hr className="w-full border-t border-gray-300" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-sm text-gray-500">
              OR
            </span>
          </div>

          <button
            onClick={handleGeolocate}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 text-lg bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-300"
          >
            {isLoading ? (
              <LoaderCircle size={24} className="animate-spin" />
            ) : (
              <Crosshair size={24} />
            )}
            Use My Current Location
          </button>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <p className="text-sm text-gray-600 mt-4 h-5">{statusMessage}</p>
        )}

        {/* Search Button */}
        <div className="mt-8">
          <button
            onClick={handleSearch}
            disabled={!selectedLocation}
            className="w-full bg-green-600 text-white font-bold text-xl py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-center gap-2">
              <Search size={28} />
              Find Farms
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NearbyFarmsPage;
