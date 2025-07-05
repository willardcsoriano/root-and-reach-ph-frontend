"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { CreditCard, Truck, User, Landmark, Package } from 'lucide-react';
import Image from 'next/image';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Quezon City',
    postalCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      router.replace('/products');
    }
  }, [cartItems, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.address) newErrors.address = 'Address is required.';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const orderDetails = {
        customer: formData,
        items: cartItems,
        paymentMethod,
        total: subtotal + shippingFee,
      };
      
      console.log('--- ORDER PLACED ---', orderDetails);
      // In a real app, you would send this to your backend API
      
      clearCart();
      // Redirect to a confirmation page
      router.push('/order-confirmation');
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 50.00 : 0;
  const total = subtotal + shippingFee;

  if (cartItems.length === 0) {
    // This will be shown briefly before redirecting
    return <div className="flex justify-center items-center min-h-screen">Redirecting...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold font-inter text-gray-800 mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Form Details */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 space-y-8">
            {/* Contact Information */}
            <fieldset>
              <legend className="text-2xl font-bold flex items-center gap-3 mb-4"><User className="text-green-600"/>Contact Information</legend>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </fieldset>

             {/* Shipping Address */}
            <fieldset>
              <legend className="text-2xl font-bold flex items-center gap-3 mb-4"><Truck className="text-green-600"/>Shipping Address</legend>
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} readOnly className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100"/>
                     </div>
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                        <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                        {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                      </div>
                 </div>
              </div>
            </fieldset>
            
            {/* Payment Method */}
            <fieldset>
                <legend className="text-2xl font-bold flex items-center gap-3 mb-4"><CreditCard className="text-green-600"/>Payment Method</legend>
                <div className="space-y-3">
                    <div className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer ${paymentMethod === 'cod' ? 'border-green-500 ring-2 ring-green-500' : 'border-gray-300'}`} onClick={() => setPaymentMethod('cod')}>
                        <Landmark/>
                        <div>
                            <h4 className="font-semibold">Cash on Delivery (COD)</h4>
                            <p className="text-sm text-gray-500">Pay with cash upon delivery.</p>
                        </div>
                    </div>
                     <div className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer ${paymentMethod === 'gcash' ? 'border-green-500 ring-2 ring-green-500' : 'border-gray-300'}`} onClick={() => setPaymentMethod('gcash')}>
                        <Image src="/gcash-logo.png" alt="GCash" width={24} height={24} /> 
                        <div>
                            <h4 className="font-semibold">GCash</h4>
                            <p className="text-sm text-gray-500">Pay with your GCash wallet.</p>
                        </div>
                    </div>
                </div>
            </fieldset>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold border-b pb-4 mb-4 flex items-center gap-3"><Package/>Order Summary</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                            <Image src={item.imageUrl} alt={item.name} fill style={{objectFit: 'cover'}} />
                            <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{item.quantity}</span>
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">₱{item.price.toFixed(2)}</p>
                        </div>
                        <p className="font-semibold text-sm">₱{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <div className="border-t mt-4 pt-4 space-y-3">
              <div className="flex justify-between text-lg"><span className="text-gray-600">Subtotal</span><span className="font-semibold">₱{subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-lg"><span className="text-gray-600">Shipping</span><span className="font-semibold">₱{shippingFee.toFixed(2)}</span></div>
              <div className="flex justify-between font-bold text-xl border-t pt-3 mt-3"><span>Total</span><span>₱{total.toFixed(2)}</span></div>
            </div>
            <button type="submit" className="mt-6 w-full bg-green-600 text-white font-bold text-lg py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;