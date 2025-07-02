// src/components/ui/Header.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'
import { FiShoppingCart } from 'react-icons/fi'

export const Header: React.FC = () => {
  const { items } = useCart()
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 overflow-hidden relative flex items-center justify-center">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="scale-180 object-contain"
            />
          </div>


          <span className="ml-2 text-2xl font-semibold text-gray-800">
            Root &amp; Reach
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center space-x-6">
          {['Home', 'Shop', 'About', 'Contact'].map((label) => (
            <Link
              key={label}
              href={
                label === 'Home'
                  ? '/'
                  : `/${label.toLowerCase()}`   // 'About' → '/about'
              }
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/cart"
            className="relative text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FiShoppingCart size={24} />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
            <span className="sr-only">View cart</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
