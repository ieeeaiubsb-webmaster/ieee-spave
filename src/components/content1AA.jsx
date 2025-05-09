'use client';

import { useEffect, useState } from 'react';

export default function Content() {
  const images = [
    '/images/content/_AR_9871.jpg',
    '/images/content/_AR_9203.jpg',
    '/images/content/_AR_9464.jpg',
    '/images/content/_AR_9471.jpg',
    '/images/content/_AR_9508.jpg',
    '/images/content/_AR_9813.jpg',
  ];

  return (
    <>
 <style jsx>{`
  @property --r {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

.spax-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  --r: 101%;
  mask:
    linear-gradient(red 0 0) exclude,
    radial-gradient(red calc(var(--r) - 1px), transparent var(--r)) 50% / 2em 2em;
  animation: reveal 15s infinite;
}

.spax-img:nth-child(1) {
  animation-delay: 0s;
}
.spax-img:nth-child(2) {
  animation-delay: 3s;
}
.spax-img:nth-child(3) {
  animation-delay: 6s;
}
.spax-img:nth-child(4) {
  animation-delay: 9s;
}
.spax-img:nth-child(5) {
  animation-delay: 12s;
}
.spax-img:nth-child(6) {
  animation-delay: 15s;
}

@keyframes reveal {
  0% {
    opacity: 0;
    z-index: 0;
    --r: 0%;
  }
  15.78% { /* 0.5s / 18s ≈ 2.78%, quick fade-in */
    opacity: 1;
    z-index: 1;
    --r: 0%;
  }
  42.22% { /* 4s / 18s ≈ 22.22%, stays visible for 4s */
    opacity: 1;
    --r: 101%;
  }
  81
@property --r {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

.spax-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  --r: 101%;
  mask: 
    linear-gradient(red 0 0) exclude,
    radial-gradient(red calc(var(--r) - 1px), transparent var(--r)) 50% / 2em 2em;
  animation: reveal 18s infinite;
}
.spax-img:nth-child(1) { animation-delay: 0s; }
.spax-img:nth-child(2) { animation-delay: 4.67s; }
.spax-img:nth-child(3) { animation-delay: 9.33s; }
.spax-img:nth-child(4) { animation-delay: 14s; }
.spax-img:nth-child(5) { animation-delay: 18.67s; }
.spax-img:nth-child(6) { animation-delay: 23.33s; }

@keyframes reveal {
  0% {
    opacity: 0;
    z-index: 0;
    --r: 0%;
  }
  2% { /* Quick fade-in (0.5s) */
    opacity: 1;
    z-index: 1;
    --r: 0%;
  }
  91% { /* Remain visible for full 25s */
    opacity: 1;
    --r: 0%;
  }
  96% { /* Start radial reveal transition */
    opacity: 1;
    --r: 101%;
  }
  98% { /* Quick fade-out */
    opacity: 0;
    z-index: 0;
  }
  100% {
    opacity: 0;
    z-index: 0;
  }
}
`}</style>

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


            <div className="relative overflow-hidden w-[42rem] h-[30rem] max-w-none rounded-2xl bg-black">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index}`}
                  className="spax-img"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
