// src/components/pages/producers-signup/steps/StepFarmDetails.tsx
"use client";

import FormSection from "../FormSection";
import { ProducerFormData } from "../types";

interface Props {
  data: ProducerFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function StepFarmDetails({ data, onChange }: Props) {
  return (
    <FormSection title="Your Farm or Business">
      <input
        name="farmName"
        placeholder="Farm / Business Name"
        value={data.farmName}
        onChange={onChange}
        className="w-full p-3 border rounded-md text-gray-900 placeholder-gray-400"
        required
      />
      <input
        name="location"
        placeholder="City / Municipality, Province"
        value={data.location}
        onChange={onChange}
        className="w-full p-3 border rounded-md text-gray-900 placeholder-gray-400"
        required
      />
      <textarea
        name="farmDescription"
        placeholder="Tell us about your farm..."
        value={data.farmDescription}
        onChange={onChange}
        rows={5}
        className="w-full p-3 border rounded-md text-gray-900 placeholder-gray-400"
        required
      />
      <input
        name="productTypes"
        placeholder="Products (e.g., Vegetables, Fruits)"
        value={data.productTypes}
        onChange={onChange}
        className="w-full p-3 border rounded-md text-gray-900 placeholder-gray-400"
        required
      />
    </FormSection>
  );
}
