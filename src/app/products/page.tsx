"use client"; // This directive marks the component as a Client Component

import Link from "next/link";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import {
  Search,
  ChevronDown,
  Filter,
  ListFilter,
  MapPin,
  User,
  Tractor,
} from "lucide-react"; // Added new icons

// --- 1. Product Data Interface ---
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  producer: string;
}

// --- 2. Mock Product Data ---
const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod001",
    name: "Organic Romaine Lettuce",
    category: "Vegetables",
    price: 120.0,
    image: "https://placehold.co/400x300/84cc16/ffffff?text=Lettuce",
    description:
      "Crisp, fresh organic romaine lettuce harvested this morning. Perfect for salads.",
    producer: "Green Harvest Farm",
  },
  {
    id: "prod002",
    name: "Sweet Carabao Mangoes",
    category: "Fruits",
    price: 180.0,
    image: "https://placehold.co/400x300/facc15/ffffff?text=Mangoes",
    description:
      "Juicy and sweet Carabao mangoes, ripened naturally under the sun.",
    producer: "Sunshine Orchards",
  },
  {
    id: "prod003",
    name: "Grass-Fed Beef Sirloin",
    category: "Meats",
    price: 650.0,
    image: "https://placehold.co/400x300/dc2626/ffffff?text=Beef",
    description:
      "Premium grass-fed beef sirloin, tender and flavorful, sourced from local ranches.",
    producer: "Local Meats Co.",
  },
  {
    id: "prod004",
    name: "Artisanal Sourdough Bread",
    category: "Baked Goods",
    price: 280.0,
    image: "https://placehold.co/400x300/f59e0b/ffffff?text=Sourdough",
    description:
      "Hand-baked sourdough bread with a perfect chewy interior and crispy crust.",
    producer: "The Baker's Nook",
  },
  {
    id: "prod005",
    name: "Fresh Farm Eggs (Dozen)",
    category: "Dairy & Eggs",
    price: 95.0,
    image: "https://placehold.co/400x300/a3e635/ffffff?text=Eggs",
    description:
      "Farm-fresh eggs from free-range chickens. Rich in flavor and nutrients.",
    producer: "Happy Hen Farm",
  },
  {
    id: "prod006",
    name: "Organic Cherry Tomatoes",
    category: "Vegetables",
    price: 100.0,
    image: "https://placehold.co/400x300/84cc16/ffffff?text=Tomatoes",
    description:
      "Sweet and tangy organic cherry tomatoes, perfect for snacks or salads.",
    producer: "Green Harvest Farm",
  },
  {
    id: "prod007",
    name: "Native Bananas (Latundan)",
    category: "Fruits",
    price: 70.0, // Corrected from 70.0.0
    image: "https://placehold.co/400x300/facc15/ffffff?text=Bananas",
    description:
      "Locally grown Latundan bananas, naturally sweet and energy-boosting.",
    producer: "Sunshine Orchards",
  },
  {
    id: "prod008",
    name: "Local Fresh Milk (1 Liter)",
    category: "Dairy & Eggs",
    price: 150.0,
    image: "https://placehold.co/400x300/a3e635/ffffff?text=Milk",
    description:
      "Fresh pasteurized milk from local dairy farms. No preservatives.",
    producer: "Dairy Bliss Co.",
  },
  {
    id: "prod009",
    name: "Whole Wheat Loaf",
    category: "Baked Goods",
    price: 180.0,
    image: "https://placehold.co/400x300/f59e0b/ffffff?text=Whole+Wheat",
    description: "Healthy and hearty whole wheat bread, baked fresh daily.",
    producer: "The Baker's Nook",
  },
  {
    id: "prod010",
    name: "Fresh Catch Tilapia",
    category: "Seafood",
    price: 220.0,
    image: "https://placehold.co/400x300/0ea5e9/ffffff?text=Tilapia",
    description:
      "Locally sourced fresh tilapia, perfect for grilling or frying.",
    producer: "Aqua Farms PH",
  },
];

// --- 3. New Interfaces for Farms and Farmers ---
interface Farm {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  productsOffered: string[];
}

interface Farmer {
  id: string;
  name: string;
  farmName: string;
  bio: string;
  avatar: string;
}

// --- 4. Mock Data for Farms and Farmers ---
const MOCK_FARMS: Farm[] = [
  {
    id: "farm001",
    name: "Green Harvest Farm",
    location: "Cavite, Philippines",
    image: "https://placehold.co/600x400/84cc16/ffffff?text=Green+Farm",
    description:
      "Dedicated to sustainable and organic farming practices, providing fresh vegetables year-round.",
    productsOffered: ["Lettuce", "Tomatoes", "Cucumbers", "Herbs"],
  },
  {
    id: "farm002",
    name: "Sunshine Orchards",
    location: "Davao, Philippines",
    image: "https://placehold.co/600x400/facc15/ffffff?text=Orchard",
    description:
      "Specializing in tropical fruits, known for our sweet Carabao mangoes and various citrus.",
    productsOffered: ["Mangoes", "Bananas", "Pineapples", "Durian"],
  },
  {
    id: "farm003",
    name: "Happy Hen Farm",
    location: "Batangas, Philippines",
    image: "https://placehold.co/600x400/a3e635/ffffff?text=Chicken+Farm",
    description:
      "Our free-range chickens produce the freshest, most flavorful eggs. Committed to animal welfare.",
    productsOffered: ["Fresh Eggs", "Organic Chicken Meat"],
  },
  {
    id: "farm004",
    name: "Aqua Farms PH",
    location: "Pangasinan, Philippines",
    image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Fish+Farm",
    description:
      "Sustainable aquaculture farm providing fresh, high-quality seafood to local markets.",
    productsOffered: ["Tilapia", "Bangus", "Shrimp"],
  },
];

