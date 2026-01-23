// src/components/pages/farmers-profile/FarmerProfilePage.tsx

import { Farmer } from "@/data/farmers-page/farmer-data";
import FarmerHero from "./FarmerHero";
import FarmerProducts from "./FarmerProducts";
import FarmerPhilosophy from "./FarmerPhilosophy";
import FarmerSidebar from "./FarmerSidebar";

export default function FarmerProfilePage({ farmer }: { farmer: Farmer }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 md:p-8">
        <FarmerHero farmer={farmer} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <FarmerProducts farmer={farmer} />
            <FarmerPhilosophy farmer={farmer} />
          </div>

          <FarmerSidebar farmer={farmer} />
        </div>
      </div>
    </div>
  );
}
