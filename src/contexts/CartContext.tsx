"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// --- TYPE DEFINITIONS ---

// Defines the structure of a single item in the cart
export interface CartItem {
  id: number;
  name:string;
  price: number;
  quantity: number;
  imageUrl: string;
  farmer: string;
}

// Defines the values that will be available in the context
interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  getCartItemCount: () => number;
  clearCart: () => void;
}

// --- CREATE THE CONTEXT ---
// We create the context with an initial value of undefined.
const CartContext = createContext<CartContextValue | undefined>(undefined);


// --- CREATE THE PROVIDER COMPONENT ---

// The provider is a component that will wrap our application and provide the cart state.
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage when the component mounts on the client
  useEffect(() => {
    const storedCart = localStorage.getItem('rootAndReachCart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('rootAndReachCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemToAdd: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemToAdd.id);
      const quantityToAdd = itemToAdd.quantity || 1;

      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map(item =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        // If item is new, add it to the cart
        return [...prevItems, { ...itemToAdd, quantity: quantityToAdd }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };
  
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartItemCount,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// --- CREATE THE CUSTOM HOOK ---

// This custom hook makes it easy to access the cart context in any component.
export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};