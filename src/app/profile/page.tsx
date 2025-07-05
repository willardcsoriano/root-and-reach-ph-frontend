"use client"; // This directive marks the component as a Client Component

import Image from 'next/image';
import React, { useState } from 'react';
import {
  User,
  ShoppingBag,
  Settings,
  LogOut,
  Edit,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Package,
  DollarSign,
  Truck,
  CheckCircle,
  XCircle,
  Factory,
  BarChart,
  ClipboardList,
  ArrowRight // <--- Added ArrowRight here
} from 'lucide-react'; // Icons for profile sections and details
import Link from 'next/link';

// --- 1. Data Interfaces ---
interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  isProducer: boolean;
  avatar: string;
}

interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  date: string; // e.g., "2024-07-02"
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: OrderItem[];
  producerName: string;
}

// --- 2. Mock Data ---
const MOCK_USER: UserProfile = {
  id: 'user001',
  name: 'Juan Dela Cruz',
  email: 'juan.dc@example.com',
  phone: '+63 917 123 4567',
  address: 'Unit 101, Green Meadows Condo, Quezon City, Metro Manila, Philippines',
  isProducer: true, // Set to true to show producer dashboard
  avatar: 'https://placehold.co/150x150/9ca3af/ffffff?text=JD'
};

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD001',
    date: '2024-06-28',
    total: 300.00,
    status: 'Delivered',
    items: [
      { productId: 'prod001', productName: 'Organic Romaine Lettuce', quantity: 2, price: 120.00 },
      { productId: 'prod005', productName: 'Fresh Farm Eggs (Dozen)', quantity: 1, price: 95.00 },
    ],
    producerName: 'Green Harvest Farm'
  },
  {
    id: 'ORD002',
    date: '2024-06-25',
    total: 180.00,
    status: 'Shipped',
    items: [
      { productId: 'prod007', productName: 'Native Bananas (Latundan)', quantity: 1, price: 70.00 },
      { productId: 'prod002', productName: 'Sweet Carabao Mangoes', quantity: 1, price: 180.00 },
    ],
    producerName: 'Sunshine Orchards'
  },
  {
    id: 'ORD003',
    date: '2024-06-20',
    total: 650.00,
    status: 'Processing',
    items: [
      { productId: 'prod003', productName: 'Grass-Fed Beef Sirloin', quantity: 1, price: 650.00 },
    ],
    producerName: 'Local Meats Co.'
  },
  {
    id: 'ORD004',
    date: '2024-06-15',
    total: 280.00,
    status: 'Cancelled',
    items: [
      { productId: 'prod004', productName: 'Artisanal Sourdough Bread', quantity: 1, price: 280.00 },
    ],
    producerName: 'The Baker\'s Nook'
  },
];

