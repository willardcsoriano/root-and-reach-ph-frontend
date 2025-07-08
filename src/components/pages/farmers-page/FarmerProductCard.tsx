"use client";

import React from "react";
import Image from "next/image";
import { Minus, Plus, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/farmers-page/farmer-data";

const FarmerProductCard: React.FC<{ product: Product; farmerName: string }> = ({
  product,
  farmerName,
}) => {
  const [quantity, setQuantity] = React.useState(1);
  const [isAdded, setIsAdded] = React.useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: String(product.id), // Ensure ID is a string for the cart
      name: product.name,
      price: product.price,
      quantity: quantity,
      imageUrl: product.imageUrl,
      farmer: farmerName,
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuantity(1);
    }, 2000);
  };

  return (
    <div className="text-center border rounded-lg p-4 flex flex-col justify-between shadow-sm bg-white">
      <div>
        <div className="relative h-32 w-full rounded-lg overflow-hidden mb-2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h4 className="font-bold text-gray-800">{product.name}</h4>
        <p className="text-green-600 font-semibold">
          ₱{product.price.toFixed(2)} / {product.unit}
        </p>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-center gap-4 mb-3">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="p-1 border rounded-full hover:bg-gray-100"
          >
            <Minus size={16} />
          </button>
          <span className="font-bold text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="p-1 border rounded-full hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full flex items-center justify-center gap-2 font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${isAdded ? "bg-green-500 text-white cursor-not-allowed" : "bg-green-100 text-green-800 hover:bg-green-600 hover:text-white"}`}
        >
          {isAdded ? (
            <>
              <Check size={20} /> Added!
            </>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
};

export default FarmerProductCard;
