// src/data/farmers.ts
export interface Farmer {
  id: string;
  name: string;
  image: string;
  location: string;
  bio: string;
}

// src/data/farmers.ts
export interface Farmer {
  id: string;
  name: string;
  image: string;
  location: string;
  bio: string;
}

export const farmers: Farmer[] = [
  {
    id: 'f1',
    name: 'Maria Santos',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',  // placeholder face
    location: 'Laguna, PH',
    bio: 'Organic vegetable grower with 10 years of experience.',
  },
  {
    id: 'f2',
    name: 'Jose Delgado',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',    // placeholder face
    location: 'Batangas, PH',
    bio: 'Free-range chicken farmer and humane farming advocate.',
  },
  {
    id: 'f3',
    name: 'Ana Cruz',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',  // placeholder face
    location: 'Bicol, PH',
    bio: 'Renowned honey producer supporting local bee populations.',
  },
];
