"use client";

import React, { useState, useMemo } from "react";
import { MOCK_PRODUCTS } from "@/data/produce-page/product-data";
import ProductFilters from "@/components/pages/products-page/ProductFilters";
import ProductGrid from "@/components/pages/products-page/ProductGrid";
import SeasonalPicks from "@/components/pages/products-page/SeasonalPicks";
import ProducerSpotlight from "@/components/pages/products-page/ProducerSpotlight";
import CuratedBundles from "@/components/pages/products-page/CuratedBundles";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("name-asc");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(MOCK_PRODUCTS.map((p) => p.category));
    return ["All", ...Array.from(uniqueCategories)].sort();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let products = MOCK_PRODUCTS;

    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.producer.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Create a new array before sorting to avoid mutating the original
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      switch (sortOption) {
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sortedProducts;
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <div className="bg-gray-50 font-inter text-gray-800">
      {/* Products Hero/Banner Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 md:py-20 rounded-b-3xl shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            Discover Fresh Local Products
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Browse our curated selection of goods directly from local producers.
          </p>
        </div>
      </section>

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
        <ProductGrid products={filteredAndSortedProducts} />
      </div>

      {/* --- New Sections --- */}
      <SeasonalPicks />
      <ProducerSpotlight />
      <CuratedBundles />
    </div>
  );
};

export default ProductsPage;
