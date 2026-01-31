import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaSchool } from 'react-icons/fa';

export default function OurBranches() {
  const branches = [
    {
      name: 'Kothapet Branch',
      address: 'Shri Nageshwar Nagar Colony, SRL Colony Main Road No. 6, Nagole to Kothapet Road, Mohan Nagar, Kothapet, Hyderabad – 35, Telangana',
      phone: '+91 98765 43210',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      icon: FaSchool,
      bgColor: 'bg-purple-100',
      iconBg: 'bg-purple-600',
    },
    {
      name: 'New Nagole Branch',
      address: 'H.No: 2-4-44/G/1, Plot No. 21, Road No. 6, New Nagole Colony, Near Skanda Badminton Academy, Hyderabad – 500035, Telangana',
      phone: '+91 98765 43211',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      icon: FaSchool,
      bgColor: 'bg-blue-100',
      iconBg: 'bg-blue-600',
    },
    {
      name: 'Badangpet Branch',
      address: 'H.No: 16-61, Municipal Colony, 746/62, Balaji Nagar, Badangpet, Nadargul, Hyderabad – 500005, Telangana',
      phone: '+91 98765 43212',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      icon: FaSchool,
      bgColor: 'bg-orange-100',
      iconBg: 'bg-orange-600',
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20 bg-yellow-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-purple-600">Branches</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at one of our convenient locations. We're here to serve your family.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`w-16 h-16 ${branch.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <branch.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{branch.name}</h3>
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <p className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-purple-600 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{branch.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaPhone className="text-purple-600 flex-shrink-0" />
                  <span>{branch.phone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaClock className="text-purple-600 flex-shrink-0" />
                  <span>{branch.hours}</span>
                </p>
              </div>
              <a 
                href="https://wa.me/9666029839?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admission%20at%20Kinder%20Kaly"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-sm shadow-md hover:shadow-lg text-center"
              >
                Visit Branch
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
