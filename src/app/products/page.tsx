"use client";

import { useProducts } from "@/hooks/useProducts";

import ProductsHero from "@/components/pages/products-page/ProductsHero";
import ProductFilters from "@/components/pages/products-page/ProductFilters";
import ProductGrid from "@/components/pages/products-page/ProductGrid";
import SeasonalPicks from "@/components/pages/products-page/SeasonalPicks";
import ProducerSpotlight from "@/components/pages/products-page/ProducerSpotlight";
import CuratedBundles from "@/components/pages/products-page/CuratedBundles";

export default function ProductsPage() {
  const {
    categories,
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
  } = useProducts();

  return (
    <div className="bg-gray-50 font-inter text-gray-800">
      <ProductsHero />

      <div className="container mx-auto px-6 py-12 md:py-16">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <ProductGrid products={products} />
      </div>

      <SeasonalPicks />
      <ProducerSpotlight />
      <CuratedBundles />
    </div>
  );
}
