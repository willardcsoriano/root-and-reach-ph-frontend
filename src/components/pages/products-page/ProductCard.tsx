import React from "react";
import Image from "next/image";
import { Product } from "@/data/produce-page/product-data";

interface ProductCardProps {
  product: Product;
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
          onClick={() => alert(`Added ${product.name} to cart!`)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
