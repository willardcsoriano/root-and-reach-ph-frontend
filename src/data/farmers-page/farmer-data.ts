// src\data\farmers-page\farmer-data.ts

// --- TYPE DEFINITIONS ---
export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  imageUrl: string;
}

export interface Farmer {
  id: string;
  name: string;
  location: string;
  joinDate: string;
  bio: string;
  philosophy: string;
  specialties: string[];
  certifications: string[];
  imageUrl: string;
  gallery: string[];
  products: Product[];
}

// --- MOCK DATA (Revised with accurate placeholder images) ---
export const farmersData: Farmer[] = [
  {
    id: "1",
    name: "Lorna Reyes",
    location: "Lipa, Batangas",
    joinDate: "2022-03-15",
    bio: "Lorna is a third-generation coffee farmer at 'Café de Lipa', carrying on the proud tradition of cultivating world-class Kapeng Barako (Liberica coffee). Her passion is preserving the heritage of Batangas coffee.",
    philosophy: "Every cup should tell the story of our soil and our history.",
    specialties: ["Kapeng Barako", "Robusta Coffee", "Tablea"],
    certifications: [
      "Organic Certified",
      "Philippine Coffee Quality Competition",
    ],
    imageUrl:
      "https://placehold.co/600x400/6B4F4F/ffffff?text=Batangas+Coffee+Farmer",
    gallery: [
      "https://placehold.co/400x300/A47551/ffffff?text=Coffee+Drying",
      "https://placehold.co/400x300/4E3629/ffffff?text=Roasted+Beans",
      "https://placehold.co/400x300/E0C097/ffffff?text=Lipa+Farmstead",
    ],
    products: [
      {
        id: 101,
        name: "Kapeng Barako Beans",
        price: 450,
        unit: "500g",
        imageUrl:
          "https://placehold.co/400x300/4E3629/ffffff?text=Kapeng+Barako",
      },
      {
        id: 102,
        name: "Pure Cacao Tablea",
        price: 150,
        unit: "roll",
        imageUrl: "https://placehold.co/400x300/5D4037/ffffff?text=Tablea",
      },
      {
        id: 103,
        name: "Free-Range Brown Eggs",
        price: 120,
        unit: "dozen",
        imageUrl: "https://placehold.co/400x300/D4A276/ffffff?text=Fresh+Eggs",
      },
    ],
  },
  {
    id: "2",
    name: "Elena & Ben Santiago",
    location: "Science City of Muñoz, Nueva Ecija",
    joinDate: "2021-11-20",
    bio: "Husband and wife team Elena and Ben have been tending their five-hectare rice paddy for over 40 years. They are pioneers in practicing integrated pest management for heirloom rice varieties.",
    philosophy: "The land is a gift we borrow from our children.",
    specialties: ["Heirloom Rice", "Organic Brown Rice"],
    certifications: ["PhilGAP (Good Agricultural Practices)"],
    imageUrl: "https://placehold.co/600x400/84cc16/ffffff?text=Rice+Farmers",
    gallery: [
      "https://placehold.co/400x300/a3e635/ffffff?text=Rice+Paddy",
      "https://placehold.co/400x300/c2c2a3/ffffff?text=Harvest+Time",
      "https://placehold.co/400x300/e6e6e6/ffffff?text=Sacks+of+Rice",
    ],
    products: [
      {
        id: 201,
        name: "Organic Tinawon Rice",
        price: 95,
        unit: "kg",
        imageUrl:
          "https://placehold.co/400x300/cbcba9/ffffff?text=Tinawon+Rice",
      },
      {
        id: 202,
        name: "Organic Brown Rice",
        price: 85,
        unit: "kg",
        imageUrl: "https://placehold.co/400x300/c7a683/ffffff?text=Brown+Rice",
      },
    ],
  },
  {
    id: "3",
    name: 'Ricardo "Mang Rick" Santos',
    location: "Calinan, Davao City",
    joinDate: "2023-01-10",
    bio: 'Known locally as the "King of Fruits," Mang Rick manages a thriving orchard filled with durian, mangosteen, and pomelo trees. He advocates for agroforestry to maintain biodiversity.',
    philosophy: "Let nature do the work, and the fruit will be twice as sweet.",
    specialties: ["Durian", "Mangosteen", "Pomelo", "Cacao"],
    certifications: ["Rainforest Alliance", "Fair Trade"],
    imageUrl:
      "https://placehold.co/600x400/fde047/1e293b?text=Davao+Fruit+Farmer",
    gallery: [
      "https://placehold.co/400x300/fef08a/1e293b?text=Durian+Tree",
      "https://placehold.co/400x300/7e22ce/ffffff?text=Mangosteen",
      "https://placehold.co/400x300/d9f99d/1e293b?text=Pomelo+Orchard",
    ],
    products: [
      {
        id: 301,
        name: "Puyat Durian",
        price: 280,
        unit: "kg",
        imageUrl: "https://placehold.co/400x300/fef08a/1e293b?text=Durian",
      },
      {
        id: 302,
        name: "Fresh Mangosteen",
        price: 180,
        unit: "kg",
        imageUrl: "https://placehold.co/400x300/7e22ce/ffffff?text=Mangosteen",
      },
      {
        id: 303,
        name: "Single-Origin Cacao Beans",
        price: 500,
        unit: "250g",
        imageUrl: "https://placehold.co/400x300/5D4037/ffffff?text=Cacao+Beans",
      },
    ],
  },
  {
    id: "4",
    name: "Anita Gomez",
    location: "La Trinidad, Benguet",
    joinDate: "2022-07-05",
    bio: "In the cool highlands of Benguet, Anita operates a greenhouse farm specializing in crisp lettuces, sweet strawberries, and fresh herbs, supplying top restaurants in the city.",
    philosophy: "Good food starts with cool weather and careful hands.",
    specialties: ["Lettuce Varieties", "Strawberries", "Herbs"],
    certifications: ["Good Agricultural Practices (GAP)"],
    imageUrl: "https://placehold.co/600x400/fb7185/ffffff?text=Benguet+Farmer",
    gallery: [
      "https://placehold.co/400x300/e11d48/ffffff?text=Strawberry+Field",
      "https://placehold.co/400x300/bef264/1e293b?text=Crisp+Lettuce",
      "https://placehold.co/400x300/a3e635/1e293b?text=Herb+Garden",
    ],
    products: [
      {
        id: 401,
        name: "Fresh Strawberries",
        price: 400,
        unit: "250g",
        imageUrl:
          "https://placehold.co/400x300/f43f5e/ffffff?text=Strawberries",
      },
      {
        id: 402,
        name: "Romaine Lettuce",
        price: 120,
        unit: "head",
        imageUrl: "https://placehold.co/400x300/84cc16/1e293b?text=Romaine",
      },
      {
        id: 403,
        name: "Fresh Rosemary",
        price: 60,
        unit: "bunch",
        imageUrl: "https://placehold.co/400x300/4d7c0f/ffffff?text=Rosemary",
      },
    ],
  },
  {
    id: "5",
    name: "Tia Pacing",
    location: "Lucban, Quezon",
    joinDate: "2022-02-18",
    bio: "Tia Pacing is famous in her town for two things: her colorful Pahiyas decorations and her rich, aromatic coconut products. She processes everything by hand, from grating the coconut to bottling the oil.",
    philosophy: "Nothing from the coconut is ever wasted.",
    specialties: ["Coconut Oil", "Pancit Habhab", "Longganisang Lucban"],
    certifications: ["DTI Registered"],
    imageUrl: "https://placehold.co/600x400/78350f/ffffff?text=Quezon+Artisan",
    gallery: [
      "https://placehold.co/400x300/a16207/ffffff?text=Coconut+Grove",
      "https://placehold.co/400x300/f87171/ffffff?text=Pahiyas+Festival",
      "https://placehold.co/400x300/eab308/ffffff?text=Fresh+Buko",
    ],
    products: [
      {
        id: 501,
        name: "Virgin Coconut Oil",
        price: 250,
        unit: "250ml",
        imageUrl: "https://placehold.co/400x300/fefce8/78350f?text=VCO",
      },
      {
        id: 502,
        name: "Longganisang Lucban",
        price: 180,
        unit: "dozen",
        imageUrl: "https://placehold.co/400x300/ef4444/ffffff?text=Longganisa",
      },
    ],
  },
];
