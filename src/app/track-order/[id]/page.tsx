// C:\Users\Willard\root-and-reach-ph-frontend\src\app\track-order\[id]\page.tsx
"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, MessageSquare, Phone, User, Home } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useOrders, Order } from "@/contexts/OrderContext";

const Map = dynamic(() => import("@/components/TrackOrderMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full bg-gray-200 flex items-center justify-center">
      Loading Map...
    </div>
  ),
});

// Corrected STATUS_MAP to match the OrderStatus type
const STATUS_MAP = ["Processing", "Shipped", "Delivered", "Canceled"];
const FARM_LOCATION: [number, number] = [14.6527, 121.0501];
const HOME_LOCATION: [number, number] = [14.6091, 121.0223];

export default function TrackOrderPage() {
  const { id: orderId } = useParams() as { id: string };
  const { orders } = useOrders();

  const [order, setOrder] = useState<Order | undefined>(undefined);
  const [orderStatusIndex, setOrderStatusIndex] = useState(0);

  const [eta, setEta] = useState<number>(40);
  const [vehiclePosition, setVehiclePosition] =
    useState<[number, number]>(FARM_LOCATION);

  useEffect(() => {
    const foundOrder = orders.find((o) => o.id === orderId);
    if (foundOrder) {
      setOrder(foundOrder);

      // --- FIX: Removed 'as any' ---
      const statusIndex = STATUS_MAP.indexOf(foundOrder.status);
      setOrderStatusIndex(statusIndex >= 0 ? statusIndex : 0);
    }
  }, [orders, orderId]);

  useEffect(() => {
    if (order?.status !== "Shipped") return;
    const interval = setInterval(() => {
      setVehiclePosition((prevPos) => {
        const newLat = prevPos[0] - (FARM_LOCATION[0] - HOME_LOCATION[0]) / 40;
        const newLng = prevPos[1] - (FARM_LOCATION[1] - HOME_LOCATION[1]) / 40;
        return [newLat, newLng];
      });
      setEta((prevEta) => Math.max(0, prevEta - 1));
    }, 60000);

    return () => clearInterval(interval);
  }, [order?.status]);

  if (!order) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Loading Order Details...</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 md:p-8">
        <Link
          href="/orders"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 font-semibold"
        >
          <ArrowLeft size={18} /> Back to My Orders
        </Link>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold">Tracking Order #{order.id}</h1>
          <p className="text-gray-500">
            Follow your fresh produce from the farm to your home.
          </p>
          <div className="flex justify-between items-center my-8">
            {STATUS_MAP.filter((s) => s !== "Canceled").map(
              (
                status,
                index, // Filter out 'Canceled' for the stepper
              ) => (
                <React.Fragment key={status}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${index <= orderStatusIndex ? "bg-green-600 border-green-600 text-white" : "bg-gray-100 border-gray-300"}`}
                    >
                      {index < orderStatusIndex ? "✓" : index + 1}
                    </div>
                    <p
                      className={`mt-2 font-semibold ${index <= orderStatusIndex ? "text-green-600" : "text-gray-500"}`}
                    >
                      {status}
                    </p>
                  </div>
                  {index < 2 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${index < orderStatusIndex ? "bg-green-600" : "bg-gray-300"}`}
                    />
                  )}
                </React.Fragment>
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Delivery Details
              </h2>
              <div className="my-6 text-center">
                <p className="text-gray-500">Estimated Time of Arrival</p>
                {eta > 0 && order.status === "Shipped" ? (
                  <p className="text-5xl font-extrabold text-green-600">
                    {eta} <span className="text-3xl">min</span>
                  </p>
                ) : (
                  <p className="text-4xl font-extrabold text-green-600">
                    {order.status}
                  </p>
                )}
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-start">
                  <User
                    size={18}
                    className="text-gray-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Recipient</p>
                    <p className="text-gray-600">
                      {order.shippingDetails.fullName}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home
                    size={18}
                    className="text-gray-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Shipping Address
                    </p>
                    <address className="not-italic text-gray-600">
                      {order.shippingDetails.address}
                      <br />
                      {order.shippingDetails.city},{" "}
                      {order.shippingDetails.postalCode}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="font-bold mb-4">Need Help?</h3>
              <div className="space-y-3">
                <Link
                  href={`/track-order/${order.id}/message`}
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  <MessageSquare size={20} /> Message Driver
                </Link>
                <Link
                  href="/support"
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                >
                  <Phone size={20} /> Call Support
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 h-[60vh] bg-white rounded-xl shadow-lg overflow-hidden">
            <Map
              vehiclePosition={vehiclePosition}
              homePosition={HOME_LOCATION}
              route={[FARM_LOCATION, HOME_LOCATION]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
