// src/hooks/useFarmers.ts
import { useMemo, useState } from "react";
import { farmersData } from "@/data/farmers-page/farmer-data";

export function useFarmers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");

  const specialties = useMemo(() => {
    const set = new Set<string>();
    farmersData.forEach((farmer) =>
      farmer.specialties.forEach((s) => set.add(s)),
    );
    return Array.from(set).sort();
  }, []);

  const farmers = useMemo(() => {
    return farmersData
      .filter((farmer) =>
        farmer.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .filter((farmer) =>
        filterSpecialty ? farmer.specialties.includes(filterSpecialty) : true,
      );
  }, [searchTerm, filterSpecialty]);

  return {
    farmers,
    specialties,
    searchTerm,
    setSearchTerm,
    filterSpecialty,
    setFilterSpecialty,
  };
}
