"use client";

import React, { useState, useEffect } from 'react';

export default function Affiliates() {
  const [displayedText, setDisplayedText] = useState('');

  const images = [
    "bds.png", "yp.png", "cs.png", "bds sac.png",
    "aiub.png", "aiubcs.png", "aiubembs.png",
    "aiubias.png", "aiubmtts.png", "aiubwie.png",
  ];

  useEffect(() => {
    const text = "Our Affiliates";
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark-purple py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="mt-1 text-4xl text-center font-extrabold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
          {displayedText}
        </h1>

        <div className="mt-12 overflow-hidden relative">
          <div className="flex gap-8 animate-marquee w-max">
            {[...images, ...images].map((src, index) => (
              <div key={index} className="flex justify-center">
                <img className="h-20 w-auto object-contain" src={src} alt={src} />
              </div>
            ))}
          </div>
        </div>
      </div>


      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .bg-dark-purple {
          background-color: #3a0a45; /* Dark purple that syncs with black */
        }
      `}</style>
    </div>
  );
}