// --- Profile Page Component ---
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('account'); // 'account', 'orders', 'producer' (if applicable), 'settings'

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Profile Hero/Banner Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-16 md:py-20 rounded-b-3xl shadow-lg">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Image
            src={MOCK_USER.avatar}
            alt={MOCK_USER.name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/9ca3af/ffffff?text=User'; }}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-md">
            Welcome, {MOCK_USER.name}!
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Manage your Root & Reach account.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Profile Navigation Tabs */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-8 flex flex-wrap justify-center gap-4">
          <TabButton
            icon={<User size={20} />}
            label="Account Info"
            isActive={activeTab === 'account'}
            onClick={() => setActiveTab('account')}
          />
          <TabButton
            icon={<ShoppingBag size={20} />}
            label="Order History"
            isActive={activeTab === 'orders'}
            onClick={() => setActiveTab('orders')}
          />
          {MOCK_USER.isProducer && (
            <TabButton
              icon={<Factory size={20} />}
              label="Producer Dashboard"
              isActive={activeTab === 'producer'}
              onClick={() => setActiveTab('producer')}
            />
          )}
          <TabButton
            icon={<Settings size={20} />}
            label="Settings"
            isActive={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
          />
          <button
            onClick={() => alert('Logging out...')} // Placeholder for logout logic
            className="flex items-center px-5 py-3 rounded-full text-red-600 font-semibold text-lg hover:bg-red-50 transition-colors duration-200"
          >
            <LogOut size={20} className="mr-2" /> Log Out
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          {activeTab === 'account' && <AccountInfo user={MOCK_USER} />}
          {activeTab === 'orders' && <OrderHistory orders={MOCK_ORDERS} />}
          {activeTab === 'producer' && MOCK_USER.isProducer && <ProducerDashboard />}
          {activeTab === 'settings' && <SettingsSection />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

// --- Sub-Components for ProfilePage ---

// Tab Button Component
interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => (
  <button
    className={`flex items-center px-5 py-3 rounded-full font-semibold text-lg transition-all duration-200 ease-in-out
      ${isActive
        ? 'bg-green-600 text-white shadow-md'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800'
      }`}
    onClick={onClick}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </button>
);

// Account Info Section
interface AccountInfoProps {
  user: UserProfile;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ user }) => (
  <div>
    <h2 className="text-3xl font-bold text-green-800 mb-6 border-b pb-4 border-gray-200">
      Your Account Information
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
      <div className="flex items-center">
        <User size={24} className="text-green-600 mr-3 flex-shrink-0" />
        <span className="font-semibold text-gray-700">Name:</span>
        <span className="ml-2 text-gray-800">{user.name}</span>
      </div>
      <div className="flex items-center">
        <Mail size={24} className="text-green-600 mr-3 flex-shrink-0" />
        <span className="font-semibold text-gray-700">Email:</span>
        <span className="ml-2 text-gray-800">{user.email}</span>
      </div>
      {user.phone && (
        <div className="flex items-center">
          <Phone size={24} className="text-green-600 mr-3 flex-shrink-0" />
          <span className="font-semibold text-gray-700">Phone:</span>
          <span className="ml-2 text-gray-800">{user.phone}</span>
        </div>
      )}
      {user.address && (
        <div className="flex items-start">
          <MapPin size={24} className="text-green-600 mr-3 flex-shrink-0 mt-1" />
          <span className="font-semibold text-gray-700">Address:</span>
          <span className="ml-2 text-gray-800 leading-relaxed">{user.address}</span>
        </div>
      )}
    </div>
    <div className="mt-8 text-center md:text-left">
      <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300">
        <Edit size={20} className="mr-2" /> Edit Profile
      </button>
    </div>
  </div>
);

// Order History Section
interface OrderHistoryProps {
  orders: Order[];
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => (
  <div>
    <h2 className="text-3xl font-bold text-green-800 mb-6 border-b pb-4 border-gray-200">
      Your Order History
    </h2>
    {orders.length === 0 ? (
      <p className="text-gray-600 text-lg text-center py-10">You haven&apos;t placed any orders yet.</p>
    ) : (
      <div className="space-y-6">
        {orders.map(order => (
          <div key={order.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b border-gray-200">
              <div className="mb-2 sm:mb-0">
                <p className="text-xl font-semibold text-gray-900">Order ID: {order.id}</p>
                <p className="text-gray-600 text-sm flex items-center">
                  <Calendar size={16} className="mr-1" /> {order.date}
                </p>
              </div>
              <div className="flex items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                     order.status === 'Processing' || order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                     order.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                  {order.status}
                </span>
                <span className="ml-4 text-green-700 font-bold text-xl">₱{order.total.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-gray-700 font-semibold mb-2">Items from {order.producerName}:</p>
            <ul className="space-y-2">
              {order.items.map(item => (
                <li key={item.productId} className="flex justify-between text-gray-600 text-base">
                  <span>{item.productName} (x{item.quantity})</span>
                  <span>₱{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <button className="text-green-600 hover:text-green-800 font-semibold text-sm">
                View Order Details <ArrowRight size={14} className="inline ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

// Producer Dashboard Section (Conditional)
const ProducerDashboard = () => (
  <div>
    <h2 className="text-3xl font-bold text-green-800 mb-6 border-b pb-4 border-gray-200">
      Producer Dashboard
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      Welcome to your producer dashboard! Here you can manage your products, view sales, and connect with customers.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <DashboardMetricCard icon={<Package size={36} className="text-green-600" />} label="Total Products" value="25" />
      <DashboardMetricCard icon={<DollarSign size={36} className="text-green-600" />} label="Total Sales (Month)" value="₱15,000" />
      <DashboardMetricCard icon={<Truck size={36} className="text-green-600" />} label="Pending Orders" value="3" />
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <DashboardActionButton icon={<ClipboardList size={24} />} label="Manage Listings" link="/producer/listings" />
      <DashboardActionButton icon={<BarChart size={24} />} label="View Sales Reports" link="/producer/reports" />
      <DashboardActionButton icon={<CheckCircle size={24} />} label="Process Orders" link="/producer/orders" />
      <DashboardActionButton icon={<XCircle size={24} />} label="Update Profile" link="/producer/profile-edit" />
    </div>
  </div>
);

// Helper for ProducerDashboard: Metric Card
interface DashboardMetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const DashboardMetricCard: React.FC<DashboardMetricCardProps> = ({ icon, label, value }) => (
  <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 flex items-center space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <p className="text-2xl font-bold text-green-800">{value}</p>
    </div>
  </div>
);

// Helper for ProducerDashboard: Action Button
interface DashboardActionButtonProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

const DashboardActionButton: React.FC<DashboardActionButtonProps> = ({ icon, label, link }) => (
  <Link
    href={link}
    className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-200 text-gray-800 font-semibold"
  >
    {icon && <span className="mr-3">{icon}</span>}
    {label}
  </Link>
);

// Settings Section
const SettingsSection = () => (
  <div>
    <h2 className="text-3xl font-bold text-green-800 mb-6 border-b pb-4 border-gray-200">
      Account Settings
    </h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Password & Security</h3>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
          Change Password
        </button>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Notification Preferences</h3>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="email-notifications" className="mr-2 accent-green-600" defaultChecked />
          <label htmlFor="email-notifications" className="text-gray-700">Email notifications</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="sms-notifications" className="mr-2 accent-green-600" />
          <label htmlFor="sms-notifications" className="text-gray-700">SMS notifications</label>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Delete Account</h3>
        <button
          onClick={() => alert('Are you sure you want to delete your account? This action cannot be undone.')} // Use custom modal in production
          className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
        >
          Delete My Account
        </button>
      </div>
    </div>
  </div>
);
