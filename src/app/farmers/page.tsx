// src\app\farmers\page.tsx
"use client";

import { useFarmers } from "@/hooks/useFarmers";

import FarmersHero from "@/components/pages/farmers-page/FarmersHero";
import FarmersFilters from "@/components/pages/farmers-page/FarmersFilters";
import FarmersGrid from "@/components/pages/farmers-page/FarmersGrid";
import FarmersCTA from "@/components/pages/farmers-page/FarmersCTA";

export default function FarmersPage() {
  const {
    farmers,
    specialties,
    searchTerm,
    setSearchTerm,
    filterSpecialty,
    setFilterSpecialty,
  } = useFarmers();

  return (
    <div className="bg-green-350">
      <FarmersHero />

      <div className="container mx-auto px-4 py-8">
        <FarmersFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterSpecialty={filterSpecialty}
          setFilterSpecialty={setFilterSpecialty}
          specialties={specialties}
        />

        <FarmersGrid farmers={farmers} />
      </div>

      <FarmersCTA />
    </div>
  );
}
