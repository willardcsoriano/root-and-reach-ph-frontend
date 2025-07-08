// --- TYPE DEFINITIONS ---
export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  imageUrl: string;
}

export interface Farmer {
  id: number;
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

// --- MOCK DATA ---
export const farmersData: Farmer[] = [
  {
    id: 1,
    name: "Eleanor Green",
    location: "Batangas, Philippines",
    joinDate: "2022-03-15",
    bio: "Eleanor is a third-generation farmer carrying on her family's legacy at 'Verdant Fields.' With a degree in agricultural science, she combines traditional wisdom with modern sustainable techniques. Her passion is soil health, believing that great produce starts from the ground up. She hosts monthly workshops for aspiring young farmers in her community.",
    philosophy:
      "To cultivate with conscience, leaving the soil richer for the next generation. We don't just grow food; we grow ecosystems.",
    specialties: ["Leafy Greens", "Tomatoes", "Herbs", "Root Crops"],
    certifications: ["Organic Certified", "Good Agricultural Practices (GAP)"],
    imageUrl:
      "https://images.pexels.com/photos/4207783/pexels-photo-4207783.jpeg",
    gallery: [
      "https://images.pexels.com/photos/235659/pexels-photo-235659.jpeg",
      "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg",
      "https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg",
    ],
    products: [
      {
        id: 101,
        name: "Heirloom Tomatoes",
        price: 180,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
      },
      {
        id: 102,
        name: "Fresh Basil",
        price: 50,
        unit: "bunch",
        imageUrl:
          "https://images.pexels.com/photos/161556/basil-herbs-aromatic-mediterranean-161556.jpeg",
      },
      {
        id: 103,
        name: "Romaine Lettuce",
        price: 120,
        unit: "head",
        imageUrl:
          "https://images.pexels.com/photos/59596/lettuce-leaf-salad-green-salad-Healthy-59596.jpeg",
      },
    ],
  },
  {
    id: 2,
    name: "Samuel Reyes",
    location: "Bukidnon, Philippines",
    joinDate: "2021-11-20",
    bio: "Samuel manages a high-altitude farm that has been in his family for over 50 years. He is a master of intercropping, growing world-class coffee beans alongside tropical fruits. He believes in biodiversity and his farm is a sanctuary for local bird species. He is a respected elder in the Bukidnon coffee growers community.",
    philosophy:
      "The mountain gives us its gifts; it is our duty to protect it in return. Every coffee bean holds the story of the land.",
    specialties: ["Coffee", "Pineapple", "Avocado", "Banana"],
    certifications: ["Fair Trade Certified", "Rainforest Alliance"],
    imageUrl:
      "https://images.pexels.com/photos/5921808/pexels-photo-5921808.jpeg",
    gallery: [
      "https://images.pexels.com/photos/3376794/pexels-photo-3376794.jpeg",
      "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg",
      "https://images.pexels.com/photos/8949867/pexels-photo-8949867.jpeg",
    ],
    products: [
      {
        id: 201,
        name: "Arabica Coffee Beans",
        price: 600,
        unit: "500g",
        imageUrl:
          "https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg",
      },
      {
        id: 202,
        name: "Sweet Pineapples",
        price: 80,
        unit: "piece",
        imageUrl:
          "https://images.pexels.com/photos/143582/pexels-photo-143582.jpeg",
      },
      {
        id: 203,
        name: "Hass Avocados",
        price: 250,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg",
      },
    ],
  },
  {
    id: 3,
    name: "Marisol Tan",
    location: "Cebu, Philippines",
    joinDate: "2023-01-10",
    bio: "Marisol runs a small seaside farm where she raises salt-tolerant vegetables and herbs. Inspired by her coastal roots, she experiments with hydroponics and aquaponics, aiming to reduce freshwater usage. She teaches local schools about sustainable aquaculture.",
    philosophy: "Water is life—let us grow with respect for every drop.",
    specialties: ["Water Spinach", "Sea Lettuce", "Bok Choy"],
    certifications: ["Aquaponics Certified"],
    imageUrl:
      "https://images.pexels.com/photos/4666757/pexels-photo-4666757.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1669783/pexels-photo-1669783.jpeg",
      "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg",
      "https://images.pexels.com/photos/59927/pexels-photo-59927.jpeg",
    ],
    products: [
      {
        id: 301,
        name: "Hydroponic Bok Choy",
        price: 140,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/1111313/pexels-photo-1111313.jpeg",
      },
      {
        id: 302,
        name: "Sea Lettuce Bundle",
        price: 90,
        unit: "bunch",
        imageUrl:
          "https://images.pexels.com/photos/4248570/pexels-photo-4248570.jpeg",
      },
      {
        id: 303,
        name: "Water Spinach",
        price: 60,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
      },
    ],
  },
  {
    id: 4,
    name: "Carlo Mendoza",
    location: "Laguna, Philippines",
    joinDate: "2022-07-05",
    bio: "Carlo specializes in high-tech greenhouse farming of peppers and tomatoes. He integrates IoT sensors to monitor microclimate conditions and optimizes yield year-round. He regularly publishes his findings for the local ag-tech community.",
    philosophy: "Innovation nourishes both the land and the mind.",
    specialties: ["Bell Peppers", "Cherry Tomatoes"],
    certifications: ["GAP", "Hydroponic Practices"],
    imageUrl:
      "https://images.pexels.com/photos/6207654/pexels-photo-6207654.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1250317/pexels-photo-1250317.jpeg",
      "https://images.pexels.com/photos/1440971/pexels-photo-1440971.jpeg",
      "https://images.pexels.com/photos/1283215/pexels-photo-1283215.jpeg",
    ],
    products: [
      {
        id: 401,
        name: "Yellow Bell Peppers",
        price: 200,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/1119756/pexels-photo-1119756.jpeg",
      },
      {
        id: 402,
        name: "Heirloom Cherry Tomatoes",
        price: 220,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/130053/pexels-photo-130053.jpeg",
      },
    ],
  },
  {
    id: 5,
    name: "Isabel Cruz",
    location: "Iloilo, Philippines",
    joinDate: "2021-05-22",
    bio: "Isabel runs a traditional rice paddy that practices integrated pest management. She’s passionate about heirloom rice varieties and hosts harvest festivals to celebrate local culture.",
    philosophy: "Every grain tells our story.",
    specialties: ["Heirloom Rice", "Duck-Rice Farming"],
    certifications: ["Integrated Pest Management"],
    imageUrl:
      "https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg",
    gallery: [
      "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg",
      "https://images.pexels.com/photos/4144723/pexels-photo-4144723.jpeg",
      "https://images.pexels.com/photos/3174076/pexels-photo-3174076.jpeg",
    ],
    products: [
      {
        id: 501,
        name: "Organic Jasmine Rice",
        price: 80,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/6434072/pexels-photo-6434072.jpeg",
      },
      {
        id: 502,
        name: "Sticky Rice (Malagkit)",
        price: 100,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/46239/rice-jasmine-cooking-food-46239.jpeg",
      },
    ],
  },
  {
    id: 6,
    name: "Rafael Gutierrez",
    location: "Pampanga, Philippines",
    joinDate: "2022-10-01",
    bio: "Rafael tends a sprawling sugarcane plantation using renewable energy for milling. He’s spearheaded a biofuel pilot project and trains other farmers on cooperative models.",
    philosophy: "Sweet solutions grow in strong communities.",
    specialties: ["Sugarcane", "Biofuel Crops"],
    certifications: ["Fair Trade"],
    imageUrl:
      "https://images.pexels.com/photos/10430629/pexels-photo-10430629.jpeg",
    gallery: [
      "https://images.pexels.com/photos/4051940/pexels-photo-4051940.jpeg",
      "https://images.pexels.com/photos/4258674/pexels-photo-4258674.jpeg",
      "https://images.pexels.com/photos/4579471/pexels-photo-4579471.jpeg",
    ],
    products: [
      {
        id: 601,
        name: "Raw Sugarcane Juice",
        price: 60,
        unit: "liter",
        imageUrl:
          "https://images.pexels.com/photos/53413/pexels-photo-53413.jpeg",
      },
      {
        id: 602,
        name: "Organic Muscovado Sugar",
        price: 150,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/2831814/pexels-photo-2831814.jpeg",
      },
    ],
  },
  {
    id: 7,
    name: "Lucia Santos",
    location: "Bohol, Philippines",
    joinDate: "2023-04-12",
    bio: "Lucia manages a cocoa and cacao farm under agroforestry principles. She harvests rare heirloom cacao and runs chocolate-making workshops for tourists.",
    philosophy: "Shade and diversity yield the finest chocolate.",
    specialties: ["Cacao", "Understory Crops"],
    certifications: ["Fair Trade", "Rainforest Alliance"],
    imageUrl:
      "https://images.pexels.com/photos/3650702/pexels-photo-3650702.jpeg",
    gallery: [
      "https://images.pexels.com/photos/2768415/pexels-photo-2768415.jpeg",
      "https://images.pexels.com/photos/3746763/pexels-photo-3746763.jpeg",
      "https://images.pexels.com/photos/3279410/pexels-photo-3279410.jpeg",
    ],
    products: [
      {
        id: 701,
        name: "Single-Origin Cacao Beans",
        price: 500,
        unit: "250g",
        imageUrl:
          "https://images.pexels.com/photos/686316/pexels-photo-686316.jpeg",
      },
      {
        id: 702,
        name: "Dark Chocolate Bar",
        price: 200,
        unit: "bar",
        imageUrl:
          "https://images.pexels.com/photos/1309983/pexels-photo-1309983.jpeg",
      },
    ],
  },
  {
    id: 8,
    name: "Diego Velasco",
    location: "Quezon, Philippines",
    joinDate: "2021-09-30",
    bio: "Diego specializes in coffee varietals in the cool highlands of Quezon. He’s known for his barrel-aged coffee and has won regional barista awards.",
    philosophy: "Patience and time unlock depth in every bean.",
    specialties: ["Barrel-Aged Coffee", "Liberica Beans"],
    certifications: ["Specialty Coffee Association"],
    imageUrl:
      "https://images.pexels.com/photos/4342134/pexels-photo-4342134.jpeg",
    gallery: [
      "https://images.pexels.com/photos/4147051/pexels-photo-4147051.jpeg",
      "https://images.pexels.com/photos/5459420/pexels-photo-5459420.jpeg",
      "https://images.pexels.com/photos/239974/pexels-photo-239974.jpeg",
    ],
    products: [
      {
        id: 801,
        name: "Barrel-Aged Arabica",
        price: 650,
        unit: "250g",
        imageUrl:
          "https://images.pexels.com/photos/1490004/pexels-photo-1490004.jpeg",
      },
      {
        id: 802,
        name: "Liberica Coffee Beans",
        price: 400,
        unit: "250g",
        imageUrl:
          "https://images.pexels.com/photos/4342134/pexels-photo-4342134.jpeg",
      },
    ],
  },
  {
    id: 9,
    name: "Florencia De Guzman",
    location: "Davao, Philippines",
    joinDate: "2022-02-18",
    bio: "Florencia cultivates exotic fruits—like dragon fruit and star apple—on her hillside orchard. She’s pioneering grafting techniques to increase disease resistance.",
    philosophy: "Diversity is the spice of growth.",
    specialties: ["Dragon Fruit", "Star Apple"],
    certifications: ["GAP"],
    imageUrl:
      "https://images.pexels.com/photos/6348071/pexels-photo-6348071.jpeg",
    gallery: [
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
      "https://images.pexels.com/photos/5905475/pexels-photo-5905475.jpeg",
      "https://images.pexels.com/photos/4516320/pexels-photo-4516320.jpeg",
    ],
    products: [
      {
        id: 901,
        name: "Dragon Fruit Pack",
        price: 120,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/8293911/pexels-photo-8293911.jpeg",
      },
      {
        id: 902,
        name: "Star Apples",
        price: 150,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/375356/pexels-photo-375356.jpeg",
      },
    ],
  },
  {
    id: 10,
    name: "Beatriz Luna",
    location: "Nueva Ecija, Philippines",
    joinDate: "2021-12-05",
    bio: "Beatriz heads a large rice-and-vegetable cooperative. She introduced no-till farming to improve yields and reduce erosion, and mentors neighboring cooperatives on best practices.",
    philosophy: "Collaboration cultivates prosperity for all.",
    specialties: ["Rice", "Tomatoes", "Eggplants"],
    certifications: ["Organic Certified", "Cooperative Leader Award"],
    imageUrl:
      "https://images.pexels.com/photos/6754313/pexels-photo-6754313.jpeg",
    gallery: [
      "https://images.pexels.com/photos/6754315/pexels-photo-6754315.jpeg",
      "https://images.pexels.com/photos/6754314/pexels-photo-6754314.jpeg",
      "https://images.pexels.com/photos/6754312/pexels-photo-6754312.jpeg",
    ],
    products: [
      {
        id: 1001,
        name: "Premium Rice",
        price: 70,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/6754316/pexels-photo-6754316.jpeg",
      },
      {
        id: 1002,
        name: "Fresh Eggplants",
        price: 90,
        unit: "kg",
        imageUrl:
          "https://images.pexels.com/photos/6754317/pexels-photo-6754317.jpeg",
      },
    ],
  },
];
