"use client"; // 👈 1. Mark as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import { Check, ShoppingCart } from "lucide-react";
import { Product } from "@/data/produce-page/product-data";
import { useCart } from "@/contexts/CartContext"; // 👈 2. Import the useCart hook

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // 3. Get the addToCart function from our context
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // 4. Create a handler function for the button click
  const handleAddToCart = () => {
    // Map the product data to what the CartItem expects
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.image, // Map image -> imageUrl
      farmer: product.producer, // Map producer -> farmer
    };
    addToCart(itemToAdd);

    // Provide visual feedback
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2500); // Reset after 2.5 seconds
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x300/cccccc/333333?text=Image+Unavailable";
          }}
        />
      </div>
      <div className="p-6 text-left flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-green-700 font-semibold text-md mb-2">
          {product.producer}
        </p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-green-700 font-bold text-lg">
            ₱{product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md w-36 ${
              isAdded
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={18} className="mr-1" /> Added
              </>
            ) : (
              <>
                <ShoppingCart size={16} className="mr-2" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
