import React from 'react';

const ScrollingBanner = () => {
    return (
        <div className="mt-4 banner w-full h-16 bg-gray-800 flex items-center justify-center overflow-hidden">
            <p className="banner-text text-white text-lg font-bold animate-marquee">Last date for applying for the program 21st of August 2023. Class begin in September 2023.</p>

            {/* Inline Tailwind CSS for custom animation */}
            <style jsx>
                {`
          @keyframes marquee {
            0% {
              transform: translateX(120%);
            }
            100% {
              transform: translateX(-120%);
            }
          }

          .animate-marquee {
            animation: marquee 10s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default ScrollingBanner;
