"use client";

import React, { useState } from "react";
import { User, Send, ArrowLeft, CheckCircle } from "lucide-react";

// --- Helper Components ---

// Progress Step Indicator
const ProgressStep = ({
  step,
  title,
  currentStep,
}: {
  step: number;
  title: string;
  currentStep: number;
}) => (
  <div className="flex items-center">
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
        currentStep >= step
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-gray-500"
      }`}
    >
      {currentStep > step ? <CheckCircle size={24} /> : step}
    </div>
    <div className="ml-4">
      <p
        className={`text-sm font-semibold ${currentStep >= step ? "text-green-700" : "text-gray-500"}`}
      >
        Step {step}
      </p>
      <p
        className={`font-bold ${currentStep >= step ? "text-gray-900" : "text-gray-400"}`}
      >
        {title}
      </p>
    </div>
  </div>
);

// Form Section Wrapper
const FormSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="animate-fade-in">
    <h2 className="text-2xl font-bold text-green-800 mb-6 border-l-4 border-green-500 pl-4">
      {title}
    </h2>
    <div className="space-y-6">{children}</div>
  </div>
);

// --- Main Page Component ---
const ProducerSignupPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    phone: "",
    // Step 2
    farmName: "",
    location: "",
    farmDescription: "",
    productTypes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Form Submitted:", formData);
    nextStep(); // Move to the success step
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
              Become a Partner
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Join our community of local producers and reach more customers.
            </p>
          </div>

          {/* Progress Bar */}
          {step <= 3 && (
            <div className="grid grid-cols-3 gap-4 mb-12 p-4 bg-white rounded-xl shadow-md">
              <ProgressStep step={1} title="Personal Info" currentStep={step} />
              <ProgressStep step={2} title="Farm Details" currentStep={step} />
              <ProgressStep
                step={3}
                title="Review & Submit"
                currentStep={step}
              />
            </div>
          )}

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit}>
              {/* --- Step 1: Personal Information --- */}
              {step === 1 && (
                <FormSection title="Your Information">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md"
                      required
                    />
                  </div>
                </FormSection>
              )}

              {/* --- Step 2: Farm Details --- */}
              {step === 2 && (
                <FormSection title="Your Farm or Business">
                  <input
                    type="text"
                    name="farmName"
                    placeholder="Farm / Business Name"
                    value={formData.farmName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="City / Municipality, Province"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                  <textarea
                    name="farmDescription"
                    placeholder="Tell us about your farm and what makes it special..."
                    value={formData.farmDescription}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="productTypes"
                    placeholder="What kind of products do you offer? (e.g., Vegetables, Fruits, Dairy)"
                    value={formData.productTypes}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </FormSection>
              )}

              {/* --- Step 3: Review & Submit --- */}
              {step === 3 && (
                <FormSection title="Review Your Application">
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <p>
                      <strong>Full Name:</strong> {formData.fullName}
                    </p>
                    <p>
                      <strong>Email:</strong> {formData.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {formData.phone}
                    </p>
                    <hr />
                    <p>
                      <strong>Farm Name:</strong> {formData.farmName}
                    </p>
                    <p>
                      <strong>Location:</strong> {formData.location}
                    </p>
                    <p>
                      <strong>Description:</strong> {formData.farmDescription}
                    </p>
                    <p>
                      <strong>Products:</strong> {formData.productTypes}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    By submitting, you agree to our terms and conditions for
                    partners.
                  </p>
                </FormSection>
              )}

              {/* --- Step 4: Success Message --- */}
              {step === 4 && (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle size={64} className="mx-auto text-green-500" />
                  <h2 className="text-3xl font-bold mt-6">
                    Application Submitted!
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Thank you for your interest. Our team will review your
                    application and get back to you within 3-5 business days.
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              {step <= 3 && (
                <div className="flex justify-between mt-10">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300"
                    >
                      <ArrowLeft size={20} /> Previous
                    </button>
                  )}
                  {step < 3 && (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 ml-auto"
                    >
                      Next <User size={20} />
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 ml-auto"
                    >
                      Submit Application <Send size={20} />
                    </button>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducerSignupPage;
