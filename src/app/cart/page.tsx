// app/cart/page.tsx
"use client"; // This page component will be a client component because it uses hooks and interacts with browser APIs

import React from 'react';
import { useCart, CartProvider } from '../../contexts/CartContext';

// This is your actual Cart Page component
function CartPageContent() {
  const { cartItems, removeItemFromCart, updateItemQuantity, getCartTotal, clearCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.productId} className="py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Producer: {item.producer}</p>
                    <p className="text-gray-800">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateItemQuantity(item.productId, parseInt(e.target.value))}
                    className="w-16 text-center border rounded py-1 px-2 mr-4"
                  />
                  <button
                    onClick={() => removeItemFromCart(item.productId)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</h3>
            <button
              onClick={clearCart}
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert('Proceed to checkout!')} // Replace with actual checkout logic
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// The default export for the /cart route must be a React component.
// We wrap the CartPageContent with CartProvider here.
export default function CartPage() {
  return (
    <CartProvider>
      <CartPageContent />
    </CartProvider>
  );
}