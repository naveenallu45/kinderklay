import React from 'react';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769843022/Screenshot_2026-01-31_at_12.30.00_PM_yxvxf0.png',
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769843025/Screenshot_2026-01-31_at_12.30.36_PM_ylzyqn.png',
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769843027/Screenshot_2026-01-31_at_12.31.06_PM_zkus3z.png',
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769843029/Screenshot_2026-01-31_at_12.32.08_PM_rmldzn.png',
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769843030/Screenshot_2026-01-31_at_12.31.59_PM_hjkjmb.png',
    },
    {
      id: 6,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769843032/Screenshot_2026-01-31_at_12.31.31_PM_kg6wud.png',
    },
    {
      id: 7,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769843037/Screenshot_2026-01-31_at_12.30.16_PM_sy6yc4.png',
    },
    {
      id: 8,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769843070/Screenshot_2026-01-31_at_12.33.16_PM_dtt1oq.png',
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20 bg-indigo-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Gallery</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl aspect-square flex items-center justify-center overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
