"use client"; // This page requires state for filtering, so it's a Client Component.

import React, { useState, useMemo } from 'react';
import { Leaf, MapPin, Search, Sprout, ChevronDown } from 'lucide-react';
import Image from 'next/image'; // Using Next.js Image for optimization
import Link from 'next/link'; // 👈 Import the Link component

// --- TYPE DEFINITION ---
// Defines the structure for a single farmer object.
type Farmer = {
  id: number;
  name: string;
  location: string;
  bio: string;
  specialties: string[];
  imageUrl: string;
  joinDate: string;
};

// --- MOCK DATA ---
// In a real application, this data would come from your database/API.
const farmersData: Farmer[] = [
  {
    id: 1,
    name: 'Eleanor Green',
    location: 'Batangas, Philippines',
    bio: 'A third-generation farmer passionate about organic vegetable farming and soil health. Our farm, "Verdant Fields," is dedicated to sustainable practices.',
    specialties: ['Leafy Greens', 'Tomatoes', 'Herbs'],
    imageUrl: 'https://images.pexels.com/photos/4207783/pexels-photo-4207783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    joinDate: '2022-03-15',
  },
  {
    id: 2,
    name: 'Samuel Reyes',
    location: 'Bukidnon, Philippines',
    bio: 'Specializing in high-altitude coffee and tropical fruits. My family has been cultivating the rich lands of Bukidnon for over 50 years.',
    specialties: ['Coffee', 'Pineapple', 'Avocado'],
    imageUrl: 'https://images.pexels.com/photos/5921808/pexels-photo-5921808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    joinDate: '2021-11-20',
  },
  {
    id: 3,
    name: 'Maria dela Cruz',
    location: 'Pangasinan, Philippines',
    bio: 'Known for the sweetest mangoes in the region. We also manage a small-scale aquaculture farm for fresh tilapia and bangus.',
    specialties: ['Mangoes', 'Fish', 'Rice'],
    imageUrl: 'https://images.pexels.com/photos/6603099/pexels-photo-6603099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    joinDate: '2023-01-10',
  },
  {
    id: 4,
    name: 'Benny\&apos;s Poultry',
    location: 'Rizal, Philippines',
    bio: 'We provide the community with fresh, free-range eggs and poultry. Our chickens are raised ethically, with plenty of space to roam.',
    specialties: ['Eggs', 'Chicken'],
    imageUrl: 'https://images.pexels.com/photos/2884144/pexels-photo-2884144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    joinDate: '2022-08-01',
  },
  {
    id: 5,
    name: 'Laguna Organics',
    location: 'Laguna, Philippines',
    bio: 'A cooperative of small-holder farmers focused on a diverse range of organic produce. We believe in the power of community and healthy eating.',
    specialties: ['Leafy Greens', 'Root Crops', 'Herbs'],
    imageUrl: 'https://images.pexels.com/photos/7513158/pexels-photo-7513158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    joinDate: '2023-05-22',
  },
  {
    id: 6,
    name: 'Davao Cacao Collective',
    location: 'Davao City, Philippines',
    bio: 'From bean to bar, our collective is dedicated to producing world-class cacao beans for artisan chocolatiers and home bakers alike.',
    specialties: ['Cacao', 'Coffee'],
    imageUrl: 'https://images.pexels.com/photos/8965613/pexels-photo-8965613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    joinDate: '2022-09-30',
  },
];


// --- FARMER CARD COMPONENT (Corrected) ---
const FarmerCard: React.FC<{ farmer: Farmer }> = ({ farmer }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
    <div className="relative h-48 w-full">
      <Image
        src={farmer.imageUrl}
        alt={`A photo of ${farmer.name}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
        className="group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5 flex flex-col">
      <h3 className="text-2xl font-bold font-inter text-green-800">{farmer.name}</h3>
      <div className="flex items-center text-gray-500 mt-1 mb-3">
        <MapPin size={16} className="mr-2 flex-shrink-0" />
        <span className="text-sm">{farmer.location}</span>
      </div>
      <p className="text-gray-700 text-sm mb-4 flex-grow h-20">{farmer.bio}</p>
      <div className="mb-4 mt-auto">
        <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
        <div className="flex flex-wrap gap-2">
          {farmer.specialties.map(specialty => (
            <span key={specialty} className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              {specialty}
            </span>
          ))}
        </div>
      </div>
      <Link 
        href={`/farmers/${farmer.id}`} 
        className="mt-4 inline-block w-full text-center bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        View Profile
      </Link>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
const FarmersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');

  // Memoize specialty list to avoid re-calculating on every render
  const allSpecialties = useMemo(() => {
    const specialties = new Set<string>();
    farmersData.forEach(farmer => {
      farmer.specialties.forEach(spec => specialties.add(spec));
    });
    return Array.from(specialties).sort();
  }, []);

  // Memoize filtered results to avoid re-filtering on every render
  const filteredFarmers = useMemo(() => {
    return farmersData
      .filter(farmer =>
        farmer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(farmer =>
        filterSpecialty ? farmer.specialties.includes(filterSpecialty) : true
      );
  }, [searchTerm, filterSpecialty]);

  return (
    <div className="bg-green-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white text-center py-16 px-4">
        <Sprout size={48} className="mx-auto mb-4 text-green-300" />
        <h1 className="text-5xl font-extrabold font-inter tracking-tight">Meet Our Growers</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-green-200">
          The heart and soil of our community. Get to know the dedicated farmers who bring you fresh, sustainable, and locally-grown produce.
        </p>
      </section>

      {/* 2. Filter and Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="search"
              placeholder="Search by farmer's name..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            <select
              className="w-full appearance-none bg-white pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              onChange={(e) => setFilterSpecialty(e.target.value)}
              value={filterSpecialty}
            >
              <option value="">Filter by specialty...</option>
              {allSpecialties.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 3. Farmer Grid Section */}
        {filteredFarmers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFarmers.map(farmer => (
              <FarmerCard key={farmer.id} farmer={farmer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No Farmers Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter to find our amazing partners.</p>
          </div>
        )}
      </div>

      {/* 4. Call to Action (CTA) Section */}
      <section className="bg-white mt-16">
        <div className="container mx-auto px-4 py-16 text-center">
            <Leaf size={40} className="mx-auto mb-4 text-green-600"/>
            <h2 className="text-4xl font-bold font-inter text-gray-800">Are You a Farmer?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Join our mission to bring fresh, local produce to tables across the nation. We&apos;d love to help you grow your reach.
            </p>
            <Link 
                href="/partner-application" 
                className="mt-8 inline-block bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                Become a Partner
            </Link>
        </div>
      </section>
    </div>
  );
};

export default FarmersPage;