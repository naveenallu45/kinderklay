import React from 'react';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: 'Fun Quiz',
      description: 'Test your understanding with a short but fun quizzes!',
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769839540/Screenshot_2026-01-31_at_11.34.31_AM_ous00f.png',
      imagePosition: 'right',
    },
    {
      title: 'Creative Activities',
      description: 'Express your creativity with fun projects in drawing, crafting, and science.',
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769839538/Screenshot_2026-01-31_at_11.34.41_AM_ywyasl.png',
      imagePosition: 'left',
    },
    {
      title: 'Learn with Games',
      description: 'Learn something new while your kids playing games!',
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769839537/Screenshot_2026-01-31_at_11.34.51_AM_n7cdep.png',
      imagePosition: 'right',
    },
  ];

  return (
    <section id="features" className="w-full px-6 py-16 md:px-12 lg:px-20 bg-green-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-purple-600">interactive</span>
            {' '}features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything your child needs to learn, grow, and have fun in one place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-6 sm:space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex ${
                feature.imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 relative h-48 sm:h-56 md:h-64 flex items-center justify-center bg-white min-w-0 flex-shrink-0 p-4 sm:p-6 md:p-8">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={286}
                  height={190}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