const MOCK_FARMERS: Farmer[] = [
  {
    id: "farmer001",
    name: "Aling Nena",
    farmName: "Green Harvest Farm",
    bio: "With over 30 years of experience, Aling Nena is passionate about growing organic vegetables using traditional methods.",
    avatar: "https://placehold.co/100x100/9ca3af/ffffff?text=AN",
  },
  {
    id: "farmer002",
    name: "Mang Jose",
    farmName: "Sunshine Orchards",
    bio: "Mang Jose inherited his family's mango orchard and continues their legacy of producing the sweetest mangoes in Davao.",
    avatar: "https://placehold.co/100x100/9ca3af/ffffff?text=MJ",
  },
  {
    id: "farmer003",
    name: "Ate Lisa",
    farmName: "Happy Hen Farm",
    bio: "Ate Lisa champions ethical farming, ensuring her chickens live happy, healthy lives, which reflects in the quality of her eggs.",
    avatar: "https://placehold.co/100x100/9ca3af/ffffff?text=AL",
  },
];

// --- Products Page Component ---
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("name-asc"); // 'name-asc', 'name-desc', 'price-asc', 'price-desc'

  const categories = useMemo(() => {
    const uniqueCategories = new Set(MOCK_PRODUCTS.map((p) => p.category));
    return ["All", ...Array.from(uniqueCategories)].sort();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let products = MOCK_PRODUCTS;

    // Filter by category
    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.producer.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Sort products
    switch (sortOption) {
      case "name-asc":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return products;
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
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
        {/* Filter and Search Bar Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Filter size={24} className="mr-2 text-green-600" /> Filter & Sort
          </h2>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <CategoryButton
                  key={category}
                  category={category}
                  isSelected={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Input */}
            <div>
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
            </div>

            {/* Sort Dropdown */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Sort By
              </h3>
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
            </div>
          </div>
        </div>

        {/* Product Listing Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-md">
            <p className="text-2xl font-semibold text-gray-600 mb-4">
              No products found matching your criteria.
            </p>
            <p className="text-lg text-gray-500">
              Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>

      {/* Meet Our Farms Section */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            Meet Our Farms
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover the dedicated farms that bring you the freshest produce.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_FARMS.map((farm) => (
              <FarmCard key={farm.id} farm={farm} />
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/farms" // Link to a dedicated farms page if you create one later
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              View All Farms <Tractor className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Farmers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            Meet Our Farmers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Learn about the passionate individuals behind your food.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_FARMERS.map((farmer) => (
              <FarmerCard key={farmer.id} farmer={farmer} />
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/farmers" // Link to a dedicated farmers page if you create one later
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Meet All Farmers <User className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

// --- Sub-Components for the ProductsPage ---

// Product Card Component
interface ProductCardProps {
  product: Product; // Uses the Product interface defined above
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Image
      src={product.image}
      alt={product.name}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/400x300/cccccc/333333?text=Image+Unavailable";
      }}
    />
    <div className="p-6 text-left">
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
        {product.name}
      </h3>
      <p className="text-green-700 font-semibold text-md mb-2">
        {product.producer}
      </p>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-green-700 font-bold text-lg">
          ₱{product.price.toFixed(2)}
        </span>
        <button
          onClick={() => alert(`Added ${product.name} to cart!`)} // Placeholder for add to cart logic
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

// Category Button Component
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
  <button
    className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out ${
      isSelected
        ? "bg-green-600 text-white shadow-md"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
    }`}
    onClick={onClick}
  >
    {category}
  </button>
);

// --- New Sub-Components for Farms and Farmers ---

// Farm Card Component
interface FarmCardProps {
  farm: Farm; // Uses the Farm interface defined above
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Image
      src={farm.image}
      alt={farm.name}
      width={600}
      height={400}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/600x400/cccccc/333333?text=Farm+Image+Unavailable";
      }}
    />
    <div className="p-6 text-left">
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
        {farm.name}
      </h3>
      <p className="text-gray-600 text-sm mb-3 flex items-center">
        <MapPin size={16} className="mr-1 text-green-500" /> {farm.location}
      </p>
      <p className="text-gray-700 text-base mb-4 line-clamp-3">
        {farm.description}
      </p>
      <div className="mt-auto">
        <p className="text-sm text-gray-500 font-semibold mb-2">Products:</p>
        <div className="flex flex-wrap gap-2">
          {farm.productsOffered.map((product, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {product}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Farmer Card Component
interface FarmerCardProps {
  farmer: Farmer; // Uses the Farmer interface defined above
}

const FarmerCard: React.FC<FarmerCardProps> = ({ farmer }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col items-center text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Image
      src={farmer.avatar}
      alt={farmer.name}
      width={100} // Add this
      height={100} // Add this
      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200 shadow-md"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/100x100/9ca3af/ffffff?text=Avatar";
      }}
    />
    <h3 className="text-xl font-bold text-gray-900 mb-1">{farmer.name}</h3>
    <p className="text-green-700 font-semibold text-md mb-3">
      {farmer.farmName}
    </p>
    <p className="text-gray-600 text-sm line-clamp-4">{farmer.bio}</p>
  </div>
);
