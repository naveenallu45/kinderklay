import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const branches = [
    {
      name: 'Kothapet Branch',
      address: 'Shri Nageshwar Nagar Colony, SRL Colony Main Road No. 6, Nagole to Kothapet Road, Mohan Nagar, Kothapet, Hyderabad – 500035',
    },
    {
      name: 'New Nagole Branch',
      address: 'H.No: 2-4-44/G/1, Plot No. 21, Road No. 6, New Nagole Colony, Near Skanda Badminton Academy, Hyderabad – 500035',
    },
    {
      name: 'Badangpet Branch',
      address: 'H.No: 16-61, Municipal Colony, 746/62, Balaji Nagar, Badangpet, Nadargul, Hyderabad – 500005',
    },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <Image
                src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769838619/Screenshot_2026-01-31_at_11.17.15_AM_qr7yqz.png"
                alt="Kinder Kaly Logo"
                width={120}
                height={40}
                className="h-auto rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-400">
              Making learning fun and accessible for children worldwide.
            </p>
          </div>

          {/* Branches - Side by Side */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Our Branches</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {branches.map((branch, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">{branch.name}</p>
                      <p className="text-gray-400 text-xs">{branch.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaPhone className="text-purple-500" />
                <span>+91 96660 29839</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-purple-500" />
                <span>kinderkaly@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>©2025 Kinder Kaly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
