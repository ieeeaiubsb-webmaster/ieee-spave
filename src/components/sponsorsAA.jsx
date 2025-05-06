import React from "react";
const sponsorsData = [
  {
    name: "Vercel",
    logo: "<img src='/' alt='' />",
  },
];

export default function Sponsors() {
  return (
    <div className="max-w-3xl mx-auto px-5 mt-28">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Our Sponsors</h2>

          <p className="max-w-md mx-auto mt-2 text-gray-500">
            We are thankful to each and every company sponsored and their
            commitment to our event.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
          {sponsorsData.map((sponsor, index) => (
            <div
              key={index}
              className="text-gray-400"
              dangerouslySetInnerHTML={{ __html: sponsor.logo }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
