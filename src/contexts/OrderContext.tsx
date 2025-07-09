"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CartItem } from "./CartContext";

// --- The interfaces are exported directly, no self-import needed ---
export interface ShippingDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  shippingDetails: ShippingDetails;
  paymentMethod: string;
  status: "Processing" | "Shipped" | "Delivered" | "Canceled";
}

interface OrderContextValue {
  orders: Order[];
  addOrder: (
    items: CartItem[],
    total: number,
    shippingDetails: ShippingDetails,
    paymentMethod: string,
  ) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
  clearOrders: () => void;
}

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("rootAndReachOrders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const addOrder = (
    items: CartItem[],
    total: number,
    shippingDetails: ShippingDetails,
    paymentMethod: string,
  ) => {
    const newOrder: Order = {
      id: `RR-${Date.now()}`,
      date: new Date().toISOString(),
      items,
      total,
      shippingDetails,
      paymentMethod,
      status: "Processing",
    };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("rootAndReachOrders", JSON.stringify(updatedOrders));
  };

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status } : order,
    );
    setOrders(updatedOrders);
    localStorage.setItem("rootAndReachOrders", JSON.stringify(updatedOrders));
  };

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("rootAndReachOrders");
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, updateOrderStatus, clearOrders }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = (): OrderContextValue => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};
