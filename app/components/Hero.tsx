import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:px-20 overflow-x-hidden bg-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            {/* Trusted Badge */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="text-xs sm:text-sm text-gray-600">Trusted by 1000+ families.</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The best place to{' '}
              <span className="text-blue-600">learn</span>
              {' '}and{' '}
              <span className="text-orange-500">play</span>
              {' '}for kids.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Discover thousands of fun and interactive learning activities to support your child's growth and learning process.
            </p>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a 
                href="https://wa.me/9666029839?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admission%20at%20Kinder%20Kaly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl hover:from-purple-700 hover:to-orange-600 transition-all font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                <span className="hidden sm:inline">Start Your Kids' Education with Kinder Kaly →</span>
                <span className="sm:hidden">Start with Kinder Kaly →</span>
              </a>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative flex gap-2 sm:gap-4 justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
            <div className="flex gap-2 sm:gap-4">
              {/* Child Image 1 */}
              <div className="w-24 h-32 sm:w-36 sm:h-44 md:w-52 md:h-60 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769841862/Screenshot_2026-01-31_at_12.13.08_PM_pdzyhw.png"
                  alt="Kids learning"
                  width={200}
                  height={235}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 208px"
                />
              </div>

              {/* Child Image 2 */}
              <div className="w-24 h-32 sm:w-36 sm:h-44 md:w-52 md:h-60 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mt-4 sm:mt-6 md:mt-8">
                <Image
                  src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769841867/Screenshot_2026-01-31_at_12.13.22_PM_x6isfj.png"
                  alt="Kids activities"
                  width={200}
                  height={235}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 208px"
                />
              </div>

              {/* Child Image 3 */}
              <div className="w-24 h-32 sm:w-36 sm:h-44 md:w-52 md:h-60 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769841861/Screenshot_2026-01-31_at_12.13.56_PM_ql9yik.png"
                  alt="Kids playing"
                  width={200}
                  height={235}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 208px"
                />
              </div>
            </div>
            
            {/* Decorative Circle */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
