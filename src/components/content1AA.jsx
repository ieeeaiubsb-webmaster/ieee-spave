'use client';

import { useState, useEffect } from 'react';

export default function Content() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/SPAVe 6.0-340.45c064ec.jpg',
    '/SPAVe 6.0-730.jpg',
    '/SPAVe 6.0-28.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Debugging
  console.log('Current Image Index:', currentImage);

  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h1 className="mt-1 text-4xl text-start font-extrabold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-5xl">
              What is SPAVe?
            </h1>
            <p className="mt-6 text-base leading-7 text-white text-justify">
              The IEEE-USA Student Professional Awareness Activities (SPAA) is
              focused on boosting the leadership, career, and professional
              development skills of engineering students. The IEEE SPAx builds
              upon the legacy of previous Student Professional Awareness
              Conferences and Ventures to address the constantly evolving world
              we live in today. The “x” in SPAx is a flexible component that can
              be adapted as needed. The IEEE AIUB Student Branch will organize
              the “IEEE Student Professional Awareness Venture” by replacing “x” 
              with “Ve”. The objective of this successful venture is to educate
              and enrich the minds of future engineering leaders, helping them
              to sustain a successful career in their field. The venture
              includes day-long workshops, seminars, and technical talks by
              industry experts to support students’ professional growth. The
              motivation behind this flagship event is to educate students on
              securing a long-term career in engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <div className="relative overflow-hidden w-[37rem] max-w-none rounded-2xl bg-black h-[24rem]">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(-${currentImage * (100 / images.length)}%)`,
                    width: `${images.length * 100}%`,
                  }}
                >
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="flex-none"
                      style={{ width: `${100 / images.length}%` }}
                    >
                      <img
                        src={img}
                        alt={`Image ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}