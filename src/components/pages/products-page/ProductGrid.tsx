import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/produce-page/product-data";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl shadow-md">
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          No products found matching your criteria.
        </p>
        <p className="text-lg text-gray-500">
          Try adjusting your filters or search query.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
