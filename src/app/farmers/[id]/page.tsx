"use client"; 

import React, { use } from 'react'; // 👈 1. Import `use` from React
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { MapPin, Calendar, Sprout, ArrowLeft, Award, Quote, ShoppingBasket, Plus, Minus, Check } from 'lucide-react';

// --- (Your Type Definitions and Mock Data remain the same) ---
type Product = { id: number; name: string; price: number; unit: string; imageUrl: string; };
type Farmer = { id: number; name: string; location: string; joinDate: string; bio: string; philosophy: string; specialties: string[]; certifications: string[]; imageUrl: string; gallery: string[]; products: Product[]; };

const farmersData: Farmer[] = [
    {
    id: 1,
    name: 'Eleanor Green',
    location: 'Batangas, Philippines',
    joinDate: '2022-03-15',
    bio: "Eleanor is a third-generation farmer carrying on her family's legacy at 'Verdant Fields.' With a degree in agricultural science, she combines traditional wisdom with modern sustainable techniques. Her passion is soil health, believing that great produce starts from the ground up. She hosts monthly workshops for aspiring young farmers in her community.",
    philosophy: "To cultivate with conscience, leaving the soil richer for the next generation. We don't just grow food; we grow ecosystems.",
    specialties: ['Leafy Greens', 'Tomatoes', 'Herbs', 'Root Crops'],
    certifications: ['Organic Certified', 'Good Agricultural Practices (GAP)'],
    imageUrl: 'https://images.pexels.com/photos/4207783/pexels-photo-4207783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/235659/pexels-photo-235659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    products: [
      { id: 101, name: 'Heirloom Tomatoes', price: 180, unit: 'kg', imageUrl: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 102, name: 'Fresh Basil', price: 50, unit: 'bunch', imageUrl: 'https://images.pexels.com/photos/161556/basil-herbs-aromatic-mediterranean-161556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 103, name: 'Romaine Lettuce', price: 120, unit: 'head', imageUrl: 'https://images.pexels.com/photos/59596/lettuce-leaf-salad-green-salad-Healthy-59596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    ]
  },
  {
    id: 2,
    name: 'Samuel Reyes',
    location: 'Bukidnon, Philippines',
    joinDate: '2021-11-20',
    bio: 'Samuel manages a high-altitude farm that has been in his family for over 50 years. He is a master of intercropping, growing world-class coffee beans alongside tropical fruits. He believes in biodiversity and his farm is a sanctuary for local bird species. He is a respected elder in the Bukidnon coffee growers community.',
    philosophy: 'The mountain gives us its gifts; it is our duty to protect it in return. Every coffee bean holds the story of the land.',
    specialties: ['Coffee', 'Pineapple', 'Avocado', 'Banana'],
    certifications: ['Fair Trade Certified', 'Rainforest Alliance'],
    imageUrl: 'https://images.pexels.com/photos/5921808/pexels-photo-5921808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/3376794/pexels-photo-3376794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8949867/pexels-photo-8949867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    products: [
      { id: 201, name: 'Arabica Coffee Beans', price: 600, unit: '500g', imageUrl: 'https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 202, name: 'Sweet Pineapples', price: 80, unit: 'piece', imageUrl: 'https://images.pexels.com/photos/143582/pexels-photo-143582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 203, name: 'Hass Avocados', price: 250, unit: 'kg', imageUrl: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    ]
  },
];

// --- (ProductCard component remains the same) ---
const ProductCard: React.FC<{ product: Product, farmerName: string }> = ({ product, farmerName }) => {
    const [quantity, setQuantity] = React.useState(1);
    const [isAdded, setIsAdded] = React.useState(false);
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        addToCart({ id: product.id, name: product.name, price: product.price, quantity: quantity, imageUrl: product.imageUrl, farmer: farmerName });
        setIsAdded(true);
        setTimeout(() => { setIsAdded(false); setQuantity(1); }, 2000);
    };
    return (
        <div className="text-center border rounded-lg p-4 flex flex-col justify-between shadow-sm">
            <div>
                <div className="relative h-32 w-full rounded-lg overflow-hidden mb-2"><Image src={product.imageUrl} alt={product.name} fill style={{objectFit: 'cover'}} /></div>
                <h4 className="font-bold text-gray-800">{product.name}</h4><p className="text-green-600 font-semibold">₱{product.price} / {product.unit}</p>
            </div>
            <div className="mt-4">
                <div className="flex items-center justify-center gap-4 mb-3"><button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-1 border rounded-full hover:bg-gray-100"><Minus size={16}/></button><span className="font-bold text-lg">{quantity}</span><button onClick={() => setQuantity(q => q + 1)} className="p-1 border rounded-full hover:bg-gray-100"><Plus size={16}/></button></div>
                <button onClick={handleAddToCart} disabled={isAdded} className={`w-full flex items-center justify-center gap-2 font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${isAdded ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-green-100 text-green-800 hover:bg-green-600 hover:text-white'}`}>{isAdded ? <><Check size={20}/> Added!</> : 'Add to Cart'}</button>
            </div>
        </div>
    );
};

// --- THE MAIN PAGE COMPONENT (REFACTORED) ---
// Note the change in the params type
export default function FarmerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  // 👈 2. UNWRAP the params promise with React.use()
  const resolvedParams = use(params);

  // 👈 3. USE the unwrapped params to find the farmer synchronously
  const farmer = farmersData.find(f => f.id === parseInt(resolvedParams.id, 10));

  if (!farmer) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Farmer not found.</h1>
        <Link href="/farmers" className="text-green-600 hover:underline">
          Return to all farmers
        </Link>
      </div>
    );
  }

  // The rest of your component renders as before
  return (
    <div className="bg-gray-50 min-h-screen">
       <div className="container mx-auto p-4 md:p-8">
        <Link href="/farmers" className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 font-semibold transition-colors">
          <ArrowLeft size={18} />
          Back to All Farmers
        </Link>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1"><div className="relative h-64 md:h-full w-full"><Image src={farmer.imageUrl} alt={`Profile of ${farmer.name}`} fill style={{objectFit: 'cover'}}/></div></div>
                <div className="md:col-span-2 p-6 md:p-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold font-inter text-green-800">{farmer.name}</h1>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 mt-4"><div className="flex items-center gap-2"><MapPin size={18} /><span>{farmer.location}</span></div><div className="flex items-center gap-2"><Calendar size={18} /><span>Joined on {new Date(farmer.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></div></div>
                    <p className="text-gray-700 mt-6 text-lg leading-relaxed">{farmer.bio}</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4"><ShoppingBasket size={24} className="text-green-600" />Available Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {farmer.products.map(product => (
                        <ProductCard key={product.id} product={product} farmerName={farmer.name} />
                      ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4"><Quote size={24} className="text-green-600" />Our Philosophy</h3><blockquote className="text-lg italic text-gray-600 border-l-4 border-green-500 pl-4">{farmer.philosophy}</blockquote></div>
            </div>
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4"><Sprout size={20} className="text-green-600" />Specializing In</h3><div className="flex flex-wrap gap-2">{farmer.specialties.map(s => <span key={s} className="bg-green-100 text-green-800 font-medium px-3 py-1 text-sm rounded-full">{s}</span>)}</div><hr className="my-6" /><h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4"><Award size={20} className="text-green-600" />Certifications</h3><div className="flex flex-wrap gap-2">{farmer.certifications.map(c => <span key={c} className="bg-blue-100 text-blue-800 font-medium px-3 py-1 text-sm rounded-full">{c}</span>)}</div></div>
                <div className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-xl font-bold text-gray-800 mb-4">Farm Gallery</h3><div className="grid grid-cols-2 gap-2">{farmer.gallery.map((img, index) => (<div key={index} className="relative h-24 w-full rounded-md overflow-hidden"><Image src={img} alt={`Farm gallery image ${index + 1}`} fill style={{objectFit: 'cover'}} /></div>))}</div></div>
            </div>
        </div>
      </div>
    </div>
  );
}