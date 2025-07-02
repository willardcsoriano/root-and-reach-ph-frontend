// src/components/sections/about/CTASection.tsx
import React from 'react'
import { Button } from '@/components/ui/Button'

const CTASection: React.FC = () => (
  <section className="py-20 px-6 bg-green-600 text-white text-center">
    <h2 className="text-3xl font-semibold mb-4">Join Our Mission</h2>
    <p className="mb-6">
      Whether you’re a producer or a supporter, there’s a place for you here.
    </p>
    {/* Note: href is now passed, matching ButtonProps */}
    <Button href="/signup" variant="secondary" className="mx-auto max-w-xs">
      Get Started
    </Button>
  </section>
)

export default CTASection
