// src/components/pages/producers-signup/steps/StepPersonalInfo.tsx
"use client";

import FormSection from "../FormSection";
import { ProducerFormData } from "../types";

interface Props {
  data: ProducerFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StepPersonalInfo({ data, onChange }: Props) {
  return (
    <FormSection title="Your Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="fullName"
          placeholder="Full Name"
          value={data.fullName}
          onChange={onChange}
          className="w-full p-3 border rounded-md text-gray-900 placeholder-gray-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={data.email}
          onChange={onChange}
          className="w-full p-3 border rounded-md text-gray-900 placeholder-gray-400"
          required
        />
      </div>
      <input
        name="phone"
        placeholder="Phone Number"
        value={data.phone}
        onChange={onChange}
        className="w-full p-3 border rounded-md text-gray-900 placeholder-gray-400"
        required
      />
    </FormSection>
  );
}
