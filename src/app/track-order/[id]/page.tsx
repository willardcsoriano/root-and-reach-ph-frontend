// src/app/track-order/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Map = dynamic(() => import("@/components/TrackOrderMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-200 rounded-lg">
      <p>Loading Map…</p>
    </div>
  ),
});

const STATUSES = ["Ordered", "Packed", "On the Way", "Delivered"];
const FARM_LOCATION: [number, number] = [14.6527, 121.0501];
const HOME_LOCATION: [number, number] = [14.6091, 121.0223];

export default function TrackOrderPage() {
  // useParams() returns { [key: string]: string | string[] | undefined }
  // We know our dynamic segment is `id` and always a string:
  const { id: idParam } = useParams() as { id: string };
  const orderId = idParam;

  const [orderStatus, setOrderStatus] = useState<number>(0);
  const [eta, setEta] = useState<number>(40);
  const [vehiclePosition, setVehiclePosition] =
    useState<[number, number]>(FARM_LOCATION);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move vehicle closer to home
      setVehiclePosition((prevPos) => {
        const newLat = prevPos[0] - (FARM_LOCATION[0] - HOME_LOCATION[0]) / 40;
        const newLng = prevPos[1] - (FARM_LOCATION[1] - HOME_LOCATION[1]) / 40;
        return [newLat, newLng];
      });

      // Update ETA
      setEta((prevEta) => Math.max(0, prevEta - 1));

      // Update status based on ETA
      setOrderStatus((prevStatus: number) => {
        if (eta < 35 && prevStatus < 1) return 1;
        if (eta < 30 && prevStatus < 2) return 2;
        if (eta <= 0 && prevStatus < 3) return 3;
        return prevStatus;
      });
    }, 60_000); // every minute

    return () => clearInterval(interval);
  }, [eta]);

  const routeLine: [number, number][] = [FARM_LOCATION, HOME_LOCATION];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <Link
          href="/orders"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 font-semibold"
        >
          <ArrowLeft size={18} /> Back to My Orders
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold">Tracking Order #{orderId}</h1>
          <p className="text-gray-500">
            Follow your fresh produce from the farm to your home.
          </p>

          {/* Status Stepper */}
          <div className="flex justify-between items-center my-8">
            {STATUSES.map((status, index) => (
              <React.Fragment key={status}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      index <= orderStatus
                        ? "bg-green-600 border-green-600 text-white"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    {index < orderStatus ? "✓" : index + 1}
                  </div>
                  <p
                    className={`mt-2 font-semibold ${
                      index <= orderStatus ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {status}
                  </p>
                </div>
                {index < STATUSES.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      index < orderStatus ? "bg-green-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: ETA and Actions */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Delivery Details
              </h2>
              <div className="my-6 text-center">
                <p className="text-gray-500">Estimated Time of Arrival</p>
                {eta > 0 ? (
                  <p className="text-5xl font-extrabold text-green-600">
                    {eta} <span className="text-3xl">min</span>
                  </p>
                ) : (
                  <p className="text-4xl font-extrabold text-green-600">
                    Arrived
                  </p>
                )}
              </div>
            </div>
            <div className="border-t pt-6 mt-6">
              <h3 className="font-bold mb-4">Need Help?</h3>
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
                <MessageSquare size={20} /> Message Driver
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                <Phone size={20} /> Call Support
              </button>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-2 h-[60vh] bg-white rounded-xl shadow-lg overflow-hidden">
            <Map
              vehiclePosition={vehiclePosition}
              homePosition={HOME_LOCATION}
              route={routeLine}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
