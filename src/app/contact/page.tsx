"use client"; // This directive marks the component as a Client Component

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'; // Icons for contact info and form

// --- Contact Page Component ---
const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('error');
      alert('Please fill in all fields.');
      return;
    }

    // Simulate API call
    try {
      // In a real application, you would send this data to your backend
      console.log('Form Data Submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      alert('Your message has been sent successfully!'); // Use custom modal in production
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      alert('Failed to send message. Please try again later.'); // Use custom modal in production
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-xl">
        {/* Background organic shapes for visual interest */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-green-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                placeholder="Inquiry about products / Partnership opportunity"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-y"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full flex items-center justify-center px-6 py-3 rounded-full text-white font-bold text-lg shadow-md transition-colors duration-300
                ${formStatus === 'submitting' ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={20} className="ml-2" />
                </>
              )}
            </button>
            {formStatus === 'success' && (
              <p className="text-center text-green-600 mt-4">Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-center text-red-600 mt-4">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

        {/* Contact Information & Map Section */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Contact Details</h2>
            <div className="space-y-5">
              <div className="flex items-center text-gray-700 text-lg">
                <Mail size={24} className="text-green-600 mr-4 flex-shrink-0" />
                <a href="mailto:info@rootandreach.com" className="hover:text-green-700 transition-colors duration-300">
                  info@rootandreach.com
                </a>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <Phone size={24} className="text-green-600 mr-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-green-700 transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start text-gray-700 text-lg">
                <MapPin size={24} className="text-green-600 mr-4 flex-shrink-0 mt-1" />
                <address className="not-italic">
                  Root & Reach PH Headquarters <br />
                  123 Green Valley St., Brgy. Harvest <br />
                  Quezon City, Metro Manila, Philippines 1100
                </address>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Find Us on the Map</h2>
            {/* Using a placeholder image for the map. For a real map, you'd integrate Google Maps API or similar. */}
            <img
              src="https://placehold.co/600x400/e0e0e0/333333?text=Map+Placeholder"
              alt="Location Map"
              className="w-full rounded-lg shadow-md"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Map+Image+Unavailable'; }}
            />
            <p className="text-center text-gray-500 text-sm mt-4">
              (Map integration coming soon! For now, this is a placeholder.)
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section (Reused from HomePage) */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-t-3xl shadow-xl mt-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
            Ready to Connect?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12">
            Whether you're a producer, consumer, or partner, we're excited to grow together.
          </p>
          <a
            href="/about" // Link back to about page or relevant section
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Learn More About Us <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
