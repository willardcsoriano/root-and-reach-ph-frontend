// app/about/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// core Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// load Swiper components client-side only
const Swiper = dynamic(
  () => import('swiper/react').then((mod) => mod.Swiper),
  { ssr: false }
)
const SwiperSlide = dynamic(
  () => import('swiper/react').then((mod) => mod.SwiperSlide),
  { ssr: false }
)

// correct module import for tree-shaking in v10+
import { Pagination } from 'swiper/modules'

export default function AboutPage() {
  // Animated stats
  const stats = [
    { label: 'Active Producers', value: 1000, suffix: '+' },
    { label: 'Monthly Consumers', value: 10000, suffix: '+' },
    { label: 'Order Completion', value: 80, suffix: '%' },
  ]
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    stats.forEach(({ value }, i) => {
      let start = 0
      const duration = 1500
      const stepTime = Math.max(1, Math.floor(duration / value))
      const timer = setInterval(() => {
        start += 1
        setCounts((c) => {
          const copy = [...c]
          copy[i] = start
          return copy
        })
        if (start >= value) clearInterval(timer)
      }, stepTime)
    })
  }, [])

  // Timeline data
  const milestones = [
    { year: 2023, text: 'Ideation & MVP planning' },
    { year: 2024, text: 'Alpha launch with 100 producers' },
    { year: 2025, text: '10,000+ monthly consumers reached' },
  ]

  // Testimonials data
  const testimonials = [
    { name: 'Maria', quote: 'I doubled my sales since joining Root & Reach PH!' },
    { name: 'Jomar', quote: 'Easy to use and transparent pricing—love it!' },
    { name: 'Liza', quote: 'Connecting directly with customers changed my business.' },
  ]

  return (
    <main className="space-y-0">
      {/* Hero */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-farm.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="relative z-10 px-6 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Connecting Communities, Cultivating Trust
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Root &amp; Reach PH bridges local producers and conscious consumers in the Philippines.
          </p>
          <a
            href="/join"
            className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition max-w-xs mx-auto"
          >
            Get Started
          </a>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <span className="block w-6 h-6 border-b-2 border-r-2 border-white rotate-45 mx-auto" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map(({ label, suffix }, i) => (
            <div key={label}>
              <div className="text-4xl font-bold text-green-600">
                {counts[i]}
                {suffix}
              </div>
              <div className="mt-2 text-gray-700">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}

<section className="py-20 px-6 max-w-4xl mx-auto bg-gray-50">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Our Mission
      </h2>
      <p className="text-gray-700">
        To empower local producers with a seamless, intuitive platform for selling directly to consumers.
      </p>
    </div>
    <div>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Our Vision
      </h2>
      <p className="text-gray-700">
        A vibrant Philippine marketplace built on transparency, fair value, and community.
      </p>
    </div>
  </div>
</section>


      {/* Core Values */}
<section className="bg-green-100 py-20 px-6">
  <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
    What We Stand For
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
    {[
      { icon: '🌱', title: 'Sustainability' },
      { icon: '👐', title: 'Trust & Transparency' },
      { icon: '🌍', title: 'Community Empowerment' },
      { icon: '⚙️', title: 'Accessibility for All' },
    ].map(({ icon, title }) => (
      <div
        key={title}
        className="flex items-center p-4 border rounded-lg hover:shadow-lg transition bg-white"
      >
        <span className="text-2xl mr-4">{icon}</span>
        <span className="text-gray-800 font-medium">{title}</span>
      </div>
    ))}
  </div>
</section>


      {/* Timeline */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Our Journey
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 w-1 bg-green-300 h-full -translate-x-1/2" />
          <ul className="space-y-12">
            {milestones.map(({ year, text }, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <li
                  key={year}
                  className={`flex items-center w-full ${
                    isLeft ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className="w-1/2" />
                  <div className="w-1/2 relative px-4">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full" />
                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="text-green-600 font-bold">{year}</div>
                      <p className="mt-2 text-gray-700">{text}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
<section className="py-16 bg-gray-50">
  <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
    What People Are Saying
  </h2>
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    spaceBetween={24}
    slidesPerView={1}
  >
    {testimonials.map((t, i) => (
      <SwiperSlide key={i}>
        <div className="max-w-xl mx-auto text-center p-6">
          <blockquote className="italic text-gray-700">
            “{t.quote}”
          </blockquote>
          <cite className="mt-4 block font-semibold text-gray-900">
            — {t.name}
          </cite>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      {/* Call to Action */}
      <section className="py-20 px-6 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Mission</h2>
        <p className="mb-6">
          Whether you’re a producer or a supporter, there’s a place for you here.
        </p>
        <a
          href="/join"
          className="inline-block bg-white hover:bg-gray-100 text-green-600 font-medium px-6 py-3 rounded-md transition"
        >
          Get Started
        </a>
      </section>
    </main>
  )
}
