"use client";

import Image from "next/image";

export default function Previous() {
  const images = [
    "/logos/spave6.png",
    "/logos/spave5.png",
    "/logos/spave4.png",
    "/logos/spave3.png",
    "/logos/spave2.png",
    "/logos/spave1.png",
    "/logos/spaw1.png",
    "/logos/spaw2.png",
    "/logos/step1.png",
    "/logos/step2.png",
  ];

  return (
    <div className="bg-black py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h1 className="mt-1 text-4xl text-start font-extrabold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-5xl">
              Our Past SPAx Ventures
            </h1>
            <p className="mt-6 text-lg leading-8 text-white text-justify">
              The IEEE AIUB Student Branch is the largest and one of the most
              accomplished student branches in the IEEE Bangladesh Section and
              IEEE Region 10. Renowned for its membership growth and
              professional and technical event organization, the branch made
              history in 2016 by hosting the first-ever Student Professional
              Awareness Venture (SPAVe) under the SPAx program of IEEE-USA in
              the Bangladesh Section, followed by SPAVe 2.0 in 2017, SPAVe 3.0
              in 2018, SPAVe 4.0 in 2019, SPAVe 5.0 in 2021, and SPAVe 6.0 in
              2023. Additionally, the Student Branch organized the first Student
              Professional Awareness Workshop (SPAW) in both the Bangladesh
              Section and Region 10 in 2018. These events were supported by IEEE
              USA, IEEE Region 10, IEEE Bangladesh Section, IEEE Young
              Professionals Bangladesh, and the IEEE BDS Student Activities
              Committee. The flagship programs included workshops, seminars, and
              technical talks designed to help students chart their future and
              establish successful professional careers.
            </p>
          </div>

          {/* Vertical marquee section */}
          <div className="w-full flex justify-center items-center overflow-hidden">
            <div className="h-[36rem] w-full sm:w-[22rem] relative">
              <div className="absolute animate-vertical-marquee flex flex-col gap-4">
                {[...images, ...images].map((src, index) => (
                  <div
                    key={index}
                    className="bg-purple-900/30 p-6 rounded-xl shadow-md"
                  >
                    <Image
                      className="h-24 w-full object-contain"
                      src={src}
                      alt={src}
                      width={100}
                      height={24}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom vertical animation */}
      <style jsx>{`
        @keyframes vertical-marquee {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
