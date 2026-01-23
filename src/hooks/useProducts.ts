import { useMemo, useState } from "react";
import { MOCK_PRODUCTS } from "@/data/produce-page/product-data";

export function useProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  const categories = useMemo(() => {
    const unique = new Set(MOCK_PRODUCTS.map((p) => p.category));
    return ["All", ...Array.from(unique)].sort();
  }, []);

  const products = useMemo(() => {
    let result = MOCK_PRODUCTS;

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.producer.toLowerCase().includes(q),
      );
    }

    return [...result].sort((a, b) => {
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
  }, [selectedCategory, searchQuery, sortOption]);

  return {
    categories,
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
  };
}
