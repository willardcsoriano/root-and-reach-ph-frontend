'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect, // Added useEffect for localStorage persistence
} from 'react';

// --- Interfaces for Cart State ---
export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  producer: string; // Added 'producer' back for consistency
}

// Interface for the product object passed to addItemToCart
interface ProductToAdd {
  id: string;
  name: string;
  image: string;
  price: number;
  producer: string;
}

interface CartContextValue {
  cartItems: CartItem[]; // Renamed 'items' to 'cartItems' for consistency
  addItemToCart: (product: ProductToAdd) => void; // Aligned with ProductToAdd type
  removeItemFromCart: (productId: string) => void;
  updateItemQuantity: (productId: string, quantity: number) => void; // Re-added this crucial function
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number; // This is the property that was missing
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize cart from localStorage if available, otherwise empty array
  const [cartItems, setCartItems] = useState<CartItem[]>(() => { // Renamed 'items' to 'cartItems'
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('rootAndReachCart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('rootAndReachCart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Add item to cart or increase quantity if it exists
  const addItemToCart = (product: ProductToAdd) => { // Aligned with ProductToAdd type
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productId === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Correctly map product.id to productId when adding a new item
      return [...prevItems, { ...product, productId: product.id, quantity: 1 }];
    });
  };

  // Remove item completely from cart
  const removeItemFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  };

  // Update specific item quantity (re-added this function)
  const updateItemQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItemFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productId === productId
          ? { ...item, quantity: quantity }
          : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  // Calculate total price of items in cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get total number of items (sum of quantities) in cart
  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const contextValue: CartContextValue = { // Explicitly type contextValue
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity, // Included in context value
    clearCart,
    getCartTotal,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
};
