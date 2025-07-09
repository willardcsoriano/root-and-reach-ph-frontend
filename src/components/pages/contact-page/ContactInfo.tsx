"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => (
  <div className="space-y-8">
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-green-800 mb-6">
        Our Contact Details
      </h2>
      <div className="space-y-5">
        <div className="flex items-center text-gray-700 text-lg">
          <Mail size={24} className="text-green-600 mr-4 flex-shrink-0" />
          <Link
            href="mailto:info@rootandreach.com"
            className="hover:text-green-700"
          >
            info@rootandreach.com
          </Link>
        </div>
        <div className="flex items-center text-gray-700 text-lg">
          <Phone size={24} className="text-green-600 mr-4 flex-shrink-0" />
          <Link href="tel:+1234567890" className="hover:text-green-700">
            +1 (234) 567-890
          </Link>
        </div>
        <div className="flex items-start text-gray-700 text-lg">
          <MapPin
            size={24}
            className="text-green-600 mr-4 flex-shrink-0 mt-1"
          />
          <address className="not-italic">
            Root & Reach PH Headquarters <br />
            123 Green Valley St., Brgy. Harvest <br />
            Quezon City, Metro Manila, Philippines 1100
          </address>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-green-800 mb-6">
        Find Us on the Map
      </h2>
      <Image
        src="https://placehold.co/600x400/e0e0e0/333333?text=Map+Placeholder"
        alt="Location Map"
        width={600}
        height={400}
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="text-center text-gray-500 text-sm mt-4">
        (Map integration coming soon!)
      </p>
    </div>
  </div>
);

export default ContactInfo;
