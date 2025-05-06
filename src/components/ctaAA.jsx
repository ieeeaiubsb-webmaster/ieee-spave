'use client';

export default function CTA() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-purple-800 from-10% via-purple-600 via-50% to-purple-800 to-90% px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
            Boost your productivity today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            The seats are limited. Do not miss the opportunity to be a part of
            this wonderful event. Apply early to secure your spot.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-purple-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-base font-semibold leading-7 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="827591b1-ce8c-4110-b064-7cb85a0b1217"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#9333ea" />
                <stop offset={1} stopColor="#9333ea" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}