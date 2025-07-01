// src/data/products.ts
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;       // in Philippine pesos
  farmer: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Kale',
    image: '/assets/products/kale.jpg',
    price: 150,
    farmer: 'GreenFields Farm',
  },
  {
    id: '2',
    name: 'Free-Range Eggs (Dozen)',
    image: '/assets/products/eggs.jpg',
    price: 200,
    farmer: 'SunnySide Ranch',
  },
  {
    id: '3',
    name: 'Heirloom Tomatoes',
    image: '/assets/products/tomatoes.jpeg',
    price: 120,
    farmer: 'RedEarth Organics',
  },
  {
    id: '4',
    name: 'Local Honey (500g)',
    image: '/assets/products/honey.jpg',
    price: 350,
    farmer: 'BeeHappy Apiary',
  },
];
