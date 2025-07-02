// app/contact/page.tsx
'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>()
  
  const onSubmit = async (data: FormData) => {
    // TODO: wire up to your API route or email service
    console.log('Contact form submitted:', data)
    // Simulate success
    setTimeout(() => {
      reset()
    }, 500)
  }

  return (
    <main className="space-y-0">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center text-center bg-orange-600">
        <div className="absolute inset-0 bg-gradient-to-b from-green-700 to-green-600 opacity-80" />
        <div className="relative z-10 px-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Get in Touch
          </h1>
          <p className="mt-2 text-lg text-green-100">
            Questions, feedback, or partnership ideas? We’re here to listen.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <FiMapPin className="text-green-600 text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                <p className="text-gray-700">123 Rizal St, Manila, Philippines</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiMail className="text-green-600 text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-700">support@rootandreach.ph</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiPhone className="text-green-600 text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-700">+63 912 345 6789</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-gray-50 p-8 rounded-lg shadow"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' },
                  })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {isSubmitSuccessful && (
                <p className="text-green-600 mt-4 text-center">
                  Thanks! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
<section className="h-80">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.123456789012!2d121.033456789012!3d14.580123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e9e0a1b2c3%3A0xabcdef123456!2s123%20Rizal%20St%2C%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Root & Reach PH Location"
  />
</section>


      {/* Footer CTA */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Ready to Collaborate?</h2>
        <p className="text-gray-700 mb-6">
          Join our mission to empower local producers and bring fresh goods to your door.
        </p>
        <a
          href="/join"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Join Us Now
        </a>
      </section>
    </main>
  )
}
