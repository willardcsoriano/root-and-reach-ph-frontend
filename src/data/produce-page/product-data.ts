// --- Type Interfaces ---
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  producer: string;
}

export interface Farm {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  productsOffered: string[];
}

export interface Farmer {
  id: string;
  name: string;
  farmName: string;
  bio: string;
  avatar: string;
}

// NEW: Interface for Curated Bundles
export interface Bundle {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// --- Mock Data ---
export const MOCK_PRODUCTS: Product[] = [
  // ... your existing product data
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
    price: 70.0,
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

export const MOCK_FARMS: Farm[] = [
  // ... your existing farm data
  {
    id: "farm001",
    name: "Green Harvest Farm",
    location: "Cavite, Philippines",
    image: "https://placehold.co/600x400/84cc16/ffffff?text=Green+Farm",
    description:
      "Dedicated to sustainable and organic farming practices, providing fresh vegetables year-round.",
    productsOffered: ["Lettuce", "Tomatoes", "Cucumbers", "Herbs"],
  },
  // ... etc.
];

export const MOCK_FARMERS: Farmer[] = [
  // ... your existing farmer data
  {
    id: "farmer001",
    name: "Aling Nena",
    farmName: "Green Harvest Farm",
    bio: "With over 30 years of experience, Aling Nena is passionate about growing organic vegetables using traditional methods.",
    avatar: "https://placehold.co/100x100/9ca3af/ffffff?text=AN",
  },
  // ... etc.
];

// NEW: Mock Data for Curated Bundles
export const MOCK_BUNDLES: Bundle[] = [
  {
    id: "bundle01",
    name: "Weekly Veggie Box",
    description:
      "A mix of 5-7 seasonal vegetables, perfect for a week of healthy meals.",
    price: 750,
    image: "https://placehold.co/400x300/16a34a/ffffff?text=Veggie+Box",
  },
  {
    id: "bundle02",
    name: "Filipino Breakfast Kit",
    description:
      "Everything you need for a classic Pinoy breakfast: fresh eggs, tomatoes, and more.",
    price: 450,
    image: "https://placehold.co/400x300/f59e0b/ffffff?text=Breakfast+Kit",
  },
  {
    id: "bundle03",
    name: "Tropical Fruit Basket",
    description:
      "Enjoy a curated selection of the sweetest local fruits like mangoes and bananas.",
    price: 550,
    image: "https://placehold.co/400x300/facc15/ffffff?text=Fruit+Basket",
  },
];

// C:\Users\Willard\root-and-reach-ph-frontend\src\data\produce-page\product-data.ts
// --- Type Interfaces ---
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  producer: string;
}

export interface Farm {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  productsOffered: string[];
}

export interface Farmer {
  id: string;
  name: string;
  farmName: string;
  bio: string;
  avatar: string;
}
