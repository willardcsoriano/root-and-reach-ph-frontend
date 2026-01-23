// src/app/farmers/%5Bid%5D/page.tsx
import { notFound } from "next/navigation";
import { farmersData } from "@/data/farmers-page/farmer-data";
import FarmerProfilePage from "@/components/pages/farmers-profile/FarmerProfilePage";

export function generateStaticParams() {
  return farmersData.map((f) => ({ id: f.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const farmer = farmersData.find((f) => f.id === id);

  return {
    title: farmer ? `${farmer.name} | Root & Reach` : "Farmer Not Found",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const farmer = farmersData.find((f) => f.id === id);

  if (!farmer) notFound();

  return <FarmerProfilePage farmer={farmer} />;
}
