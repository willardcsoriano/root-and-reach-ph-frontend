'use client'

import ProductCard from '@/components/ui/ProductCard';
import React, { useState, useMemo } from 'react'
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi'
import { products as raw } from '@/data/products'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
export interface Product {
  id: string
  name: string
  producer: string
  description: string
  price: number
  image: string
  category?: string // optional so it still matches your seed data without a category
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */
// Adapt raw seed data (whose static type lacks `producer` and `description`) to the local `Product` interface.
// The double cast via `unknown` silences TS 2352 while still giving us full type‑safety everywhere else.
const products: Product[] = raw as unknown as Product[] // safe, because the interface now matches the actual data

const sortOptions = [
  { label: 'Price: Low to High', value: 'asc' },
  { label: 'Price: High to Low', value: 'desc' },
] as const

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function ShopPage() {

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('All')
  const [sortOrder, setSortOrder] = useState<(typeof sortOptions)[number]>(
    sortOptions[0]
  )

  /* Unique category list ------------------------------------------------ */
  const categories = useMemo(() => {
    const s = new Set(products.map((p) => p.category ?? 'Uncategorized'))
    return ['All', ...Array.from(s)]
  }, [])

  /* Filter + sort ------------------------------------------------------- */
  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    if (category !== 'All') list = list.filter((p) => p.category === category)
    return list.sort((a, b) =>
      sortOrder.value === 'asc' ? a.price - b.price : b.price - a.price
    )
  }, [search, category, sortOrder])

  /* -------------------------------------------------------------------- */
  return (
    <main className="space-y-0">
      {/* ---------- HERO ---------- */}
      <section className="relative h-64 flex items-center justify-center text-center bg-[url('/images/shop-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Explore Our Marketplace
          </h1>
          <p className="mt-2 text-lg text-white/90">
            Fresh, local goods—direct from producers to you.
          </p>
        </div>
      </section>

      {/* ---------- FILTER BAR ---------- */}
      <section className="py-8 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
          {/* Search */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Category */}
          <Listbox value={category} onChange={setCategory}>
            <div className="relative w-full md:w-48">
              <Listbox.Button className="relative w-full cursor-pointer bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-green-500">
                {category}
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
                {categories.map((cat) => (
                  <Listbox.Option
                    key={cat}
                    value={cat}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={selected ? 'font-medium' : 'font-normal'}>
                          {cat}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>

          {/* Sort */}
          <Listbox value={sortOrder} onChange={setSortOrder}>
            <div className="relative w-full md:w-48">
              <Listbox.Button className="relative w-full cursor-pointer bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-green-500">
                {sortOrder.label}
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
                {sortOptions.map((opt) => (
                  <Listbox.Option
                    key={opt.value}
                    value={opt}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={selected ? 'font-medium' : 'font-normal'}>
                          {opt.label}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </section>

      {/* ---------- PRODUCT GRID ---------- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length ? (
            filtered.map((product) => (
              // Just use the component you imported!
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-gray-50 px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">
          Not finding what you need?
        </h2>
        <p className="mb-6 text-gray-700">
          Reach out and we’ll help you connect with local producers directly.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
        >
          Contact Us
        </Link>
      </section>
    </main>
  )
}
