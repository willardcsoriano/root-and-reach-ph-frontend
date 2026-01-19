"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { useOrders, ShippingDetails } from "@/contexts/OrderContext"; // This import will now work
import { Lock } from "lucide-react";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const { addOrder } = useOrders();
  const router = useRouter();

  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentMethod] = useState("cod");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shippingFee = subtotal > 0 ? 50.0 : 0;
  const total = subtotal + shippingFee;

  // --- FIX: Add the 'ShippingDetails' type to the 'prev' parameter ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev: ShippingDetails) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (
      cartItems.length === 0 ||
      !shippingDetails.fullName ||
      !shippingDetails.address
    ) {
      alert("Please fill in all required shipping details.");
      return;
    }
    addOrder(cartItems, total, shippingDetails, paymentMethod);
    clearCart();
    router.push("/orders");
  };

  // ... The rest of your JSX remains the same ...
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Checkout
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              {/* This form will now work correctly */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleInputChange}
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={handleInputChange}
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  onChange={handleInputChange}
                  className="p-3 border rounded-md w-full"
                />
                <input
                  name="address"
                  placeholder="Street Address"
                  onChange={handleInputChange}
                  className="p-3 border rounded-md md:col-span-2 w-full"
                  required
                />
                <input
                  name="city"
                  placeholder="City"
                  onChange={handleInputChange}
                  className="p-3 border rounded-md w-full"
                />
                <input
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={handleInputChange}
                  className="p-3 border rounded-md w-full"
                />
              </div>
            </div>
            {/* ... Payment section ... */}
          </div>
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold border-b pb-4 mb-4">
              Order Summary
            </h2>
            {/* ... Order summary details ... */}
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-green-700"
            >
              <Lock size={20} />
              <span>Place Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
