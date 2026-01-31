import React from 'react';
import { FaChalkboardTeacher, FaHandsHelping, FaShieldAlt, FaPalette, FaUsers, FaBus } from 'react-icons/fa';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: FaChalkboardTeacher,
      title: 'Qualified & Caring Teachers',
      description: 'Our experienced and certified teachers provide personalized attention and create a nurturing learning environment for every child.',
      bgColor: 'bg-purple-100',
      iconBg: 'bg-purple-600',
    },
    {
      icon: FaHandsHelping,
      title: 'Activity-Based Learning',
      description: 'We focus on hands-on activities and interactive methods that make learning engaging and help children understand concepts better.',
      bgColor: 'bg-blue-100',
      iconBg: 'bg-blue-600',
    },
    {
      icon: FaShieldAlt,
      title: 'Safe & Secure Campus',
      description: 'Our campus is equipped with modern security systems, CCTV surveillance, and safety protocols to ensure your child\'s well-being.',
      bgColor: 'bg-green-100',
      iconBg: 'bg-green-600',
    },
    {
      icon: FaPalette,
      title: 'Creative & Fun Environment',
      description: 'We create a vibrant and joyful atmosphere where children can explore, create, and learn through play and creative activities.',
      bgColor: 'bg-orange-100',
      iconBg: 'bg-orange-600',
    },
    {
      icon: FaUsers,
      title: 'Low Student–Teacher Ratio',
      description: 'With smaller class sizes, each child receives individual attention and personalized guidance from our dedicated teachers.',
      bgColor: 'bg-yellow-100',
      iconBg: 'bg-yellow-600',
    },
    {
      icon: FaBus,
      title: 'Transport Facility Available',
      description: 'We offer safe and reliable transportation services with trained drivers and GPS tracking for convenient school commute.',
      bgColor: 'bg-pink-100',
      iconBg: 'bg-pink-600',
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20 bg-orange-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose{' '}
            <span className="text-purple-600">our school</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best learning experience for your child with proven methods and dedicated support.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className={`w-16 h-16 ${reason.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <reason.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
