"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart, CartItem } from '@/contexts/CartContext';
import { Plus, Minus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';

// --- Individual Cart Item Row Component ---
const CartItemRow: React.FC<{ item: CartItem }> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4">
      {/* Image */}
      <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={item.imageUrl} alt={item.name} fill style={{ objectFit: 'cover' }} />
      </div>

      {/* Details */}
      <div className="flex-grow">
        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">from {item.farmer}</p>
        <p className="text-md font-semibold text-green-600 mt-1">₱{item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 border rounded-full p-1">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="font-bold w-8 text-center">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Subtotal & Remove */}
      <div className="text-right flex-shrink-0 w-28">
        <p className="font-bold text-lg text-gray-800">₱{(item.price * item.quantity).toFixed(2)}</p>
        <button 
          onClick={() => removeFromCart(item.id)} 
          className="text-sm text-red-500 hover:text-red-700 hover:underline mt-1 transition-colors"
          aria-label="Remove item"
        >
          Remove
        </button>
      </div>
    </div>
  );
};


// --- Main Cart Page Component ---
const CartPage = () => {
  const { cartItems, getCartItemCount } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 50.00 : 0; // Example fixed shipping fee
  const total = subtotal + shippingFee;

  // --- Empty Cart View ---
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 md:py-32">
        <ShoppingCart size={64} className="mx-auto text-gray-300" />
        <h1 className="mt-6 text-3xl font-bold text-gray-800">Your cart is empty</h1>
        <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          href="/products" 
          className="mt-8 inline-block bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // --- Cart View with Items ---
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold font-inter text-gray-800 mb-6">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <div className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold border-b pb-4 mb-4">Order Summary</h2>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({getCartItemCount()} items)</span>
                <span className="font-semibold">₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">₱{shippingFee.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>₱{total.toFixed(2)}</span>
              </div>
            </div>
            <Link 
              href="/checkout" 
              className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold text-lg py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;