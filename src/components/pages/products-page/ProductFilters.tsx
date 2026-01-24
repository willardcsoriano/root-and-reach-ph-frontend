// src/components/pages/products-page/ProductFilters.tsx
"use client";

import React from "react";
import { Search, Filter, ListFilter, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, fadeUp, tagPop } from "@/lib/motion";

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isSelected,
  onClick,
}) => (
  <motion.button
    variants={tagPop}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out ${
      isSelected
        ? "bg-green-600 text-white shadow-md"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
    }`}
    onClick={onClick}
  >
    {category}
  </motion.button>
);

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md mb-8 md:mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
        variants={fadeUp}
      >
        <Filter size={24} className="mr-2 text-green-600" /> Filter & Sort
      </motion.h2>

      <motion.div className="mb-6" variants={fadeUp}>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Categories</h3>
        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerVariants}
        >
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {/* Search */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Search Products
          </h3>
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by name, description, or producer..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Sort */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Sort By</h3>
          <div className="relative">
            <ListFilter
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <select
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
            <ChevronDown
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductFilters;
