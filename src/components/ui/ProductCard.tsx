import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/app/shop/page'; // You might need to move this type or import it

interface ProductCardProps {
  product: Product;
}

// Use export default to make it available to other files
export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.image,
      farmer: product.producer,
    };
    addToCart(itemToAdd);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg ...">
      {/* All the JSX for your card */}
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}